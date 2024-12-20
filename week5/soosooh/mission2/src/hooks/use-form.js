import { useEffect, useState } from "react";

function useForm({ initialValues, validate }) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  //value : 값들, input change값 e.target.value
  const handleChangeInput = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = (name) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const getTextInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handleChangeInput(name, event.target.value);
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur };
  };

  useEffect(() => {
    const newErrors = validate(values);
    console.log(newErrors);
    setErrors(newErrors);
  }, [validate, values]);

  return { values, errors, touched, getTextInputProps };
}

export default useForm;
