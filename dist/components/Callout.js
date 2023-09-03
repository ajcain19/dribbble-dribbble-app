"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Callout = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "callout-container"
  }, /*#__PURE__*/_react.default.createElement("h1", null, props.heading), /*#__PURE__*/_react.default.createElement("p", null, props.blurb), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, props.linkDescription)));
};
var _default = Callout;
exports.default = _default;