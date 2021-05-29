'use strict';

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = ".buttonComponent {\n\tborder-radius: 3px;\n\tpadding: 0.3rem 0.5rem;\n\ttransition: all 0.3s ease-out;\n\tbox-shadow: #272727b0 1px 1px 1px, #272727b0 -1px -1px 1px;\n}\n.buttonComponent:hover {\n\tbox-shadow: #272727b0 1px 1px 3px, #272727b0 -1px -1px 3px;\n}\n.buttonComponent:active {\n\topacity: 0.8;\n}\n";
n(css,{});

var AwesomeButton = function AwesomeButton(props) {
  var _useState = React.useState(null),
      _useState2 = _slicedToArray__default['default'](_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  React.useEffect(function () {
    if (props.variant) {
      if (props.variant === 'primary') {
        setColor('#0077ff');
      } else if (props.variant === 'secondary') {
        setColor('#ff0062');
      } else if (props.variant === 'success') {
        setColor('#0f8000');
      } else {
        setColor('#949393');
      }
    }
  });
  var children = props.children;
  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: "buttonComponent",
    style: {
      backgroundColor: color
    }
  }, children.toUpperCase());
};

var returnLibrary = function returnLibrary() {
  return {
    AwesomeButton: AwesomeButton // you can add here other components that you want to export

  };
};

var index = returnLibrary();

module.exports = index;
