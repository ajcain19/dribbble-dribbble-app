"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Hero = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-image"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-text"
  }, /*#__PURE__*/_react.default.createElement("h1", null, props.heading), /*#__PURE__*/_react.default.createElement("h2", null, props.blurb), /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: "Hire Me"
  }))));
};
var _default = Hero;
exports.default = _default;