

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../App.css';
// import {  useNavigate } from 'react-router-dom';
// import { message } from 'antd';



// const CardGallery = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS library
//   }, []);

//   const Card = ({ title, content, image, aosEffect, className }) => {
//     const navigate = useNavigate();

//     const handleCardClick = () => {
//       if (className === 'card3') {
//         navigate('/about');
//       } else {
//         message.info(`wrong`);
       
//       }
//     };

//     return (
//       <div className={`card ${className}`} data-aos={aosEffect} onClick={handleCardClick}>
//         <div className="card-content">
//           <h2>{title}</h2>
//           <p>{content}</p>
//         </div>
//       </div>
//     );
//   };
//   return (
//     <>
//       <div className="card-container">
//         <Card aosEffect="fade-up" className="card1" title='1'/>
//         <Card aosEffect="fade-down" className="card2"  title='2'/>
//         <Card aosEffect="fade-right" className="card3"  title='3'/>
        
//         <Card aosEffect="fade-up" className="card4" title='4' />
//         <Card aosEffect="fade-down" className="card5"  title='5'/>
//         <Card aosEffect="fade-right" className="card6"  title='6'/>
       
//       </div>
      

//       <div className="card-container">
//         <Card aosEffect="fade-up" className="card1" title='7'/>
//         <Card aosEffect="fade-down" className="card2" title='8' />
//         <Card aosEffect="fade-right" className="card3" title='9' />
        
//         <Card aosEffect="fade-up" className="card4"  title='10'/>
//         <Card aosEffect="fade-down" className="card5" title='11'/>
//         <Card aosEffect="fade-right" className="card6" title='12'/>
       
//       </div>
      
//       <div className="card-container">
//         <Card aosEffect="fade-up" className="card1" title='13'/>
//         <Card aosEffect="fade-down" className="card2" title='14'/>
//         <Card aosEffect="fade-right" className="card3" title='16'/>
        
//         <Card aosEffect="fade-up" className="card4" title='17'/>
//         <Card aosEffect="fade-down" className="card5" title='18'/>
//         <Card aosEffect="fade-right" className="card6" title='19' />
       
//       </div>
      
//       <div className="card-container">
//         <Card aosEffect="fade-up" className="card1"  title='20'/>
//         <Card aosEffect="fade-down" className="card2" title='21'/>
//         <Card aosEffect="fade-right" className="card3"  title='22'/>
        
//         <Card aosEffect="fade-up" className="card4" title='23' />
//         <Card aosEffect="fade-down" className="card5"  title='24'/>
//         <Card aosEffect="fade-right" className="card6" title='25'/>
       
//       </div>
      
//     </>
//   );
// };

// export default CardGallery;



// <--source code-->




import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const CardGallery = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  const Card = ({ title, content, image, aosEffect, className, messageContent }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
      if (className === 'card3') {
        navigate('/about');
      }
      else if(className==='card1'){
        navigate('/')
      }
      else {
        message.info(messageContent);
      }
    };

   

    return (
      <div className={`card ${className}`} data-aos={aosEffect} onClick={handleCardClick} >
        <div className="card-content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    );
  };

  

  return (
    <>
    {/* <div className='b'> */}
   
      <div className="card-container">
        <Card aosEffect="fade-up" className="card1" title="1" messageContent="Wrong " />
        <Card aosEffect="fade-down" className="card2" title="2" messageContent="Wrong again" />
        <Card aosEffect="fade-right" className="card3" title="3" messageContent="hehe" />
        
        <Card aosEffect="fade-up" className="card4" title='4' messageContent="hehe"/>
        <Card aosEffect="fade-down" className="card5"  title='5'messageContent="Wrong again"/>
        <Card aosEffect="fade-right" className="card6"  title='6'messageContent="Wrong "/>
      </div>
      

      <div className="card-container">
         <Card aosEffect="fade-up" className="card1" title='7' messageContent="Wrong "/>
         <Card aosEffect="fade-down" className="card2" title='8' messageContent="hehe"/>
         <Card aosEffect="fade-right" className="card3" title='9'  messageContent="Wrong again"/>
        
         <Card aosEffect="fade-up" className="card4"  title='10' messageContent="hehe"/>
         <Card aosEffect="fade-down" className="card5" title='11'messageContent="Wrong "/>
         <Card aosEffect="fade-right" className="card6" title='12' messageContent="Wrong again"/>
       
</div>

<div className="card-container">
        <Card aosEffect="fade-up" className="card1" title='13' messageContent="Wrong again"/>
         <Card aosEffect="fade-down" className="card2" title='14' messageContent="hehe"/>
         <Card aosEffect="fade-right" className="card3" title='16'messageContent="Wrong "/>
        
         <Card aosEffect="fade-up" className="card4" title='17' messageContent="hehe"/>
         <Card aosEffect="fade-down" className="card5" title='18'messageContent="Wrong "/>
         <Card aosEffect="fade-right" className="card6" title='19'  messageContent="Wrong again"/>
       
      </div>
      

      <div className="card-container">
        <Card aosEffect="fade-up" className="card1"  title='20' messageContent="hehe"/>
         <Card aosEffect="fade-down" className="card2" title='21' messageContent="Wrong again"/>
        <Card aosEffect="fade-right" className="card3"  title='22'messageContent="Wrong "/>
        
        <Card aosEffect="fade-up" className="card4" title='23' messageContent="Wrong "/>
         <Card aosEffect="fade-down" className="card5"  title='24' messageContent="Wrong again"/>
         <Card aosEffect="fade-right" className="card6" title='25' messageContent="hehe"/>
       
      </div>
      
    </>
  );
};

export default CardGallery;