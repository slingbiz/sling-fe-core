"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _colors = require("@material-ui/core/colors");

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _makeStyles["default"])(function (theme) {
  return {
    appHeader: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      borderBottom: "1px solid ".concat(_colors.grey[300]),
      justifyContent: 'space-between'
    },
    checkboxRoot: {
      marginRight: 8
    },
    pointer: {
      cursor: 'pointer'
    }
  };
});

var AppsHeader = function AppsHeader(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], {
    container: true,
    spacing: 2,
    justifyContent: 'center',
    width: '100%',
    alignItems: "baseline",
    flexDirection: "row",
    px: 6,
    className: classes.appHeader,
    children: children
  });
};

var _default = AppsHeader;
exports["default"] = _default;
AppsHeader.defaultProps = {};