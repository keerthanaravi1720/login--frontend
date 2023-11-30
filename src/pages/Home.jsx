

// import React from 'react';
// import './New.css';

// const New = () => {
//   return (
//     <>
//       <div className="cont">
//         <div className="c1"></div>
//         <div className="c2"></div>
//         <div className="c3"></div>
//         <div className="c1"></div>
//         <div className="c2"></div>
//         <div className="c3"></div>
//       </div>
//       <div className="circle"></div>
//       <div className="circle1"></div>
//       <div className="circle2"></div>
//       <div className="cont">
//         <div className="pentagon"></div>
//         <div className="hexagon"></div>
//       </div>
//     </>
//   );
// };

// export default New;













// import React from 'react';
// import { HomeOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
// import './New.css';
// import { useNavigate } from 'react-router-dom';


// const New = () => {
//   const navigate = useNavigate();

//   const handleHomeClick = () => {
//     navigate('/card');
//   };

//   const handleAboutClick = () => {
//     navigate('/about');
//   };

//   const handleContactClick = () => {
//     navigate('/contact');
//   };


//   return (
//     <>
//       <div className='cont'>
//         <div className="circle" onClick={handleHomeClick}>
//           <HomeOutlined />
//           <div className="icon-label">
//             <img
//               src="https://static.wixstatic.com/media/c837a6_16a98f508d924e89876cfa965dd448ff~mv2.jpg/v1/crop/x_1815,y_679,w_1361,h_1363/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1811519149.jpg"
//               alt="Kipon"
//               fetchpriority="high"
//               className='img'
//             />
//             <p>Card 1</p>
//           </div>
//         </div>
//         <div className="circle1" onClick={handleAboutClick}>
//         <MailOutlined />
//           <div className="icon-label">
//             <img
//               src="https://static.wixstatic.com/media/c837a6_1aa2b71b79dd4d99aac8c7a98d07c586~mv2.jpg/v1/crop/x_1579,y_198,w_1081,h_1081/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1711821976.jpg"
//               alt="Robotrix"
//               className='img'
//             />
//             <p>Card 2</p>
//           </div>
//         </div>
//         <div className="circle2" onClick={handleContactClick}>
        
//           <UserOutlined />
//           <div className="icon-label">
//             <img
//               src="https://static.wixstatic.com/media/c837a6_315534a972aa4595923fab16bc937c57~mv2.jpg/v1/crop/x_440,y_610,w_1448,h_1446/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1015612369.jpg"
//               alt="Treasure Box"
//               fetchpriority="high"
//               className='img'
//             />
//             <p>Card 3</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default New;




import React, { useState } from 'react';
import { HomeOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import './New.css';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const navigate = useNavigate();
  const [showHomeModal, setShowHomeModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleHomeClick = () => {
    setShowHomeModal(true);
  };

  const handleAboutClick = () => {
    setShowAboutModal(true);
  };

  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const handleModalClose = () => {
    setShowHomeModal(false);
    setShowAboutModal(false);
    setShowContactModal(false);
  };

  const handleConfirmHome = () => {
    navigate('/card');
    handleModalClose();
  };

  const handleConfirmAbout = () => {
    navigate('/about');
    handleModalClose();
  };

  const handleConfirmContact = () => {
    navigate('/contact');
    handleModalClose();
  };

  return (
    <>
      <div className="cont">
        <div className="circle" onClick={handleHomeClick}>
          <HomeOutlined />
          <div className="icon-label">
            <img
              src="https://static.wixstatic.com/media/c837a6_16a98f508d924e89876cfa965dd448ff~mv2.jpg/v1/crop/x_1815,y_679,w_1361,h_1363/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1811519149.jpg"
              alt="Kipon"
              fetchpriority="high"
              className="img"
            />
            <p>Card 1</p>
          </div>
        </div>
        <div className="circle1" onClick={handleAboutClick}>
          <MailOutlined />
          <div className="icon-label">
            <img
              src="https://static.wixstatic.com/media/c837a6_1aa2b71b79dd4d99aac8c7a98d07c586~mv2.jpg/v1/crop/x_1579,y_198,w_1081,h_1081/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1711821976.jpg"
              alt="Robotrix"
              className="img"
            />
            <p>Card 2</p>
          </div>
        </div>
        <div className="circle2" onClick={handleContactClick}>
          <UserOutlined />
          <div className="icon-label">
            <img
              src="https://static.wixstatic.com/media/c837a6_315534a972aa4595923fab16bc937c57~mv2.jpg/v1/crop/x_440,y_610,w_1448,h_1446/fill/w_119,h_119,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1015612369.jpg"
              alt="Treasure Box"
              fetchpriority="high"
              className="img"
            />
            <p>Card 3</p>
          </div>
        </div>
      </div>

      <Modal visible={showHomeModal} onCancel={handleModalClose} footer={null}>
        <h1>Confirmation</h1>
        <p className="p1">Are you sure you want to proceed to Card 1?</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={handleConfirmHome} className="butn1">
            Yes
          </button>
          <button onClick={handleModalClose} className="butn">
            No
          </button>
        </div>
      </Modal>

      <Modal visible={showAboutModal} onCancel={handleModalClose} footer={null}>
        <h1>Confirmation</h1>
        <p className="p1">Are you sure you want to proceed to Card 2?</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={handleConfirmAbout} className="butn1">
            Yes
          </button>
          <button onClick={handleModalClose} className="butn">
            No
          </button>
        </div>
      </Modal>

      <Modal visible={showContactModal} onCancel={handleModalClose} footer={null}>
        <h1>Confirmation</h1>
        <p className="p1">Are you sure you want to proceed to Card 3?</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={handleConfirmContact} className="butn1">
            Yes
          </button>
          <button onClick={handleModalClose} className="butn">
            No
          </button>
        </div>
      </Modal>
    </>
  );
};

export default New;
