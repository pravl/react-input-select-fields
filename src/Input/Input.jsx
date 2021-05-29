import React, { useState, useEffect } from "react";

const Input = ({
  type = "text",
  name = "input",
  value,
  placeholder,
  maxLength,
  minLength,
  isRequired,
  errorMsg,
  isReadOnly,
  customValidation
}) => {
  const [inputValue, setInputValue] = useState(value)
  const [error, setError] = useState()


  const handleUserInput = (e) => {
    let text = e.target.value.trim()
    setInputValue(text)
  }

  const validateEmailInput = (input) => {
    let email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let matches = input.match(email_regex);

    return !matches ? 'Enter valid email address' : null
  }

  const validateNumberInput = (input) => {
    let for_only_number_regex = /^\d+$/
    let matches = input.match(for_only_number_regex);

    return !matches ? 'Enter only numbers' : null
  }

  const checkValidation = (input) => {
      let msg = null
      if (type == "email") {
        msg = validateEmailInput(input)
      } else if(type == "number") {
        msg = validateNumberInput(input)
        if (minLength && minLength > input.length) {
            msg = `minimum length should be ${minLength}`
        }else if (maxLength && maxLength < input.length) {
            msg = `maximum length should be ${minLength}`
        }

      }
      if (!msg && customValidation)
      msg = customValidation(input)
    
    setError(msg)
  }

  const handleOnBlur = (e) => {
    checkValidation(e.target.value)
  }


  return (
    <div>
      <input
        name={name}
        value={inputValue}
        type={type}
        placeholder={placeholder}
        onChange={handleUserInput}
        onBlur={handleOnBlur}
        required={isRequired}
        minLength={minLength}
        maxLength={maxLength}
        //pattern=".{5,10}"
        readOnly={isReadOnly}
       // autoFocus={this.props.auto_focus}
      />
      <span>{Boolean(error) ? error : ""}</span>
    </div>
  )
}

export default Input
