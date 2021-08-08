import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function submitHandler(e) {
    e.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }
  return (
    <form className='form-AddForm'  onSubmit={submitHandler}>
      <input {...input.bind} className='form-control' style={{width:'80%',marginRight:'.5rem'}}/>
      <button type="submit" className='btn btn-primary' style={{padding:0}}> Add Todo</button>
    </form>
  );
}
AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default AddTodo;
