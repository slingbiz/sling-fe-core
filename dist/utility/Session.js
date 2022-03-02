"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCookie = exports.removeCookie = exports.getCookie = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setCookie = function setCookie(key, value) {
  if (process.browser) {
    _jsCookie["default"].set(key, value, {
      expires: 1,
      path: '/'
    });
  }
};

exports.setCookie = setCookie;

var removeCookie = function removeCookie(key) {
  if (process.browser) {
    _jsCookie["default"].remove(key, {
      expires: 1
    });
  }
};

exports.removeCookie = removeCookie;

var getCookie = function getCookie(key, req) {
  return process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};

exports.getCookie = getCookie;

var getCookieFromBrowser = function getCookieFromBrowser(key) {
  return _jsCookie["default"].get(key);
};

var getCookieFromServer = function getCookieFromServer(key, req) {
  if (!req.headers.cookie) {
    return undefined;
  }

  var rawCookie = req.headers.cookie.split(';').find(function (c) {
    return c.trim().startsWith("".concat(key, "="));
  });

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split('=')[1];
};