import React from 'react';
import './Form.css';

const FormSuccess = ({handlestatechange,supportedCarriers,model,mode,wifiCalling,hdVoice,verizonCostEstimate}) => {


   const back = () => {
     const submit = false;
     handlestatechange(submit)    
   }

  return (
    <div className='form-content-right'>

      
      <div > 
           <h1 className='form-success'> GREAT, Your model number is valid. <br/> We have received your request!</h1>

           <div className="form-success-data">
            <h3 >Supported Carriers : </h3> <p style={{color:'white',display: 'inline'}}>{supportedCarriers[0]}, {supportedCarriers[1]} </p> <br/>
            <h3 >model : </h3> <p> {model} </p><br/>
            <h3 >mode : </h3> <p> {mode} </p><br/>
            <h3 >wifiCalling : </h3> <p> {wifiCalling} </p><br/>
            <h3 >hdVoice : </h3> <p> {hdVoice} </p><br/>
            <h3 >verizonCostEstimate : </h3> <p>{verizonCostEstimate}</p><br/>
           </div>

           <div className="success-back">
             <a onClick={back} className="back">BACK</a>
             </div> 

      </div>

    </div>
    
  );
};

export default FormSuccess;