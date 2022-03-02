"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _core = require("@material-ui/core");

var _index = _interopRequireDefault(require("./AppsContainer/index.style"));

var _reactRedux = require("react-redux");

var _styles = require("@material-ui/core/styles");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AppSidebar = function AppSidebar(props) {
  var isAppDrawerOpen = props.isAppDrawerOpen,
      footer = props.footer,
      navStyle = props.navStyle,
      fullView = props.fullView,
      style = props.style,
      sidebarContent = props.sidebarContent,
      children = props.children,
      onToggleAppDrawer = props.onToggleAppDrawer,
      muiWidths = props.muiWidths;
  var classes = (0, _index["default"])({
    footer: footer,
    navStyle: navStyle,
    fullView: fullView
  });
  var useStylesBase = (0, _styles.makeStyles)({
    root: _objectSpread({}, style)
  });
  var classesBase = useStylesBase();
  var className = (0, _clsx["default"])(classes.appsSidebar, classesBase.root);
  var dispatch = (0, _reactRedux.useDispatch)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_core.Box, _objectSpread(_objectSpread({
    className: className
  }, muiWidths), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Hidden["default"], {
      lgUp: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Drawer["default"], {
        open: isAppDrawerOpen,
        onClose: function onClose(ev) {
          return dispatch(onToggleAppDrawer());
        },
        classes: {
          paper: (0, _clsx["default"])(classes.appSidebarDrawer)
        },
        style: {
          position: 'absolute'
        },
        children: sidebarContent || children
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Hidden["default"], {
      mdDown: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"], {
        children: sidebarContent || children
      })
    })]
  }));
};

var _default = AppSidebar;
exports["default"] = _default;