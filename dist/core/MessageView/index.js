"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _colors = require("@material-ui/core/colors");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _SnackbarContent = _interopRequireDefault(require("@material-ui/core/SnackbarContent"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _styles = require("@material-ui/core/styles");

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["className", "message", "variant"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var variantIcon = {
  success: _CheckCircle["default"],
  warning: _Warning["default"],
  error: _Error["default"],
  info: _Info["default"]
};
var useStyles1 = (0, _styles.makeStyles)(function (theme) {
  return {
    success: {
      backgroundColor: _colors.green[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.main
    },
    warning: {
      backgroundColor: _colors.amber[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1)
    },
    message: {
      display: 'flex',
      alignItems: 'center'
    }
  };
});

var AppSnackbar = function AppSnackbar(props) {
  var classes = useStyles1();

  var _React$useState = _react["default"].useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var className = props.className,
      message = props.message,
      variant = props.variant,
      other = _objectWithoutProperties(props, _excluded);

  var Icon = variantIcon[variant];

  var onClose = function onClose() {
    setOpen(false);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Snackbar["default"], {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    open: open,
    autoHideDuration: 6000,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SnackbarContent["default"], _objectSpread({
      className: (0, _clsx["default"])(classes[variant], className),
      "aria-describedby": "client-snackbar",
      message: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        id: "client-snackbar",
        className: classes.message,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
          className: (0, _clsx["default"])(classes.icon, classes.iconVariant)
        }), message]
      }),
      action: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton["default"], {
        "aria-label": "close",
        color: "inherit",
        onClick: onClose,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Close["default"], {
          className: classes.icon
        })
      }, 'close')]
    }, other))
  });
};

AppSnackbar.propTypes = {
  className: _propTypes["default"].string,
  message: _propTypes["default"].string,
  variant: _propTypes["default"].oneOf(['error', 'info', 'success', 'warning']).isRequired
};
var _default = AppSnackbar;
exports["default"] = _default;