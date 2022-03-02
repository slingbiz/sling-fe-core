"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AppSidebar = _interopRequireDefault(require("./AppSidebar"));

var _AppsHeader = _interopRequireDefault(require("./AppsHeader"));

var _AppsFooter = _interopRequireDefault(require("./AppsFooter"));

var _AppsContent = _interopRequireDefault(require("./AppsContent"));

var _DefaultContent = _interopRequireDefault(require("./DefaultContent"));

var _Wrappers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Wrappers = (_Wrappers = {}, _defineProperty(_Wrappers, 'AppsHeader', _AppsHeader["default"]), _defineProperty(_Wrappers, 'AppsFooter', _AppsFooter["default"]), _defineProperty(_Wrappers, 'AppsContent', _AppsContent["default"]), _defineProperty(_Wrappers, 'AppSidebar', _AppSidebar["default"]), _defineProperty(_Wrappers, 'DefaultContent', _DefaultContent["default"]), _Wrappers);
var _default = Wrappers;
exports["default"] = _default;