"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntlGlobalProvider = IntlGlobalProvider;
exports.useWidth = exports.useDownBreakPointChecker = exports.timeFromNow = exports.setRoutes = exports.multiPropsFilter = exports.isObjectEmpty = exports.isBreakPointDown = exports.getFileSize = exports.getCustomDateTime = exports.getBreakPointsValue = exports.createRoutes = exports.checkPermission = exports.appIntl = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _reactIntl = require("react-intl");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var isBreakPointDown = function isBreakPointDown(key) {
  var defaultTheme = (0, _core.createTheme)();
  return defaultTheme.breakpoints.width(key) > window.innerWidth;
};

exports.isBreakPointDown = isBreakPointDown;

var useDownBreakPointChecker = function useDownBreakPointChecker(key) {
  return (0, _core.useMediaQuery)(function (theme) {
    return theme.breakpoints.down(key);
  });
};

exports.useDownBreakPointChecker = useDownBreakPointChecker;

var useWidth = function useWidth() {
  var theme = (0, _core.useTheme)();

  var keys = _toConsumableArray(theme.breakpoints.keys).reverse();

  return keys.reduce(function (output, key) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var matches = (0, _core.useMediaQuery)(theme.breakpoints.up(key));
    return !output && matches ? key : output;
  }, null) || 'xs';
};

exports.useWidth = useWidth;

var createRoutes = function createRoutes(routeConfigs) {
  var allRoutes = [];
  routeConfigs.forEach(function (config) {
    allRoutes = [].concat(_toConsumableArray(allRoutes), _toConsumableArray(setRoutes(config)));
  });
  return allRoutes;
};

exports.createRoutes = createRoutes;

var setRoutes = function setRoutes(config) {
  var routes = _toConsumableArray(config.routes);

  if (config.auth) {
    routes = routes.map(function (route) {
      var auth = route.auth ? [].concat(_toConsumableArray(config.auth), _toConsumableArray(route.auth)) : _toConsumableArray(config.auth);
      return _objectSpread(_objectSpread({}, route), {}, {
        auth: auth
      });
    });
  }

  return _toConsumableArray(routes);
};

exports.setRoutes = setRoutes;

var getBreakPointsValue = function getBreakPointsValue(valueSet, breakpoint) {
  if (typeof valueSet === 'number') return valueSet;

  switch (breakpoint) {
    case 'xs':
      return valueSet.xs;

    case 'sm':
      return valueSet.sm || valueSet.xs;

    case 'md':
      return valueSet.md || valueSet.sm || valueSet.xs;

    case 'lg':
      return valueSet.lg || valueSet.md || valueSet.sm || valueSet.xs;

    default:
      return valueSet.xl || valueSet.lg || valueSet.md || valueSet.sm || valueSet.xs;
  }
};

exports.getBreakPointsValue = getBreakPointsValue;

var getFileSize = function getFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  var k = 1024,
      dm = 2,
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

exports.getFileSize = getFileSize;

var multiPropsFilter = function multiPropsFilter(products, filters) {
  var stringKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'title';
  var filterKeys = Object.keys(filters);
  return products.filter(function (product) {
    return filterKeys.every(function (key) {
      if (!filters[key].length) return true; // Loops again if product[key] is an array (for material attribute).

      if (Array.isArray(product[key])) {
        return product[key].some(function (keyEle) {
          return filters[key].includes(keyEle);
        });
      }

      console.log('key', key, filters[key], product[key]);

      if (key === stringKey) {
        return product[key].toLowerCase().includes(filters[key].toLowerCase());
      }

      return filters[key].includes(product[key]);
    });
  });
};

exports.multiPropsFilter = multiPropsFilter;

var getCustomDateTime = function getCustomDateTime() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'days';
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'YYYY-MM-DD';

  if (value === 0) {
    return (0, _moment["default"])().format(format);
  } else {
    return (0, _moment["default"])().add(value, unit).format(format);
  }
};

exports.getCustomDateTime = getCustomDateTime;

var timeFromNow = function timeFromNow(date) {
  var timestamp = (0, _moment["default"])(date).format('X');

  var newDate = _moment["default"].unix(timestamp);

  return (0, _moment["default"])(newDate).fromNow();
}; // 'intl' service singleton reference


exports.timeFromNow = timeFromNow;
var intl;

function IntlGlobalProvider(_ref) {
  var children = _ref.children;
  intl = (0, _reactIntl.useIntl)(); // Keep the 'intl' service reference

  return children;
}

var appIntl = function appIntl() {
  return intl;
};

exports.appIntl = appIntl;

var checkPermission = function checkPermission(routeAuth, userRole) {
  if (routeAuth === null || routeAuth === undefined) {
    return true;
  }

  if (userRole && Array.isArray(userRole)) {
    return routeAuth.some(function (r) {
      return userRole.indexOf(r) >= 0;
    });
  }

  if (routeAuth.length === 0) {
    return !userRole || userRole.length === 0;
  }

  if (userRole && Array.isArray(userRole) && Array.isArray(routeAuth)) {
    return routeAuth.some(function (r) {
      return userRole.indexOf(r) >= 0;
    });
  }

  return routeAuth.indexOf(userRole) >= 0;
};

exports.checkPermission = checkPermission;

var isObjectEmpty = function isObjectEmpty(obj) {
  return !obj || Object.keys(obj).length === 0;
};

exports.isObjectEmpty = isObjectEmpty;