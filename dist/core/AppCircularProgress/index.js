"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _AppEnums = require("../../utility/constants/AppEnums");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["pathColor", "activeColor", "value", "centerNode", "hidePercentage", "minWidth", "maxWidth", "valueStyle", "thickness"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: 'relative',
      minWidth: function minWidth(props) {
        return props.minWidth;
      },
      maxWidth: function maxWidth(props) {
        return props.maxWidth;
      },
      margin: '0 auto'
    },
    circularProgressRoot: function circularProgressRoot(props) {
      return {
        color: props.pathColor,
        width: '100% !important',
        height: '100% !important'
      };
    },
    circularProgressPrimary: function circularProgressPrimary(props) {
      return {
        color: props.activeColor,
        animationDuration: '550ms',
        position: 'absolute',
        left: theme.direction === 'rtl' ? -2 : 2,
        top: -2,
        width: '100% !important',
        height: '100% !important'
      };
    },
    centerContent: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      zIndex: 3,
      fontWeight: _AppEnums.Fonts.EXTRA_BOLD,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    circle: {
      strokeLinecap: 'round'
    }
  };
});

var AppCircularProgress = function AppCircularProgress(_ref) {
  var pathColor = _ref.pathColor,
      activeColor = _ref.activeColor,
      value = _ref.value,
      centerNode = _ref.centerNode,
      hidePercentage = _ref.hidePercentage,
      minWidth = _ref.minWidth,
      maxWidth = _ref.maxWidth,
      valueStyle = _ref.valueStyle,
      thickness = _ref.thickness,
      props = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles({
    pathColor: pathColor,
    activeColor: activeColor,
    minWidth: minWidth,
    maxWidth: maxWidth
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box["default"], {
    className: classes.root,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box["default"], {
      position: "relative",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress["default"], _objectSpread({
        variant: "static",
        value: 100,
        className: classes.circularProgressRoot,
        thickness: thickness
      }, props)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_CircularProgress["default"], _objectSpread({
        className: classes.circularProgressPrimary,
        variant: "static",
        value: value,
        thickness: thickness,
        classes: {
          circle: classes.circle
        }
      }, props))]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box["default"], {
      className: classes.centerContent,
      children: [centerNode, hidePercentage ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box["default"], {
        fontSize: 30,
        fontWeight: 500,
        color: "secondary.main",
        style: valueStyle,
        children: [value, "%"]
      })]
    })]
  });
};

var _default = AppCircularProgress;
exports["default"] = _default;
AppCircularProgress.prototype = {
  hidePercentage: _propTypes["default"].bool,
  pathColor: _propTypes["default"].string,
  activeColor: _propTypes["default"].string,
  value: _propTypes["default"].number,
  thickness: _propTypes["default"].number,
  valueStyle: _propTypes["default"].object
};
AppCircularProgress.defaultProps = {
  hidePercentage: false,
  minWidth: 130,
  maxWidth: 200,
  pathColor: '#d6d6d6',
  activeColor: '#23fa23',
  thickness: 10
};