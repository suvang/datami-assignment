import React, { useState } from 'react';
import './Form.css';
import FormCheck from './FormCheck';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
    console.log('submittedForm', isSubmitted);
  }

  return (
    <>
      <div className='form-container'>
        <FormCheck submitForm={submitForm} />
      </div>
    </>
  );
};

export default Form;