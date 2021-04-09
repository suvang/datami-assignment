export default function validateInfo(values) {
    let errors = {};
  
    if (!values.checkImei.trim()) {
      errors.checkImei = 'IMEI required';
    }

    return errors;
  }