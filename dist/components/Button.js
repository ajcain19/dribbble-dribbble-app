"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    className: "button-primary",
    style: {
      margin: "0 0 1rem 0",
      backgroundColor: "lime",
      color: "black",
      fontFamily: "Sans-serif",
      fontSize: "1rem",
      padding: "8px 16px",
      border: "1px lime solid",
      borderRadius: "8px",
      textDecoration: "none"
    },
    href: "#"
  }, props.label));
};
var _default = Button;
exports.default = _default;