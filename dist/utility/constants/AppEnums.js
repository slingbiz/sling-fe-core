"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ThemeStyleRadius = exports.ThemeStyle = exports.ThemeMode = exports.RouteTransition = exports.NavStyle = exports.LayoutType = exports.HeaderType = exports.FooterType = exports.Fonts = exports.AuthType = void 0;
var ThemeStyle = {
  MODERN: 'modern',
  STANDARD: 'standard'
};
exports.ThemeStyle = ThemeStyle;
var ThemeStyleRadius = {
  MODERN: 30,
  STANDARD: 4
};
exports.ThemeStyleRadius = ThemeStyleRadius;
var ThemeMode = {
  LIGHT: 'light',
  SEMI_DARK: 'semi-dark',
  DARK: 'dark'
};
exports.ThemeMode = ThemeMode;
var LayoutType = {
  FULL_WIDTH: 'full-width',
  BOXED: 'boxed'
};
exports.LayoutType = LayoutType;
var NavStyle = {
  DEFAULT: 'default',
  MINI: 'mini',
  MINI_SIDEBAR_TOGGLE: 'mini_sidebar_toggle',
  STANDARD: 'standard',
  HEADER_USER: 'user-header',
  HEADER_USER_MINI: 'user-mini-header',
  DRAWER: 'drawer',
  BIT_BUCKET: 'bit-bucket',
  H_DEFAULT: 'h-default',
  HOR_LIGHT_NAV: 'hor-light-nav',
  HOR_DARK_LAYOUT: 'hor-dark-layout'
};
exports.NavStyle = NavStyle;
var FooterType = {
  FIXED: 'fixed',
  FLUID: 'fluid'
};
exports.FooterType = FooterType;
var HeaderType = {
  DARK: 'dark',
  LIGHT: 'light'
};
exports.HeaderType = HeaderType;
var RouteTransition = {
  NONE: 'none',
  FADE: 'fade',
  SLIDE_LEFT: 'slideLeft',
  SLIDE_RIGHT: 'slideRight',
  SLIDE_UP: 'slideUp',
  SLIDE_DOWN: 'slideDown'
};
exports.RouteTransition = RouteTransition;
var Fonts = {
  LIGHT: '300',
  REGULAR: '400',
  MEDIUM: '500',
  BOLD: '600',
  EXTRA_BOLD: '600'
};
exports.Fonts = Fonts;
var AuthType = {
  FIREBASE: 'firebase',
  AWS_COGNITO: 'aws_cognito',
  AUTH0: 'auth0',
  JWT_AUTH: 'jwt_auth'
};
exports.AuthType = AuthType;
var _default = {
  AuthType: AuthType,
  Fonts: Fonts,
  RouteTransition: RouteTransition,
  HeaderType: HeaderType,
  FooterType: FooterType,
  NavStyle: NavStyle,
  LayoutType: LayoutType,
  ThemeMode: ThemeMode,
  ThemeStyleRadius: ThemeStyleRadius,
  ThemeStyle: ThemeStyle
};
exports["default"] = _default;