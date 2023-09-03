"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import "../../App.scss";

const Hero = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-image",
    style: {
      backgroundImage: "url(" + "https://www.usatoday.com/gcdn/presto/2021/12/03/USAT/0e438781-bdd3-4410-8e77-8a0906254333-Photo_by_Steven_Pisano.png" + ")",
      height: "500px",
      width: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-text",
    style: {
      padding: "24px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      textAlign: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white"
    }
  }, /*#__PURE__*/_react.default.createElement("h1", null, props.heading), /*#__PURE__*/_react.default.createElement("p", null, props.blurb), /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: "Primary Button"
  }))));
};
var _default = Hero;
exports.default = _default;