"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _actions = require("../../../redux/actions");

var _reactRedux = require("react-redux");

var _InfoView = _interopRequireDefault(require("../../core/InfoView"));

var _core = require("@material-ui/core");

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AppEnums = _interopRequireDefault(require("../../utility/constants/AppEnums"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _index = _interopRequireDefault(require("./index.style"));

var _AppSidebar = _interopRequireDefault(require("../AppSidebar"));

var _AppContext = _interopRequireDefault(require("../../utility/AppContext"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Fonts = _AppEnums["default"].Fonts;

var AppsContainer = function AppsContainer(props) {
  var dispatch = (0, _reactRedux.useDispatch)();

  var _useSelector = (0, _reactRedux.useSelector)(function (_ref) {
    var common = _ref.common;
    return common;
  }),
      isAppDrawerOpen = _useSelector.isAppDrawerOpen;

  var _useContext = (0, _react.useContext)(_AppContext["default"]),
      footer = _useContext.footer,
      navStyle = _useContext.navStyle; // eslint-disable-next-line react/prop-types


  var title = props.title,
      sidebarContent = props.sidebarContent,
      fullView = props.fullView,
      children = props.children;
  var classes = (0, _index["default"])({
    footer: footer,
    navStyle: navStyle,
    fullView: fullView
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.Box, {
    pt: {
      xl: 4
    },
    flex: 1,
    display: "flex",
    flexDirection: "column",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.Box, {
      mb: {
        xs: fullView ? 4 : 2,
        lg: fullView ? 5 : 4
      },
      mt: {
        xs: fullView ? 0 : -3,
        lg: 0
      },
      display: "flex",
      alignItems: "center",
      children: [fullView ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Hidden["default"], {
        lgUp: true,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton["default"], {
          edge: "start",
          className: classes.menuButton,
          color: "inherit",
          "aria-label": "open drawer",
          onClick: function onClick() {
            return dispatch((0, _actions.onToggleAppDrawer)());
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu["default"], {
            className: classes.menuIcon
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.Box, {
        component: "h2",
        color: "text.primary",
        fontWeight: Fonts.BOLD,
        fontSize: 16,
        children: title
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.Box, {
      className: classes.appsContainer,
      children: [sidebarContent ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppSidebar["default"], {
        isAppDrawerOpen: isAppDrawerOpen,
        footer: footer,
        fullView: fullView,
        navStyle: navStyle,
        sidebarContent: sidebarContent
      }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.Box, {
        className: classes.appsMainContent,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"], {
          style: _objectSpread({
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }, props.cardStyle),
          children: children
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InfoView["default"], {})]
      })]
    })]
  });
};

var _default = AppsContainer;
exports["default"] = _default;
AppsContainer.defaultProps = {
  title: ''
};
AppsContainer.prototype = {
  title: _propTypes["default"].string
};