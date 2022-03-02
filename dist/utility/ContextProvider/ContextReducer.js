"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeSetting = void 0;
exports.contextReducer = contextReducer;

var _AppEnums = require("../constants/AppEnums");

var _Utils = require("../Utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ThemeSetting = {
  UPDATE_THEME: 'UPDATE_THEME',
  SET_FOOTER: 'SET_FOOTER',
  SET_FOOTER_TYPE: 'SET_FOOTER_TYPE',
  UPDATE_THEME_MODE: 'UPDATE_THEME_MODE',
  UPDATE_HEADER_MODE: 'UPDATE_HEADER_MODE',
  UPDATE_THEME_STYLE: 'UPDATE_THEME_STYLE',
  UPDATE_LAYOUT_STYLE: 'UPDATE_LAYOUT_STYLE',
  SET_RTL: 'SET_RTL',
  CHANGE_LOCALE: 'CHANGE_LOCALE',
  CHANGE_NAV_STYLE: 'CHANGE_NAV_STYLE',
  CHANGE_RT_ANIM: 'CHANGE_RT_ANIM',
  UPDATE_PRIMARY_COLOR: 'UPDATE_PRIMARY_COLOR',
  UPDATE_SIDEBAR_COLOR: 'UPDATE_SIDEBAR_COLOR',
  UPDATE_SECONDARY_COLOR: 'UPDATE_SECONDARY_COLOR'
};
exports.ThemeSetting = ThemeSetting;

function contextReducer(state, action) {
  switch (action.type) {
    case ThemeSetting.UPDATE_THEME:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          theme: action.payload,
          primary: action.payload.palette.primary.main,
          secondary: action.payload.palette.secondary.main
        });
      }

    case ThemeSetting.SET_FOOTER:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          footer: action.payload
        });
      }

    case ThemeSetting.SET_FOOTER_TYPE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          footerType: action.payload
        });
      }

    case ThemeSetting.UPDATE_THEME_MODE:
      {
        var theme = state.theme;

        if (action.payload === _AppEnums.ThemeMode.DARK) {
          theme.palette.type = _AppEnums.ThemeMode.DARK;
          theme.palette.background = {
            paper: '#313541',
            "default": '#393D4B'
          };
          theme.palette.text = {
            primary: 'rgba(255, 255, 255, 0.87)',
            secondary: 'rgba(255, 255, 255, 0.67)',
            disabled: 'rgba(255, 255, 255, 0.38)',
            hint: 'rgba(255, 255, 255, 0.38)'
          };
        } else {
          theme.palette.type = _AppEnums.ThemeMode.LIGHT;
          theme.palette.background = {
            paper: '#FFFFFF',
            "default": '#f3f4f6'
          };
          theme.palette.text = {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.67)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)'
          };
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          theme: theme,
          themeMode: action.payload
        });
      }

    case ThemeSetting.UPDATE_HEADER_MODE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          headerMode: action.payload
        });
      }

    case ThemeSetting.UPDATE_THEME_STYLE:
      {
        var _theme = state.theme;

        if (action.payload === _AppEnums.ThemeStyle.MODERN) {
          if ((0, _Utils.isBreakPointDown)('md')) {
            _theme.overrides.MuiCard.root.borderRadius = 20;
            _theme.overrides.MuiToggleButton.root.borderRadius = 20;
          } else {
            _theme.overrides.MuiCard.root.borderRadius = _AppEnums.ThemeStyleRadius.MODERN;
            _theme.overrides.MuiToggleButton.root.borderRadius = _AppEnums.ThemeStyleRadius.MODERN;
          }

          _theme.overrides.MuiButton.root.borderRadius = _AppEnums.ThemeStyleRadius.MODERN;
          _theme.overrides.MuiCardLg.root.borderRadius = _AppEnums.ThemeStyleRadius.MODERN + 20;
        } else {
          _theme.overrides.MuiCard.root.borderRadius = _AppEnums.ThemeStyleRadius.STANDARD;
          _theme.overrides.MuiToggleButton.root.borderRadius = _AppEnums.ThemeStyleRadius.STANDARD;
          _theme.overrides.MuiButton.root.borderRadius = _AppEnums.ThemeStyleRadius.STANDARD;
          _theme.overrides.MuiCardLg.root.borderRadius = _AppEnums.ThemeStyleRadius.STANDARD;
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          theme: _theme,
          themeStyle: action.payload
        });
      }

    case ThemeSetting.UPDATE_LAYOUT_STYLE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          layoutType: action.payload
        });
      }

    case ThemeSetting.SET_RTL:
      {
        var _theme2 = state.theme;

        if (action.payload) {
          _theme2.direction = 'rtl';
        } else {
          _theme2.direction = 'ltr';
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          theme: _theme2,
          isRTL: action.payload
        });
      }

    case ThemeSetting.CHANGE_LOCALE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          locale: action.payload
        });
      }

    case ThemeSetting.CHANGE_NAV_STYLE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          navStyle: action.payload
        });
      }

    case ThemeSetting.CHANGE_RT_ANIM:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          rtAnim: action.payload
        });
      }

    case ThemeSetting.UPDATE_PRIMARY_COLOR:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          primary: action.payload
        });
      }

    case ThemeSetting.UPDATE_SIDEBAR_COLOR:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          sidebarColor: action.payload
        });
      }

    case ThemeSetting.UPDATE_SECONDARY_COLOR:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          secondary: action.payload
        });
      }

    default:
      return state;
  }
}