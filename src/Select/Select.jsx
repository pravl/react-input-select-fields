import * as React from 'react';

import "./Select.css"



const Select = ({ defaultValue, dropDownList, onSelect }) => {

    const [value, setValue] = React.useState(defaultValue)

    const [dropDown, setDropDown] = React.useState(false)
    const dropDownRef = React.useRef(null)



    const clickOutside = (event) => {
        if (dropDown && dropDownRef && dropDownRef.current && !dropDownRef.current.contains(event.target)) {
          setDropDown(false)
        }
      }


      React.useEffect(() => {
        document.addEventListener("click", clickOutside)
        return () => document.removeEventListener("click", clickOutside)
      })


    const onChange = (el) => {
        setValue(el)
        if (onSelect)
        onSelect(el)
    }

  return (
    <div ref={dropDownRef} className="select-container">
      <div className="title-box" onClick={() => setDropDown(!dropDown)}>
          <div className="title-label">
          {value && value.label ? value.label : "Select" }
        </div>
        <div className="caret">
          {dropDown ? (
          <span style={{ color: "black" }}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
          </svg>
        </span>
          ) : (
            <span style={{ color: "black" }}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
              </svg>
            </span>
          )}
        </div>
      </div>
      <div
      className="select-box"
      style={ dropDown ? {display : "block"} : {visibility : "hidden"} }
      >
        <div className="list-container">
          {dropDownList && dropDownList.map((el, i) => (
            <div
            className="list"
              onClick={() => {
                setDropDown(false)
                onChange(el)
              }}
              key={i}
            >
              <div>{el.label}</div>
              <div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select
