"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ListView = _interopRequireDefault(require("./ListView"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListFooter = _interopRequireDefault(require("./ListFooter"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["footerProps"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AppList = function AppList(_ref) {
  var footerProps = _ref.footerProps,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListView["default"], _objectSpread(_objectSpread({}, props), {}, {
    ListFooterComponent: footerProps ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListFooter["default"], {
      loading: footerProps.loading,
      footerText: footerProps.footerText
    }) : null
  }));
};

var _default = AppList;
exports["default"] = _default;
AppList.propTypes = {
  border: _propTypes["default"].bool,
  containerStyle: _propTypes["default"].object,
  ListEmptyComponent: _propTypes["default"].node,
  ListFooterComponent: _propTypes["default"].node,
  data: _propTypes["default"].array.isRequired,
  onEndReached: _propTypes["default"].func
};
AppList.defaultProps = {
  border: false,
  data: []
};