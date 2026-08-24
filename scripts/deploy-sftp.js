/**
 * Upload the Create React App `build/` folder to UH ITS SFTP.
 * Credentials and remote path come from `.env` in the project root.
 *
 * Required: SFTP_USERNAME, SFTP_PASSWORD
 * Optional (defaults match UH hosting): SFTP_HOST, SFTP_PORT, SFTP_REMOTE_PATH
 */

const fs = require("fs");
const path = require("path");
const SftpClient = require("ssh2-sftp-client");

const ROOT = path.resolve(__dirname, "..");
const ENV_PATH = path.join(ROOT, ".env");
const BUILD_DIR = path.join(ROOT, "build");

function loadEnvFile(filePath) {
  const env = {};
  if (!fs.existsSync(filePath)) {
    return env;
  }
  const text = fs.readFileSync(filePath, "utf8");
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

function isBlank(value) {
  return value == null || String(value).trim() === "";
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

async function main() {
  if (!fs.existsSync(ENV_PATH)) {
    fail(
      "Missing .env file. Copy .env.example to .env and add your SFTP username and password."
    );
  }

  const fileEnv = loadEnvFile(ENV_PATH);
  const host = (fileEnv.SFTP_HOST || "webedit.its.hawaii.edu").trim();
  const port = Number(fileEnv.SFTP_PORT || 22);
  const username = (fileEnv.SFTP_USERNAME || "").trim();
  const password = fileEnv.SFTP_PASSWORD || "";
  const remotePath = (fileEnv.SFTP_REMOTE_PATH || "/1/esports").trim();

  const missing = [];
  if (isBlank(username)) missing.push("SFTP_USERNAME");
  if (isBlank(password)) missing.push("SFTP_PASSWORD");

  if (missing.length > 0) {
    fail(
      `Your .env file is missing required values: ${missing.join(", ")}.\n` +
        "Open .env and fill those in (see .env.example), then try again.\n" +
        "Do not share or commit your password."
    );
  }

  if (!fs.existsSync(BUILD_DIR)) {
    fail(
      'No build/ folder found. Run "npm run build" first, then deploy again.'
    );
  }

  const sftp = new SftpClient();

  try {
    console.log(`Connecting to ${host}:${port} as ${username}...`);
    await sftp.connect({
      host,
      port,
      username,
      password,
    });

    const remoteExists = await sftp.exists(remotePath);
    if (!remoteExists) {
      console.log(`Creating remote folder ${remotePath}...`);
      await sftp.mkdir(remotePath, true);
    }

    console.log(`Uploading build/ → ${remotePath} ...`);
    await sftp.uploadDir(BUILD_DIR, remotePath);
    console.log("Deploy finished successfully.");
    console.log("Live site (typical): https://www.hawaii.edu/esports/");
  } catch (err) {
    fail(
      `Deploy failed: ${err && err.message ? err.message : String(err)}\n` +
        "Check your username/password, network access to webedit.its.hawaii.edu, and that you can write to the remote folder."
    );
  } finally {
    try {
      await sftp.end();
    } catch (_) {
      // ignore close errors
    }
  }
}

main();
