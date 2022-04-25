"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AppContext = _interopRequireDefault(require("../../utility/AppContext"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _AppEnums = require("../../utility/constants/AppEnums");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _link = _interopRequireDefault(require("next/link"));

var _data = _interopRequireDefault(require("./data"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LanguageSwitcher = function LanguageSwitcher(props) {
  var iconOnly = props.iconOnly;

  var _useContext = (0, _react.useContext)(_AppContext["default"]),
      changeLocale = _useContext.changeLocale,
      rtlLocale = _useContext.rtlLocale,
      locale = _useContext.locale,
      setRTL = _useContext.setRTL;

  var _React$useState = _react["default"].useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorElLng = _React$useState2[0],
      setAnchorElLng = _React$useState2[1];

  var onClickMenu = function onClickMenu(event) {
    setAnchorElLng(event.currentTarget);
  };

  var changeLanguage = function changeLanguage(language) {
    if (rtlLocale.indexOf(language.locale) !== -1) {
      setRTL(true);
    } else {
      setRTL(false);
    }

    changeLocale(language);
    setAnchorElLng(null);
  };

  var useStyles = (0, _core.makeStyles)(function (theme) {
    var _langIconOnly, _langBtn;

    return {
      langBtn: (_langBtn = {
        justifyContent: 'flex-start',
        width: '100%',
        height: 56,
        fontSize: 16,
        borderRadius: 0,
        paddingLeft: '0.45rem',
        paddingRight: '1rem',
        paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
        marginTop: '-10px',
        color: theme.palette.text.primary,
        '&:hover, &:focus': {
          color: theme.palette.text.primary
        }
      }, _defineProperty(_langBtn, theme.breakpoints.up('sm'), {
        minHeight: 70
      }), _defineProperty(_langBtn, theme.breakpoints.up('md'), {
        fontWeight: _AppEnums.Fonts.MEDIUM,
        justifyContent: 'center',
        width: 'auto',
        borderLeft: 'solid 1px',
        borderLeftColor: theme.palette.grey[200],
        // textTransform: 'uppercase',
        marginTop: 0,
        color: theme.palette.text.primary,
        '&:hover, &:focus': {
          color: theme.palette.text.primary
        }
      }), _defineProperty(_langBtn, theme.breakpoints.up('lg'), {
        fontSize: 14,
        paddingLeft: '0.75rem',
        paddingRight: '1.5rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem'
      }), _defineProperty(_langBtn, theme.breakpoints.up('xl'), {
        paddingLeft: '1.25rem',
        paddingRight: '2.5rem'
      }), _defineProperty(_langBtn, '&.langIconOnly', (_langIconOnly = {
        paddingLeft: '0.8rem',
        paddingRight: '0.8rem',
        paddingTop: '0.25rem',
        paddingBottom: '0.25rem',
        height: 56,
        borderLeft: '0 none',
        borderRadius: '50%'
      }, _defineProperty(_langIconOnly, theme.breakpoints.up('sm'), {
        height: 70
      }), _defineProperty(_langIconOnly, theme.breakpoints.up('xl'), {
        paddingLeft: '12px',
        paddingRight: '12px',
        width: '100%'
      }), _langIconOnly)), _langBtn),
      overflowHidden: {
        overflow: 'hidden'
      },
      alignMiddle: {
        verticalAlign: 'middle',
        display: 'inline-block'
      },
      textUppercase: {
        textTransform: 'uppercase'
      },
      dashboardBtn: {
        backgroundColor: '#ff9800',
        color: theme.palette.primary.contrastText,
        fontWeight: _AppEnums.Fonts.BOLD,
        paddingRight: 20,
        marginRight: 20,
        textTransform: 'none',
        paddingLeft: 20,
        '&:hover, &:focus': {
          backgroundColor: '#ff9800',
          color: theme.palette.secondary.contrastText
        }
      }
    };
  });
  var classes = useStyles(props);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box["default"], {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton["default"], {
      className: (0, _clsx["default"])(classes.langBtn, {
        langIconOnly: iconOnly
      }, 'langBtn'),
      "aria-label": "account of current user",
      "aria-controls": "language-switcher",
      "aria-haspopup": "true",
      onClick: onClickMenu,
      color: "inherit",
      children: !iconOnly ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
          component: "span",
          mr: {
            xs: 2,
            md: 3
          },
          height: 48,
          width: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          className: classes.overflowHidden,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
            className: "flag flag-24 flag-".concat(locale.icon)
          })
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
          className: "flag flag-24 flag-".concat(locale.icon)
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Menu, {
      anchorEl: anchorElLng,
      id: "language-switcher",
      keepMounted: true,
      open: Boolean(anchorElLng),
      onClose: function onClose() {
        return setAnchorElLng(null);
      },
      children: _data["default"].map(function (language, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.MenuItem, {
          onClick: function onClick() {
            return changeLanguage(language);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box["default"], {
            width: 160,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("i", {
              className: "flag flag-24 flag-".concat(language.icon)
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
              component: "h4",
              ml: 4,
              mb: 0,
              fontSize: {
                xs: 14,
                xl: 16
              },
              fontWeight: _AppEnums.Fonts.MEDIUM,
              children: language.name
            })]
          })
        }, index);
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_link["default"], {
      href: 'https://studio.sling.biz',
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button["default"], {
        className: classes.dashboardBtn,
        color: "yellow",
        children: "Studio"
      })
    })]
  });
};

var _default = LanguageSwitcher;
exports["default"] = _default;
LanguageSwitcher.defaultProps = {
  iconOnly: false
};
LanguageSwitcher.propTypes = {
  iconOnly: _propTypes["default"].bool
};