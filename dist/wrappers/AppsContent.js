"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAppsContentStyles = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _makeStyles = _interopRequireDefault(require("@material-ui/core/styles/makeStyles"));

var _core = require("@material-ui/core");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useAppsContentStyles = (0, _makeStyles["default"])(function (theme) {
  return {
    appsContentContainer: function appsContentContainer(props) {
      var _ref;

      return _ref = {
        display: 'flex',
        flexDirection: 'column',
        height: "calc(100% - ".concat(props.isDetailView ? 60 : 115, "px)")
      }, _defineProperty(_ref, theme.breakpoints.up('sm'), {
        height: "calc(100% - ".concat(props.fullView ? 0 : 60, "px)")
      }), _defineProperty(_ref, theme.breakpoints.up('xl'), {
        height: "calc(100% - ".concat(props.fullView ? 0 : 77, "px)")
      }), _defineProperty(_ref, '& .scrum-absolute', {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      }), _defineProperty(_ref, '& .scrum-row', {
        display: 'inline-flex',
        minWidth: '100%',
        height: '100%',
        marginLeft: '-10px',
        marginRight: '-10px'
      }), _defineProperty(_ref, '& .scrum-col', _defineProperty({
        minWidth: '280px',
        maxWidth: '280px',
        marginLeft: '10px',
        marginRight: '10px',
        borderRadius: theme.overrides.MuiCard.root.borderRadius,
        backgroundColor: (0, _core.fade)(theme.palette.background.paper, 0.45),
        height: '100% !important'
      }, theme.breakpoints.up('md'), {
        minWidth: '354px',
        maxWidth: '354px'
      })), _defineProperty(_ref, '& .scroll-scrum-item', {
        height: 'auto !important'
      }), _ref;
    }
  };
});
exports.useAppsContentStyles = useAppsContentStyles;

var AppsContent = function AppsContent(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
    children: props.children
  });
};

var _default = AppsContent;
exports["default"] = _default;
AppsContent.defaultProps = {
  isDetailView: false
};