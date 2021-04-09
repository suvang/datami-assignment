import React from 'react';
import './Form.css';

const FormInvalid = () => {
  return (
    <div className='form-content-right'>
      <h1  className='form-success'> we coudnt processs your request because <br/> the IMEI number you entered is incorrect.</h1>
    
    </div>
  );
};

export default FormInvalid;