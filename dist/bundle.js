'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".select-container {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n.select-box {\r\n    position: absolute;\r\n}\r\n\r\n.title-box {\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    border: 1px gray solid;\r\n    padding:4px;\r\n    padding: 6px;\r\n    border-radius: 3px;\r\n}\r\n\r\n.title-label {\r\n    min-width: 40px;\r\n}\r\n\r\n.list-container {\r\n    cursor: pointer;\r\n    padding-left: 2px;\r\n}\r\n\r\n.list {\r\n    padding:6px;\r\n    padding-left: 8px;\r\n    border: 1px #d0c9c9 solid;\r\n}\r\n\r\n.caret {\r\n    margin-top: 2px;\r\n    padding-left: 2px;\r\n} ";
styleInject(css_248z);

var Select = function Select(_ref) {
  var defaultValue = _ref.defaultValue,
      dropDownList = _ref.dropDownList,
      onSelect = _ref.onSelect;

  var _React$useState = React__namespace.useState(defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = React__namespace.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      dropDown = _React$useState4[0],
      setDropDown = _React$useState4[1];

  var dropDownRef = React__namespace.useRef(null);

  var clickOutside = function clickOutside(event) {
    if (dropDown && dropDownRef && dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  React__namespace.useEffect(function () {
    document.addEventListener("click", clickOutside);
    return function () {
      return document.removeEventListener("click", clickOutside);
    };
  });

  var onChange = function onChange(el) {
    setValue(el);
    if (onSelect) onSelect(el);
  };

  return /*#__PURE__*/React__namespace.createElement("div", {
    ref: dropDownRef,
    className: "select-container"
  }, /*#__PURE__*/React__namespace.createElement("div", {
    className: "title-box",
    onClick: function onClick() {
      return setDropDown(!dropDown);
    }
  }, /*#__PURE__*/React__namespace.createElement("div", {
    className: "title-label"
  }, value && value.label ? value.label : "Select"), /*#__PURE__*/React__namespace.createElement("div", {
    className: "caret"
  }, dropDown ? /*#__PURE__*/React__namespace.createElement("span", {
    style: {
      color: "black"
    }
  }, /*#__PURE__*/React__namespace.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"
  }))) : /*#__PURE__*/React__namespace.createElement("span", {
    style: {
      color: "black"
    }
  }, /*#__PURE__*/React__namespace.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
  }))))), /*#__PURE__*/React__namespace.createElement("div", {
    className: "select-box",
    style: dropDown ? {
      display: "block"
    } : {
      visibility: "hidden"
    }
  }, /*#__PURE__*/React__namespace.createElement("div", {
    className: "list-container"
  }, dropDownList && dropDownList.map(function (el, i) {
    return /*#__PURE__*/React__namespace.createElement("div", {
      className: "list",
      onClick: function onClick() {
        setDropDown(false);
        onChange(el);
      },
      key: i
    }, /*#__PURE__*/React__namespace.createElement("div", null, el.label), /*#__PURE__*/React__namespace.createElement("div", null));
  }))));
};

var Input = function Input(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? "input" : _ref$name,
      value = _ref.value,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "Enter here" : _ref$placeholder,
      maxLength = _ref.maxLength,
      minLength = _ref.minLength,
      isRequired = _ref.isRequired;
      _ref.errorMsg;
      var isReadOnly = _ref.isReadOnly,
      customValidation = _ref.customValidation,
      handleOnInputChange = _ref.handleOnInputChange,
      handleOnInputBlur = _ref.handleOnInputBlur;

  var _React$useState = React__namespace.useState(value || ""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      inputValue = _React$useState2[0],
      setInputValue = _React$useState2[1];

  var _React$useState3 = React__namespace.useState(),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var handleUserInput = function handleUserInput(e) {
    var text = e.target.value.trim();
    setInputValue(text);
    if (handleOnInputChange) handleOnInputChange(e);
  };

  var validateEmailInput = function validateEmailInput(input) {
    var email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var matches = input.match(email_regex);
    return !matches ? 'Enter valid email address' : null;
  };

  var validateNumberInput = function validateNumberInput(input) {
    var for_only_number_regex = /^\d+$/;
    var matches = input.match(for_only_number_regex);
    return !matches ? 'Enter only numbers' : null;
  };

  var checkValidation = function checkValidation(input) {
    var msg = null;

    if (type == "email") {
      msg = validateEmailInput(input);
    } else if (type == "number") {
      msg = validateNumberInput(input);

      if (minLength && minLength > input.length) {
        msg = "minimum length should be ".concat(minLength);
      } else if (maxLength && maxLength < input.length) {
        msg = "maximum length should be ".concat(minLength);
      }
    }

    if (!msg && customValidation) msg = customValidation(input);
    setError(msg);
  };

  var handleOnBlur = function handleOnBlur(e) {
    checkValidation(e.target.value);
    if (handleOnInputChange) handleOnInputBlur(e);
  };

  return /*#__PURE__*/React__namespace.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React__namespace.createElement("input", {
    className: "input",
    name: name,
    value: inputValue,
    type: type,
    placeholder: placeholder,
    onChange: handleUserInput,
    onBlur: handleOnBlur,
    required: isRequired,
    minLength: minLength,
    maxLength: maxLength //pattern=".{5,10}"
    ,
    readOnly: isReadOnly // autoFocus={this.props.auto_focus}

  }), /*#__PURE__*/React__namespace.createElement("span", null, Boolean(error) ? error : ""));
};

var InputElement = Input;
var SingleSelect = Select;

exports.InputElement = InputElement;
exports.SingleSelect = SingleSelect;
//# sourceMappingURL=bundle.js.map
