"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomLinearProgress = CustomLinearProgress;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["pathColor", "activeColor", "thickness", "borderRadius"],
    _excluded2 = ["pathColor", "borderRadius", "activeColor", "thickness"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)({
  root: {
    height: function height(props) {
      return props.thickness;
    },
    borderRadius: function borderRadius(props) {
      return props.borderRadius;
    }
  },
  colorPrimary: {
    backgroundColor: function backgroundColor(props) {
      return props.pathColor;
    }
  },
  bar: {
    borderRadius: function borderRadius(props) {
      return props.borderRadius;
    },
    backgroundColor: function backgroundColor(props) {
      return props.activeColor;
    }
  }
});

function CustomLinearProgress(_ref) {
  var pathColor = _ref.pathColor,
      activeColor = _ref.activeColor,
      thickness = _ref.thickness,
      borderRadius = _ref.borderRadius,
      rest = _objectWithoutProperties(_ref, _excluded);

  var classes = useStyles({
    pathColor: pathColor,
    activeColor: activeColor,
    thickness: thickness,
    borderRadius: borderRadius
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinearProgress["default"], _objectSpread({
    className: classes.root,
    classes: {
      colorPrimary: classes.colorPrimary,
      bar: classes.bar
    }
  }, rest));
}

CustomLinearProgress.propTypes = {
  pathColor: _propTypes["default"].string,
  activeColor: _propTypes["default"].string,
  thickness: _propTypes["default"].number,
  borderRadius: _propTypes["default"].number
};
CustomLinearProgress.defaultProps = {
  thickness: 5,
  pathColor: '#d6d6d6',
  activeColor: '#1a90ff',
  borderRadius: 10
};

var AppLinearProgress = function AppLinearProgress(_ref2) {
  var pathColor = _ref2.pathColor,
      borderRadius = _ref2.borderRadius,
      activeColor = _ref2.activeColor,
      thickness = _ref2.thickness,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(CustomLinearProgress, _objectSpread({
    pathColor: pathColor,
    thickness: thickness,
    borderRadius: borderRadius,
    activeColor: activeColor
  }, rest));
};

AppLinearProgress.defaultProps = {
  thickness: 5,
  borderRadius: 10,
  pathColor: '#d6d6d6',
  activeColor: '#1a90ff',
  variant: 'determinate'
};
AppLinearProgress.prototype = {
  thickness: _propTypes["default"].number,
  borderRadius: _propTypes["default"].number,
  pathColor: _propTypes["default"].string,
  activeColor: _propTypes["default"].string,
  variant: _propTypes["default"].oneOf(['buffer', 'determinate', 'indeterminate', 'query'])
};
var _default = AppLinearProgress;
exports["default"] = _default;