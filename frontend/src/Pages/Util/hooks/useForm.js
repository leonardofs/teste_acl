import { useState} from "react";


const useForm = () => {

  const [values, setValues] = useState({ });

  const handleChange = (event) => {
    const auxValues = { ...values };
    auxValues[event.target.name] = event.target.value;
    setValues(auxValues);
  };

  const handleSubmit = callback => event => {
    event.preventDefault();

    callback();

  };

  return [{ values}, handleChange, handleSubmit];
};

export default useForm;