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
      padding: "24px",
      margin: "24px",
      width: "75%",
      border: "3px solid lime",
      backgroundColor: "black",
      color: "white"
    }
  }, /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      margin: "0px",
      fontFamily: "cursive",
      fontSize: "3rem"
    }
  }, props.heading), /*#__PURE__*/_react.default.createElement("p", null, props.blurb), /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    style: {
      color: "lime",
      fontFamily: "cursive",
      fontWeight: "bold",
      fontSize: "2rem"
    }
  }, props.linkDescription)));
};
var _default = Callout;
exports.default = _default;