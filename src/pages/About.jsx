





// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../App.css';
// import { useNavigate } from 'react-router-dom';
// import { message } from 'antd';

// const CardGallery = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS library
//   }, []);

//   const Card = ({ title, content, image, aosEffect, className, messageContent }) => {
//     const navigate = useNavigate();

//     const handleCardClick = () => {
//       if (className === 'card1') {
//         navigate('/card');
//       } else if (className === 'card6') {
//         navigate('/contact');
//       } else {
//         message.info(messageContent);
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
//       <p>About</p>
//       <div className="card-container">
//         <Card aosEffect="fade-up" className="card1" title="1" messageContent="hehe" />
//         <Card aosEffect="fade-down" className="card2" title="2" messageContent="Wrong" />
//         <Card aosEffect="fade-right" className="card3" title="3" messageContent="hehehe" />
//       </div>

//       <div className="card-container">
//         <Card aosEffect="fade-up" className="card4" title="4" messageContent="try agin" />
//         <Card aosEffect="fade-down" className="card5" title="5" messageContent="ughh" />
//         <Card aosEffect="fade-right" className="card6" title="6" messageContent="baka" />
//       </div>

//       <div className="card-container">
//         <Card aosEffect="fade-up" className="card4" title="7" messageContent="hehe" />
//         <Card aosEffect="fade-down" className="card5" title="8" messageContent="wrong again" />
//         <Card aosEffect="fade-right" className="card6" title="9" messageContent="nop" />
//       </div>
//     </>
//   );
// };

// export default CardGallery;



// import React, { useEffect} from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../App.css';
// import { useNavigate } from 'react-router-dom';
// import { message } from 'antd';
// import { EyeOutlined } from '@ant-design/icons';

// const CardGallery = () => {
//   useEffect(() => {
//     AOS.init(); // Initialize AOS library
//   }, []);

//   const Card = ({ title, content, image, aosEffect, className, messageContent }) => {
   
//     // const [showModal, setShowModal] = useState(false);

//     const navigate = useNavigate();

//     const handleCardClick = () => {
//       if (className === 'card1') {
//         navigate('/');
//       } else if (className === 'card6') {
//         navigate('/contact');
//       } else {
//         message.info(messageContent);
//       }
//     };

//     // const handleViewIconClick = () => {
//     //   setShowModal(true);
//     // };
  
//     // const handleModalClose = () => {
//     //   setShowModal(false);
//     // };

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
//       <p>About</p>
//       <div className="card-container">
//         <Card aosEffect="fade-up" className="card1" title="1" messageContent="hehe" />
//         <Card aosEffect="fade-down" className="card2" title="2" messageContent="Wrong" />
//         <Card aosEffect="fade-right" className="card3" title="3" messageContent="hehehe" />
//       </div>

//       <div className="card-container">
//         <Card aosEffect="fade-up" className="card4" title="4" messageContent="try agin" />
//         <Card aosEffect="fade-down" className="card5" title="5" messageContent="ughh" />
//         <Card aosEffect="fade-right" className="card6" title="6" messageContent="baka" />
//       </div>

//       <div className="card-container">
//          <Card aosEffect="fade-up" className="card4" title="7" messageContent="hehe" />
//          <Card aosEffect="fade-down" className="card5" title="8" messageContent="wrong again" />
//          <Card aosEffect="fade-right" className="card6" title="9" messageContent="nop" />
//       </div>

     
//       <div className="view-icon-container">
//         <EyeOutlined className="view-icon" />
//       </div> 
     
//     </>
//   );
// };

// export default CardGallery;



import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { message, Modal } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

const CardGallery = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  const navigate = useNavigate();

  const handleCardClick = (className, messageContent) => {
    if (className === 'card1') {
      navigate('/');
    } else if (className === 'card6') {
      navigate('/contact');
    } else {
      message.info(messageContent);
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleViewIconClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const Card = ({ title, content, image, aosEffect, className, messageContent }) => {
    return (
      <div className={`card ${className}`} data-aos={aosEffect} onClick={() => handleCardClick(className, messageContent)}>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <p className='pp'>Card2</p>
      <div className="card-container">
        <Card aosEffect="fade-up" className="card1" title="1" messageContent="hehe" />
        <Card aosEffect="fade-down" className="card2" title="2" messageContent="Wrong" />
        <Card aosEffect="fade-right" className="card3" title="3" messageContent="hehehe" />
      </div>

      <div className="card-container">
        <Card aosEffect="fade-up" className="card4" title="4" messageContent="try agin" />
        <Card aosEffect="fade-down" className="card5" title="5" messageContent="ughh" />
        <Card aosEffect="fade-right" className="card6" title="6" messageContent="baka" />
      </div>

      <div className="card-container">
        <Card aosEffect="fade-up" className="card4" title="7" messageContent="hehe" />
        <Card aosEffect="fade-down" className="card5" title="8" messageContent="wrong again" />
        <Card aosEffect="fade-right" className="card6" title="9" messageContent="nop" />
      </div>

      <div className="view-icon-container">
        <button className="view-button" onClick={handleViewIconClick}>
          <EyeOutlined className="view-icon" />
        </button>
      </div>

      <Modal visible={showModal} onCancel={handleModalClose} footer={null}>
        {/* Place your data or content for the modal here */}
        <h1>About</h1>
        <p className='pp1'>Note:where one card can go back to first
         card page and the other card can go to next card page </p>
      </Modal>
    </>
  );
};

export default CardGallery;
