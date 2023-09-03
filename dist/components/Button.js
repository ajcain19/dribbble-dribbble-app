"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "dribbble-button",
    style: {
      backgroundColor: "lime",
      color: "black",
      fontFamily: "Sans-serif",
      fontSize: "2rem",
      fontWeight: "bold",
      padding: "8px 16px",
      border: "none",
      borderRadius: "8px"
    }
  }, props.label);
};
var _default = Button;
exports.default = _default;