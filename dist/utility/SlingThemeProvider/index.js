"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("@date-io/moment"));

var _styles = require("@material-ui/core/styles");

var _pickers = require("@material-ui/pickers");

var _AppContext = _interopRequireDefault(require("../AppContext"));

var _core = require("@material-ui/core");

var _Utils = require("../Utils");

var _AppEnums = require("../constants/AppEnums");

var _useUrlSearchParams3 = require("use-url-search-params");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SlingThemeProvider = function SlingThemeProvider(props) {
  var _useContext = (0, _react.useContext)(_AppContext["default"]),
      theme = _useContext.theme,
      isRTL = _useContext.isRTL,
      updateThemeMode = _useContext.updateThemeMode,
      changeNavStyle = _useContext.changeNavStyle,
      updateThemeStyle = _useContext.updateThemeStyle,
      setRTL = _useContext.setRTL,
      updateTheme = _useContext.updateTheme,
      locale = _useContext.locale;

  var appLocale = props.appLocale;
  var muiLocale = appLocale[locale.locale].muiLocale;

  var _useUrlSearchParams = (0, _useUrlSearchParams3.useUrlSearchParams)({}),
      _useUrlSearchParams2 = _slicedToArray(_useUrlSearchParams, 1),
      params = _useUrlSearchParams2[0];

  (0, _react.useEffect)(function () {
    var updateQuerySetting = function updateQuerySetting() {
      if (params.theme_mode) {
        updateThemeMode(params.theme_mode);
      }
    };

    updateQuerySetting();
  }, [params.theme_mode, updateThemeMode]);
  (0, _react.useEffect)(function () {
    var updateQuerySetting = function updateQuerySetting() {
      if (params.is_rtl) {
        setRTL(params.is_rtl);
      }

      if (params.is_rtl || isRTL) {
        document.body.setAttribute('dir', 'rtl');
      } else {
        document.body.setAttribute('dir', 'ltr');
      }
    };

    updateQuerySetting();
  }, [isRTL, params.is_rtl, setRTL]);
  (0, _react.useEffect)(function () {
    var updateQuerySetting = function updateQuerySetting() {
      if (params.nav_style) {
        changeNavStyle(params.nav_style);
      }
    };

    updateQuerySetting();
  }, [changeNavStyle, params.nav_style]);
  (0, _react.useEffect)(function () {
    var updateQuerySetting = function updateQuerySetting() {
      if (params.theme_style) {
        if (params.theme_style === _AppEnums.ThemeStyle.MODERN) {
          if ((0, _Utils.isBreakPointDown)('md')) {
            theme.overrides.MuiCard.root.borderRadius = 20;
            theme.overrides.MuiToggleButton.root.borderRadius = 20;
          } else {
            theme.overrides.MuiCard.root.borderRadius = 30;
            theme.overrides.MuiToggleButton.root.borderRadius = 30;
          }

          theme.overrides.MuiButton.root.borderRadius = 30;
          theme.overrides.MuiCardLg.root.borderRadius = 50;
        } else {
          theme.overrides.MuiCard.root.borderRadius = 4;
          theme.overrides.MuiToggleButton.root.borderRadius = 4;
          theme.overrides.MuiButton.root.borderRadius = 4;
          theme.overrides.MuiCardLg.root.borderRadius = 4;
        }

        updateTheme(theme);
        updateThemeStyle(params.theme_style);
      }
    };

    updateQuerySetting();
  }, [params.theme_style, theme, updateTheme, updateThemeStyle]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styles.ThemeProvider, {
    theme: (0, _core.responsiveFontSizes)((0, _core.createTheme)(theme, muiLocale)),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_pickers.MuiPickersUtilsProvider, {
      utils: _moment["default"],
      children: props.children
    })
  });
};

var _default = /*#__PURE__*/_react["default"].memo(SlingThemeProvider);

exports["default"] = _default;
SlingThemeProvider.propTypes = {
  children: _propTypes["default"].node.isRequired
};