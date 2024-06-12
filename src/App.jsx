import React, { useState } from 'react';
import './App.css';
import Footer from './client/components/footer/Footer';
import Login from './client/components/login/Login';
import Navbar from './client/components/navbar/Navbar';
import Signup from './client/components/signup/Signup';
import Topbar from './client/components/topbar/Topbar';
import Router from './router/Router';


function App() {

  const [selectedButton, setSelectedButton] = useState(0);
  const [isOpenAuthen, setIsOpenAuthen] = useState(false);

  const renderContent = () => {
    switch (selectedButton) {
      case 0:
        return <Login />;
      case 1:
        return <Signup />;
    }
  };

  return (
    <div className="App">
      <Topbar
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
        isOpenAuthen={isOpenAuthen}
        setIsOpenAuthen={setIsOpenAuthen}
      />
      <div className="Login-app">
        {renderContent()}
      </div>
      <Router />
      <Footer />
    </div>
  );
}

export default App;
