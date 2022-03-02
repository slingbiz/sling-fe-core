"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _clsx = _interopRequireDefault(require("clsx"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _IntlMessages = _interopRequireDefault(require("../../utility/IntlMessages"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _makeStyles["default"])(function (theme) {
  return {
    emptyListContainer: {
      flexDirection: 'column',
      minHeight: 450,
      height: '100%',
      flex: 1,
      display: 'flex',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      border: theme.palette.grey[500],
      borderRadius: 4,
      textAlign: 'center'
    },
    flexRow: {
      flexDirection: 'row'
    }
  };
});

var ListEmptyResult = function ListEmptyResult(_ref) {
  var loader = _ref.loader,
      placeholder = _ref.placeholder,
      loading = _ref.loading,
      title = _ref.title,
      actionTitle = _ref.actionTitle,
      content = _ref.content,
      onClick = _ref.onClick;
  var classes = useStyles();

  if (loading || loader) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react["default"].Fragment, {
      children: placeholder ? placeholder : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.Box, {
        className: (0, _clsx["default"])(classes.emptyListContainer, classes.flexRow),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_core.CircularProgress, {
          size: 16
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.Box, {
          component: "span",
          ml: 2,
          children: "Loading..."
        })]
      })
    });
  } else {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.Box, {
      className: classes.emptyListContainer,
      children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.Box, {
        component: "h4",
        fontSize: 18,
        color: "text.secondary",
        mb: 3,
        children: title
      }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.Box, {
        fontSize: 16,
        component: "p",
        color: "text.hint",
        children: content
      }), actionTitle ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.Button, {
        color: "primary",
        variant: "contained",
        style: {
          marginTop: 30,
          height: 45,
          minWidth: 150
        },
        onClick: onClick,
        children: actionTitle
      }) : null]
    });
  }
};

var _default = ListEmptyResult;
exports["default"] = _default;
ListEmptyResult.defaultProps = {
  title: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IntlMessages["default"], {
    id: "common.noRecordFound"
  }),
  description: ''
};
ListEmptyResult.prototype = {
  title: _propTypes["default"].string,
  description: _propTypes["default"].string,
  actionTitle: _propTypes["default"].string,
  action: _propTypes["default"].func
};