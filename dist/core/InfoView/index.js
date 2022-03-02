"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _Loader = _interopRequireDefault(require("../Loader"));

var _index = require("../../index");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InfoView = function InfoView() {
  var _useSelector = (0, _reactRedux.useSelector)(function (_ref) {
    var common = _ref.common;
    return common;
  }),
      error = _useSelector.error,
      loading = _useSelector.loading,
      message = _useSelector.message;

  var showMessage = function showMessage() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.MessageView, {
      variant: "success",
      message: message.toString()
    });
  };

  var showError = function showError() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.MessageView, {
      variant: "error",
      message: error.toString()
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Loader["default"], {}), message && showMessage(), error && showError()]
  });
};

var _default = InfoView;
exports["default"] = _default;