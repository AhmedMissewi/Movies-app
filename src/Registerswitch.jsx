import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function Registerswitch() {
  const [currentForm, setCurrentForm] = useState('register');


  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const renderForm = () => {
    if (currentForm === 'register') {
      return <Login onFormSwitch={toggleForm} />;
    } else if (currentForm === 'login') {
      return <Register onFormSwitch={toggleForm} />;
    }
    
  };

  return <div>{renderForm()}</div>;
}


