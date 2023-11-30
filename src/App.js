


// import React from 'react';
// import {  Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './component/Navbar';
// import CardGallery from './pages/CardGallery';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Login from './pages/Login';

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="App">
//         <h1>Card Gallery</h1>
//         <Routes>
//           <Route path="/" element={<CardGallery />} />
//           {/* Add more routes for other pages */}
//           <Route path="about" element={<About/>}/>
//           <Route path="contact" element={<Contact/>}/>
//           <Route path="login" element={<Login/>}/>
//         </Routes>
//       </div>
   
//     </>
//   );
// };

// export default App;


import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import CardGallery from './pages/CardGallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import New from './pages/Home';

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      <Navbar />
      <div className="App">
        {!isLoginPage && <h1>Card Gallery</h1>}
        <Routes>
        <Route path="/" element={<New />} />
          <Route path="/card" element={<CardGallery />} />
          {/* Add more routes for other pages */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
         
        </Routes>
      </div>
    </>
  );
};

export default App;
