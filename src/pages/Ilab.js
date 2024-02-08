/*import * as React from 'react';
import logo from "../logo.svg";
import Button from "@mui/material/Button";
import { useInView } from 'react-intersection-observer';*/
//importing everything 
import * as React from 'react';
import Grid from '@mui/material/Grid';
import './Ilab.css';
import { styled } from '@mui/material/styles';
import group_1 from '../assets/images/group_1.jpg';
import group_2 from '../assets/images/group_2.jpg';
import group_3 from '../assets/images/group_3.jpg';
import group_4 from '../assets/images/group_4.png';
import { useInView } from 'react-intersection-observer';
import SectionTitle from "../components/SectionTitle";
import SectionDescription from "../components/SectionDescription";
import OpeningPageImage from '../components/OpeningPageImage';
import Divider from '@mui/material/Divider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LocationImages = styled('div')(({theme}) => ({
  backgroundSize: "cover",
  height: "250px",
  borderRadius: "5px",
  [theme.breakpoints.down('lg')]:{
    height: "200px",
    [theme.breakpoints.up('md')]:{
      height: "150px",
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
        <Grid lg={5} md={5} xs={12} item>
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
        <Grid lg={5} md={5} xs={12} item>
        <LocationImages sx={{m:1 }} style={{backgroundImage:`url("${group_1}")`}} className={inView ? 'slideIn1000ms' : 'hidden'}/>
        <LocationImages sx={{m:1 }} style={{backgroundImage:`url("${group_1}")`}} className={inView ? 'slideIn1000ms' : 'hidden'}/>
        <LocationImages sx={{m:1 }} style={{backgroundImage:`url("${group_1}")`}} className={inView ? 'slideIn1000ms' : 'hidden'}/>
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
  // EquipmentItem component
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

const StaffImages = styled('div')(({ theme }) => ({
  backgroundSize: "cover",
  backgroundPosition: "center", 
  height: "250px",
  width: "250px",
  borderRadius: "50%", 
  [theme.breakpoints.down('lg')]: {
    height: "200px",
    width: "200px",
    [theme.breakpoints.down('md')]: {
      height: "150px",
      width: "150px",
    },
  },
}));
  
const StaffBlock = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "2%",
  marginRight: "2%",
  textAlign: "center",
  flexDirection: "column",
}));

/* Temporary style for description overflow */
const StaffDesc = {
  wordWrap: 'break-word',
  whiteSpace: 'normal',
  marginTop: 1,
  overflow: 'hidden',
};

function StaffMember({ image, name, role, slideIn }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  return (
    <StaffBlock ref={ref} className={inView ? slideIn : 'hidden'}>
      <StaffImages style={{ backgroundImage: `url("${image}")` }} />
      <SectionDescription sx={{ mt: 2, fontWeight: 'bold' }}>{name}</SectionDescription>
      <SectionDescription>{role}</SectionDescription>
    </StaffBlock>
  );
}

const staffData = [
  {
    image: group_1,
    name: "First Last",
    role: "Role in iLab",
    slideIn: "slideIn1300ms",
  },
  {
    image: group_2,
    name: "First Last",
    role: "Role in iLab",
    slideIn: "slideIn1700ms",
  },
  {
    image: group_3,
    name: "First Last",
    role: "Role in iLab",
    slideIn: "slideIn2100ms",
  },
];

function Staff() {
  const { ref , inView } = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });


  return (
    <Grid 
      item lg={8} md={8} xs={10}
      sx={{ 
          mt: { lg: 1, md: 1, xs: 1 }, 
          pb: 10,
          display:'flex', 
          justifyContent:"center", 
          margin: 'auto',
          alignContent:"center",
          borderRadius: '10px',}} 
          ref={ref}
          container spacing={4}  
          backgroundColor={"rgba(219, 215, 215, 0.3)"}>
      <Grid item md={8} xs={10} ref={ref}>
        <SectionTitle className={inView ? 'slideIn1300ms' : 'hidden'} sx={{ mb: 1 }}>
          STAFF
        </SectionTitle>
        <SectionDescription className={inView ? 'slideIn1300ms' : 'hidden'} sx={{ mb: 1 }}>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </SectionDescription>
      </Grid>
      <Grid className="staff" justifyContent="center" item md={8} xs={10} ref={ref}>  
        {staffData.map((staff, index) => (
          <StaffMember key={index} {...staff} />
        ))}
      </Grid>
    </Grid>
  );
}
  

function Ilab() {
    return (
        <>
        <OpeningPageImage header="ILab" subtitle1="Monday - Fridays" subtitle2="10:30 AM - 4:00 PM HST" imageURL={group_4} />
        <Location />
        <AvailableEquipment />
        <Staff />
        </>
    );
}

export default Ilab;