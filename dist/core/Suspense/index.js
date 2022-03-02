"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../../index");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Suspense = function Suspense(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react["default"].Suspense, {
    fallback: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.Loader, {}),
    children: props.children
  });
};

Suspense.propTypes = {
  loadingProps: _propTypes["default"].object
};
Suspense.defaultProps = {
  loadingProps: {
    delay: 300
  }
};
var _default = Suspense;
exports["default"] = _default;
Suspense.propTypes = {
  children: _propTypes["default"].node.isRequired
};