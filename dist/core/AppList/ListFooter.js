"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    listFooterRoot: {
      padding: 10,
      color: theme.palette.text.secondary,
      display: 'flex',
      justifyContent: 'center'
    },
    listFooterLoaderRoot: {
      width: '100%',
      display: 'flex',
      color: theme.palette.text.secondary,
      justifyContent: 'center',
      padding: 8,
      borderTop: "1px solid ".concat(theme.palette.grey[200]),
      boxSizing: 'border-box'
    }
  };
});

var ListFooter = function ListFooter(_ref) {
  var loading = _ref.loading,
      footerText = _ref.footerText;
  var classes = useStyles();
  return loading ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.Box, {
    className: classes.listFooterLoaderRoot,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_core.CircularProgress, {
      size: 16
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.Box, {
      component: "span",
      ml: 2,
      children: "Loading..."
    })]
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.Box, {
    className: (0, _clsx["default"])(classes.listFooterRoot, 'list-footer'),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.Box, {
      component: "p",
      children: footerText
    })
  });
};

ListFooter.prototype = {
  loading: _propTypes["default"].bool,
  footerText: _propTypes["default"].string
};
ListFooter.defaultProps = {
  loading: false
};
var _default = ListFooter;
exports["default"] = _default;