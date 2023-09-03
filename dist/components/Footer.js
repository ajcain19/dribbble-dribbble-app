"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Footer = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer",
    style: {
      backgroundColor: "lime"
    }
  }, /*#__PURE__*/_react.default.createElement("h2", null, props.label)));
};
var _default = Footer;
exports.default = _default;