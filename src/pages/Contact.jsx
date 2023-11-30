


// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../App.css';
// import { useNavigate  } from 'react-router-dom';

// const CardGallery = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS library
//   }, []);

//   const Card = ({ title, content, image, aosEffect, className }) => {
//     const navigate = useNavigate();

//     const handleCardClick = () => {
      
//       if (className === 'card4') {
//         navigate('/');
//       } else if (className === 'card6') {
//         navigate('/contact');
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
//       <p>Contact</p>
//       <div className="card-container">
//         <Card aosEffect="fade-up" className="card1" title='1' />
//         <Card aosEffect="fade-down" className="card2" title='2'/>
//       </div>

//       <div className="card-container">
//         <Card aosEffect="fade-up" className="card4" title='3'/>
//         <Card aosEffect="fade-down" className="card5" title='4'/>
//       </div>
//     </>
//   );
// };

// export default CardGallery;




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
      if (className === 'card4') {
        navigate('/about');
      } else if (className === 'card2') {
        navigate('/');
      } else {
        message.info(messageContent);
      }
    };

    return (
      <div className={`card ${className}`} data-aos={aosEffect} onClick={handleCardClick}>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <p className='pp'>Card3</p>
      <div className="card-container">
        <Card aosEffect="fade-up" className="card1" title="1" messageContent="try again" />
        <Card aosEffect="fade-down" className="card2" title="2" messageContent="baka" />
      </div>

      <div className="card-container">
        <Card aosEffect="fade-up" className="card4" title="3" messageContent="wrong" />
        <Card aosEffect="fade-down" className="card5" title="4" messageContent="wrong again" />
      </div>
    </>
  );
};

export default CardGallery;
