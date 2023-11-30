
import React, { useState } from 'react';
import { message, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './Login.css';
import axios from 'axios';


const Login = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  // const [modal, setModal] = useState(null);

  const handleCreateAccountClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  const handleCreate = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });

      const { accessToken, userDetails } = response.data;

      setAccessToken(accessToken);
      setUserDetails(userDetails);
      message.success('Login successful');
      setModalVisible(true);
    } catch (error) {
      console.error(error);
      message.error('Login failed');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post('http://localhost:3000/users', {
        name,
        email,
        password,
      });

      console.log(response.data); // Handle the response data as needed
      setRegistrationSuccess(true); // Set registration success state
    } catch (error) {
      console.error(error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleEditDetails = () => {
   
    console.log('Edit details');
  };  

  const handleDeleteDetails = () => {
    
    console.log('Delete details');
  };

 

  return (
    <div className='b'>
      <div className="container">
        {!showRegisterForm && !showLoginForm ? (
          <div className="c">
            <h2 className="h">Login</h2>
            <form onSubmit={handleLogin}>
              <input type="text" className="i" placeholder="Email" name="email" />
              <input type="password" className="i" placeholder="Password" name="password" />
              <button type="submit">Login</button>
              <p onClick={handleCreateAccountClick}>Create an account?</p>
            </form>
          </div>
        ) : showRegisterForm ? (
          <div className="c">
            <h2 className="h">Register</h2>
            {registrationSuccess ? (
              <div className="success-message">Registration successful!</div>
            ) : null}
            <form onSubmit={handleRegister}>
              <input type="text" className="i" placeholder="Full Name" name="name" />
              <input type="email" className="i" placeholder="Email" name="email" />
              <input type="password" className="i" placeholder="Password" name="password" />
              <button type="submit">Register</button>
              <p onClick={handleCreate}>Login!</p>
            </form>
          </div>
        ) : (
          <div className="c">
            <h2 className="h">Login</h2>
            <form onSubmit={handleLogin}>
              <input type="text" className="i" placeholder="Username" name="username" />
              <input type="password" className="i" placeholder="Password" name="password" />
              <button type="submit">Login</button>
              <p onClick={handleCreateAccountClick}>Create an account?</p>
            </form>
          </div>
        )}

        <Modal
          title="User Details :)"
          visible={modalVisible}
          onCancel={closeModal}
          footer={null}
        >
          {accessToken && (
            <div className="token-details">
              <h3>Access Token:</h3>
               <p className='pp'>{accessToken}</p>
            </div>
          )}

          {userDetails && (
            <div className="user-details">
              <h3>User Details:</h3>
              <p className='p1'>Name: {userDetails.name}</p>
              <p className='p1'>Email: {userDetails.email}</p>
              <div className="action-buttons">
                <button  className='tn'  onClick={handleEditDetails} >
                  <EditOutlined /> Edit
                </button>
                <button className='tn' onClick={handleDeleteDetails} >
                  <DeleteOutlined /> Delete
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Login;

