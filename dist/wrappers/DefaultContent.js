"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DefaultContent = function DefaultContent(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
    container: true,
    spacing: 2,
    justifyContent: 'center',
    width: 'auto',
    alignItems: "baseline",
    flexDirection: "row",
    children: props.children
  });
};

var _default = DefaultContent;
exports["default"] = _default;
DefaultContent.defaultProps = {
  isDetailView: false
};