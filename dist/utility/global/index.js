"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _styles = require("@material-ui/core/styles");

var _error = _interopRequireDefault(require("next/error"));

var _RenderTree = _interopRequireDefault(require("../../hoc/RenderTree"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _appMainFixedFooter, _appMain;

  return {
    bodyMain: {
      padding: '20px 20px 0'
    },
    appMain: (_appMain = {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      paddingTop: 56,
      backgroundColor: 'white'
    }, _defineProperty(_appMain, theme.breakpoints.up('sm'), {
      paddingTop: 70
    }), _defineProperty(_appMain, '&.appMainFooter', {
      '& $mainContainerFull': {}
    }), _defineProperty(_appMain, '&.appMainFixedFooter', (_appMainFixedFooter = {
      paddingBottom: 48
    }, _defineProperty(_appMainFixedFooter, theme.breakpoints.up('xl'), {
      paddingBottom: 58
    }), _defineProperty(_appMainFixedFooter, '& $mainContainerFull', {}), _appMainFixedFooter)), _appMain)
  };
});

var GlobalPage = function GlobalPage() {
  var classes = useStyles();

  var _useSelector = (0, _reactRedux.useSelector)(function (_ref) {
    var layout = _ref.layout;
    return layout;
  }),
      layoutConfig = _useSelector.layoutConfig,
      pageTemplate = _useSelector.pageTemplate;

  var layout = layoutConfig[pageTemplate];

  if (!layout) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_error["default"], {
      statusCode: '404'
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
    className: classes.appMain,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
      className: classes.bodyMain,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RenderTree["default"], {
        layout: layout
      })
    })
  });
};

var _default = GlobalPage;
exports["default"] = _default;