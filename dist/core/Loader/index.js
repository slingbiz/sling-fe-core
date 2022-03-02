"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Loader = function Loader() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
    height: "100%",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    style: {
      position: 'absolute'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress["default"], {
      size: 40
    })
  });
};

var _default = Loader;
exports["default"] = _default;