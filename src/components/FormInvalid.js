import React from 'react';
import './Form.css';

const FormInvalid = ({handleinvalidstate}) => {

  const back = () => {
    
    handleinvalidstate(false,false,false)    
  }

  return (
    <div className='form-content-right'>
      <h1  className='form-success'> we coudnt processs your request because <br/> the IMEI number you entered is incorrect.</h1>
      <div className="success-back">
             <a onClick={back} className="back">BACK</a>
             </div> 
    </div>
  );
};

export default FormInvalid;