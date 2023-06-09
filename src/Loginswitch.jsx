import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function Loginswitch() {
  const [currentForm, setCurrentForm] = useState('login');


  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const renderForm = () => {
    if (currentForm === 'login') {
      return <Login onFormSwitch={toggleForm} />;
    } else if (currentForm === 'register') {
      return <Register onFormSwitch={toggleForm} />;
    }
    
  };

  return <div>{renderForm()}</div>;
}


