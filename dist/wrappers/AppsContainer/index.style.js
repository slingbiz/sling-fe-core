"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _AppEnums = _interopRequireDefault(require("../../utility/constants/AppEnums"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NavStyle = _AppEnums["default"].NavStyle;

var getHeaderHeight = function getHeaderHeight(navStyle, screenSize) {
  if (navStyle === NavStyle.HOR_DARK_LAYOUT || navStyle === NavStyle.HOR_LIGHT_NAV || navStyle === NavStyle.H_DEFAULT) return screenSize >= 1280 ? 124 + 20 : 70 + 10; // 50 HeaderDefault Height + 20/10 Padding Bottom

  if (navStyle === NavStyle.BIT_BUCKET) return 0; // 0 HeaderDefault Height

  return screenSize >= 600 ? 70 : 60;
};

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    appsContainer: function appsContainer(props) {
      var _ref;

      return _ref = {
        height: "calc(100vh - ".concat(55 + // AppContainerHeader Height
        20 + //Container Padding
        getHeaderHeight(props.navStyle, 0) + (props.footer ? 70 : 10) // 50 HeaderDefault Height + 20 Margin Top
        , "px) !important")
      }, _defineProperty(_ref, theme.breakpoints.up('sm'), {
        height: "calc(100vh - ".concat(55 + // AppContainerHeader Height
        20 + //Container Padding
        getHeaderHeight(props.navStyle, 600) + (props.footer ? 70 : 10), "px) !important")
      }), _defineProperty(_ref, theme.breakpoints.up('md'), {
        height: "calc(100vh - ".concat(55 + // AppContainerHeader Height
        30 + //Container Padding
        getHeaderHeight(props.navStyle, 960) + (props.footer ? 80 : 10) // 50 HeaderDefault Height + 30 Margin Top
        , "px) !important")
      }), _defineProperty(_ref, theme.breakpoints.up('lg'), {
        height: "calc(100vh - ".concat(43 + // AppContainerHeader Height
        30 + //Container Padding
        getHeaderHeight(props.navStyle, 1280) + (props.footer ? 80 : 10), "px) !important")
      }), _defineProperty(_ref, theme.breakpoints.up('xl'), {
        height: "calc(100vh - ".concat(64 + // AppContainerHeader Height
        30 + //Container Padding
        getHeaderHeight(props.navStyle, 1920) + (props.footer ? 86 : 10) // 56 HeaderDefault Height + 30 Margin Top
        , "px) !important")
      }), _defineProperty(_ref, "display", 'flex'), _ref;
    },
    appsSidebar: {
      height: '100%' // [theme.breakpoints.up('lg')]: {
      //   width: '17rem',
      // },
      // [theme.breakpoints.up('xl')]: {
      //   width: '20rem',
      // },

    },
    appsMainContent: function appsMainContent(props) {
      var _ref2;

      return _ref2 = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }, _defineProperty(_ref2, theme.breakpoints.up('lg'), {
        width: "calc(100% - ".concat(props.fullView ? 0 : 17, "rem)"),
        paddingLeft: props.fullView ? 0 : 40
      }), _defineProperty(_ref2, theme.breakpoints.up('xl'), {
        width: "calc(100% - ".concat(props.fullView ? 0 : 20, "rem)")
      }), _ref2;
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    menuIcon: {
      width: 35,
      height: 35
    },
    appSidebarDrawer: {
      width: '19rem',
      '& .listItem': {
        zIndex: 1305
      }
    },
    scLauncher: {
      '& .sc-header, & .sc-message--content.sent .sc-message--text, & .sc-header--close-button:hover': {
        backgroundColor: "".concat(theme.palette.primary.main, " !important")
      }
    }
  };
});
var _default = useStyles;
exports["default"] = _default;