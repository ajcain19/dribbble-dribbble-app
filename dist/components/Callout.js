"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import "../../App.scss";

const Callout = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "callout-container",
    style: {
      // Callout Container
      padding: "16px",
      margin: "24px 0px",
      border: "1px solid grey",
      minWidth: "50%",
      backgroundColor: "white",
      color: "#000",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      textAlign: "left"
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      margin: "0px"
    }
  }, props.heading), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: "#333"
    }
  }, props.blurb), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    style: {
      color: "blue"
    }
  }, props.linkDescription)));
};
var _default = Callout;
exports.default = _default;