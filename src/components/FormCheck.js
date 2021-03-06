import React, {useState } from 'react';
import validate from '../validations/validateInfo';
import useForm from '../validations/useForm'
import './Form.css';
import FormSuccess from './FormSuccess';
import FormInvalid from './FormInvalid';

const FormCheck = ({ submitForm }) => {

  const [issubmitted, setisSubmitted] = useState(false);
  const [invalidrequest, setInvalidrequest] = useState(false);
  const [loading, isloading] = useState(false);
  const [fetchedData, setfetchedData] = useState(null);

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const handlestatechange = (value) => {
   setisSubmitted(value);
  }

  const handleinvalidstate= (value1,value2,value3) => {
    setInvalidrequest(value1);
    setisSubmitted(value2);
    isloading(value3)
   }


  const compareImei = async () => {
    isloading(true);
    const response = await fetch(`https://api-qa.reachmobile.com/v0/imei/info/${values.checkImei}`);
    const data = await response.json();
    setfetchedData(data.data);

    if(!response.ok){
        setInvalidrequest(true);
    }else{
    
      if(data.data.imei === values.checkImei && data.data.isValid ){
        console.log('true');
        setisSubmitted(true); 
        isloading(false);
       
      }else{
        setisSubmitted(true);
        setInvalidrequest(true);
      }
    
    }
  }


  return (
   
    <div className='form-content-right'>

      {

        !issubmitted  ?
      
      <form onSubmit={handleSubmit} className='form' noValidate>
        
        <h1>
        Check your device IMEI compatibility
        </h1>

        <div className='form-inputs'>
          <input
            className='form-input'
            type='text'
            name='checkImei'
            maxLength="15"
           // disabled={values.checkImei.length > 15? true : false}
            placeholder='Device IMEI or MEID number'
            value={values.checkImei}
            onChange={handleChange}
          />
          {<p style={{textAlign: 'center'}}><p style={{color: 'red'}}>Please enter no more than 15 letters</p> {values.checkImei.length <= 15? 
          values.checkImei.length : null}/15</p>}
          {errors.checkImei && <p>{errors.checkImei}</p>}
        </div>

        <div className="form-input-trouble">
          <a href='#'>Having Trouble?</a>
        </div>
      
        <button  onClick={compareImei} className='form-input-btn' type='submit'>
          Check Compatibility
        </button>

            <div>
        {!errors.checkImei && loading? <div style={{color:'red', padding: '10px'}}><h1>LOADING...</h1></div> : null}
        </div>

      </form>

      : !invalidrequest? <FormSuccess handlestatechange={handlestatechange} supportedCarriers={fetchedData.supportedCarriers} model={fetchedData.model} mode={fetchedData.mode}
      wifiCalling={fetchedData.wifiCalling} hdVoice={fetchedData.hdVoice} verizonCostEstimate={fetchedData.verizonCostEstimate}
      />
      
      : <FormInvalid handleinvalidstate = {handleinvalidstate} />
}

     
    </div>
  );
};

export default FormCheck;