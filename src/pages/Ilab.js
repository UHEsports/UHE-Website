import * as React from 'react';
import Grid from '@mui/material/Grid';
import './Ilab.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import group_1 from '../assets/images/group_1.jpg';
import group_2 from '../assets/images/group_2.jpg';
import group_3 from '../assets/images/group_3.jpg';
import group_4 from '../assets/images/group_4.png';
import Button from "@mui/material/Button";
import { useInView } from 'react-intersection-observer';
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import OpeningPageImage from '../components/OpeningPageImage';
import volunteer_graphic from "../assets/images/ilab_volunteer_graphic.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//TODO: fix location section to seamless transition between page size
const LocationImages = styled('div')(({theme}) => ({
  backgroundSize: "cover",
  height: "800px",
  borderRadius: "5px",
  [theme.breakpoints.down('lg')]:{
    height: "600px",
    [theme.breakpoints.up('md')]:{
      height: "400px",
      [theme.breakpoints.up('sm')]:{
        height: "400px",
        [theme.breakpoints.up('xs')]:{
          height: "400px",
        }
      }
    }
  }
}))
function Location(){
  const{ref, inView} = useInView({
    triggerOnce: true,
    rootMargin: '-150px',
  });

  return(
    <Grid
      sx={{mt:4, p:1, pb:3,}}
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      ref={ref}>
        <Grid lg={4} md={4} xs={12} item>
          <SectionTitle sx={{mb: 4 }} style={{textAlign: 'left'}} className={inView ? 'slideIn1500ms' : 'hidden'}>
            LOCATION
          </SectionTitle>
          <SectionDescription sx={{textAlign:'left', mb:3}} className={inView ? 'slideIn1500ms' : 'hidden'}>
          <span style={{ fontWeight: 'bold' }}>Lorem ipsum - </span>
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
          </SectionDescription>
          <SectionDescription sx={{textAlign:'left', mb:3}} className={inView ? 'slideIn1500ms' : 'hidden'}>
          <span style={{ fontWeight: 'bold' }}>Lorem ipsum - </span>
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
          </SectionDescription>
        </Grid>
        <Grid lg={7} md={7} xs={12} item>
        <LocationImages sx={{m:1 }} style={{backgroundImage:`url("${group_1}")`}} className={inView ? 'slideIn1000ms' : 'hidden'}/>
        </Grid>

    </Grid>
  )
}


const SpacesImage = styled('div')(({theme}) => ({
  backgroundSize: "cover",
  height: "260px",
  borderRadius: "5px",
  [theme.breakpoints.down('lg')]:{
    height: "200px",
    [theme.breakpoints.up('md')]:{
      height: "150px",
    }
  }
}))

const SpacesMainImages = styled('div')(({theme}) => ({
  backgroundSize: "cover",
  height: "800px",
  borderRadius: "5px",
  [theme.breakpoints.down('lg')]:{
    height: "600px",
    [theme.breakpoints.up('md')]:{
      height: "500px",
      [theme.breakpoints.up('sm')]:{
        height: "475px",
        [theme.breakpoints.up('xs')]:{
          height: "450px",
        }
      }
    }
  }
}))


function Spaces(){
  const{ref, inView} = useInView({
    triggerOnce: true,
    rootMargin: '-150px',
  });

  return(
    <Grid
      sx={{mt:4, p:1, pb:3,}}
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      ref={ref}>
        <Grid lg={12} md={8} xs={12} item>
          <SectionTitle sx={{ml:9 }} style={{textAlign: 'left'}} className={inView ? 'slideIn1500ms' : 'hidden'}>
            SPACES
          </SectionTitle>
          </Grid>
        <Grid lg={8} md={8} xs={12} item>
          <SpacesMainImages sx={{m:1 }} style={{backgroundImage:`url("${group_1}")`}} className={inView ? 'slideIn1000ms' : 'hidden'}/>
        </Grid>
        <Grid lg={3} md={3} xs={12} item>
        <SpacesImage sx={{mb:1 }} style={{backgroundImage:`url("${group_1}")`}} className={inView ? 'slideIn1000ms' : 'hidden'}/>
        <SpacesImage sx={{mb:1 }} style={{backgroundImage:`url("${group_1}")`}} className={inView ? 'slideIn1000ms' : 'hidden'}/>
        <SpacesImage sx={{mb:1 }} style={{backgroundImage:`url("${group_1}")`}} className={inView ? 'slideIn1000ms' : 'hidden'}/>
        </Grid>

    </Grid>
  )
}

function AvailableEquipment() {
  const { ref } = useInView({
      triggerOnce: true,
      rootMargin: '-170px 0px',
  });

 
  const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      responsive: [
          {
              breakpoint: 1300,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
              }
          },
          {
              breakpoint: 975,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          },
          
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
          
      ]
  };
  const EquipmentItem = ({ image, title, description }) => (
    <div style={{ margin: '8px', height: '200px' }}>
      <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div>
        <SectionDescription sx={{ mt: 2, fontWeight: "bold" }}>{title}</SectionDescription>
        <SectionDescription>{description}</SectionDescription>
      </div>
    </div>
  );

  const equipmentData = [
    {
      image: group_1,
      title: "Bose QuietComfort 35",
      description: "Tempora aut est maiores error laudantium ut architecto",
    },
    {
      image: group_2,
      title: "Logitech Pro Wireless",
      description: "Tempora aut est maiores error laudantium ut architecto",
    },
    {
      image: group_3,
      title: "Logitech Superlight",
      description: "Tempora aut est maiores error laudantium ut architecto",
    },
    {
      image: group_1,
      title: "Xbox One",
      description: "Tempora aut est maiores error laudantium ut architecto",
    },
    {
      image: group_2,
      title: "Xbox One S",
      description: "Tempora aut est maiores error laudantium ut architecto",
    },
    {
      image: group_3,
      title: "PS5",
      description: "Tempora aut est maiores error laudantium ut architecto",
    },
    {
      image: group_1,
      title: "Nintendo Switch",
      description: "Tempora aut est maiores error laudantium ut architecto",
    },
    {
      image: group_1,
      title: "Nintendo Switch Pro Controllers",
      description: "Tempora aut est maiores error laudantium ut architecto",
    },
    {
      image: group_2,
      title: "Community Monitors",
      description: "Tempora aut est maiores error laudantium ut architecto",
    },
    {
      image: group_3,
      title: "PS5 Controllers",
      description: "Tempora aut est maiores error laudantium ut architecto",
    },
    {
      image: group_2,
      title: "Xbox One Controllers",
      description: "Tempora aut est maiores error laudantium ut architecto",
    },
  ];

  return (
    <Grid sx={{ mt: { lg: 1, md: 1, xs: 1 }, pb: 3 }} container spacing={4} justifyContent="center" alignItems="center">
      <Grid item md={12} xs={12} ref={ref}>
        <SectionTitle sx={{ mb: 1 }}>
          AVAILABLE EQUIPMENT
        </SectionTitle>
      </Grid>
      <Grid sx={{ mt: 3 , mb:7}} item md={11} xs={11}>
        <Slider {...settings}>
          {equipmentData.map((item, index) => (
            <Grid key={index} className='test'>
              <EquipmentItem {...item} />
            </Grid>
          ))}
        </Slider>
      </Grid>
    </Grid>
  );  
}

function Volunteer(){
  const {ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-150px',
  });
  return(
    <Grid sx={{mt:8, backgroundColor:"#f6f6f6", pt:1, pb:5}} spacing={4} container justifyContent="center" alignItems="center" ref={ref}>
      <Grid item lg={5} md={5} sm={11} xs={11}>
        <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'}>Volunteer!</SectionTitle>
        <Box sx={{mt:{lg:4, md:2, xs:2}}}>
          <SectionDescription style={{textAlign:'center'}} className={inView ? 'slideIn1500ms' : 'hidden'}>
            Duis in nulla ullamco cillum aliqua et incididunt in culpa tempor cupidatat irure consectetur est aliquip dolor, amet.
            Aute, adipisicing amet quis sit voluptate reprehenderit elit occaecat ad quis magna culpa anim dolor do aliqua duis nulla ad.
            Fugiat incididunt id quis cillum eiusmod consectetur aliqua
            <br/>
            <Button sx={{mt:{lg:5, md:3, sm:4, xs:2}, fontWeight:"bold"}} size="large" variant="contained" color="uhegreen" href="https://discord.gg/uhesports" target="_blank">Sign up</Button>
          </SectionDescription>
        </Box>
      </Grid>
      <Grid item lg={4} md={5} sm={10} xs={11}>
          <img
              style={{borderRadius:'10px'}}
              alt="UHE Courses"
              width="100%"
              className={inView ? 'slideIn1000ms' : 'hidden'}
              src={volunteer_graphic}
          />
      </Grid>
    </Grid>
  );
}


function Ilab() {
    return (
        <>
        <OpeningPageImage header="ILab" subtitle1="Monday - Fridays" subtitle2="10:30 AM - 4:00 PM HST" imageURL={group_4} />
        <Location />
        <Spaces />
        <Volunteer/>
        </>
    );
}

export default Ilab;