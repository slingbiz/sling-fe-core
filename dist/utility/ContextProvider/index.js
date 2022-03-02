"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AppContext = _interopRequireDefault(require("../AppContext"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ContextReducer = require("./ContextReducer");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ContextProvider = function ContextProvider(_ref) {
  var children = _ref.children,
      initConfig = _ref.initConfig,
      layout = _ref.layout,
      routeConstants = _ref.routeConstants,
      ssrApi = _ref.ssrApi;
  var ContextState = {
    theme: initConfig.theme,
    footer: initConfig.footer,
    footerType: initConfig.footerType,
    themeMode: initConfig.themeMode,
    headerMode: initConfig.headerMode,
    themeStyle: initConfig.themeStyle,
    layoutType: initConfig.layoutType,
    isRTL: initConfig.theme.direction === 'rtl',
    locale: initConfig.locale,
    navStyle: initConfig.navStyle,
    rtAnim: initConfig.rtAnim,
    primary: initConfig.theme.palette.primary.main,
    sidebarColor: initConfig.theme.palette.sidebar.bgColor,
    secondary: initConfig.theme.palette.secondary.main,
    layout: layout,
    routeConstants: routeConstants,
    ssrApi: ssrApi
  };

  var _useReducer = (0, _react.useReducer)(_ContextReducer.contextReducer, ContextState, function () {
    return ContextState;
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var setFooter = function setFooter(footer) {
    dispatch({
      type: _ContextReducer.ThemeSetting.SET_FOOTER,
      payload: footer
    });
  };

  var setFooterType = function setFooterType(footerType) {
    dispatch({
      type: _ContextReducer.ThemeSetting.SET_FOOTER_TYPE,
      payload: footerType
    });
  };

  var updateHeaderMode = function updateHeaderMode(headerMode) {
    dispatch({
      type: _ContextReducer.ThemeSetting.UPDATE_HEADER_MODE,
      payload: headerMode
    });
  };

  var updateThemeStyle = (0, _react.useCallback)(function (themeStyle) {
    dispatch({
      type: _ContextReducer.ThemeSetting.UPDATE_THEME_STYLE,
      payload: themeStyle
    });
  }, []);

  var updateLayoutStyle = function updateLayoutStyle(layoutType) {
    dispatch({
      type: _ContextReducer.ThemeSetting.UPDATE_LAYOUT_STYLE,
      payload: layoutType
    });
  };

  var changeLocale = function changeLocale(locale) {
    dispatch({
      type: _ContextReducer.ThemeSetting.CHANGE_LOCALE,
      payload: locale
    });
  };

  var changeNavStyle = (0, _react.useCallback)(function (navStyle) {
    dispatch({
      type: _ContextReducer.ThemeSetting.CHANGE_NAV_STYLE,
      payload: navStyle
    });
  }, []);

  var changeRTAnim = function changeRTAnim(rtAnim) {
    dispatch({
      type: _ContextReducer.ThemeSetting.CHANGE_RT_ANIM,
      payload: rtAnim
    });
  };

  var updatePrimaryColor = function updatePrimaryColor(primary) {
    dispatch({
      type: _ContextReducer.ThemeSetting.UPDATE_PRIMARY_COLOR,
      payload: primary
    });
  };

  var updateSidebarColor = function updateSidebarColor(sidebarColor) {
    dispatch({
      type: _ContextReducer.ThemeSetting.UPDATE_SIDEBAR_COLOR,
      payload: sidebarColor
    });
  };

  var updateSecondaryColor = function updateSecondaryColor(secondary) {
    dispatch({
      type: _ContextReducer.ThemeSetting.UPDATE_SECONDARY_COLOR,
      payload: secondary
    });
  };

  var updateThemeMode = (0, _react.useCallback)(function (themeMode) {
    dispatch({
      type: _ContextReducer.ThemeSetting.UPDATE_THEME_MODE,
      payload: themeMode
    });
  }, []);

  var updateTheme = function updateTheme(theme) {
    dispatch({
      type: _ContextReducer.ThemeSetting.UPDATE_THEME,
      payload: theme
    });
  };

  var setRTL = (0, _react.useCallback)(function (rtl) {
    dispatch({
      type: _ContextReducer.ThemeSetting.SET_RTL,
      payload: rtl
    });
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppContext["default"].Provider, {
    value: _objectSpread(_objectSpread({}, state), {}, {
      updateLayoutStyle: updateLayoutStyle,
      rtlLocale: initConfig.rtlLocale,
      setRTL: setRTL,
      updateSidebarColor: updateSidebarColor,
      setFooter: setFooter,
      setFooterType: setFooterType,
      updateThemeStyle: updateThemeStyle,
      updateTheme: updateTheme,
      updateHeaderMode: updateHeaderMode,
      updateThemeMode: updateThemeMode,
      updatePrimaryColor: updatePrimaryColor,
      updateSecondaryColor: updateSecondaryColor,
      changeLocale: changeLocale,
      changeNavStyle: changeNavStyle,
      changeRTAnim: changeRTAnim
    }),
    children: children
  });
};

var _default = ContextProvider;
exports["default"] = _default;
ContextProvider.propTypes = {
  children: _propTypes["default"].node.isRequired,
  initConfig: _propTypes["default"].object
};