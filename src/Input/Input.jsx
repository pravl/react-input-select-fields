import React, { useState, useEffect } from "react";

const Input = ({
  type = "text",
  name = "input",
  value,
  placeholder,
  maxLength,
  minLength,
  isRequired,
}) => {
  const [inputValue, setInputValue] = useState(value)


  const handleUserInput = (e) => {
    let input = e.target.value.toString()

    setInputValue(e.target.value)
  }

  return (
    <div>
      <input
        name={name}
        value={inputValue}
        type={type}
        placeholder={placeholder}
        onChange={handleUserInput}
      //  onBlur={this.handleOnBlur.bind(this)}
        maxLength={maxLength}
        minLength={minLength}
        required={isRequired}
       // autoFocus={this.props.auto_focus}
      />
    </div>
  )
}

export default Input
