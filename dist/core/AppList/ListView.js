"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBottomScrollListener = require("react-bottom-scroll-listener");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _grey = _interopRequireDefault(require("@material-ui/core/colors/grey"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["renderRow", "onEndReached", "data", "animation", "delay", "duration", "containerStyle", "border", "ListFooterComponent", "ListEmptyComponent", "ItemSeparatorComponent"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getEmptyContainer = function getEmptyContainer(ListEmptyComponent) {
  if (ListEmptyComponent) return /*#__PURE__*/_react["default"].isValidElement(ListEmptyComponent) ? ListEmptyComponent : /*#__PURE__*/(0, _jsxRuntime.jsx)(ListEmptyComponent, {});
  return null;
};

var getFooterContainer = function getFooterContainer(ListFooterComponent) {
  if (ListFooterComponent) return /*#__PURE__*/_react["default"].isValidElement(ListFooterComponent) ? ListFooterComponent : /*#__PURE__*/(0, _jsxRuntime.jsx)(ListFooterComponent, {});
  return null;
};

var ListView = function ListView(_ref) {
  var renderRow = _ref.renderRow,
      onEndReached = _ref.onEndReached,
      data = _ref.data,
      animation = _ref.animation,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 200 : _ref$duration,
      containerStyle = _ref.containerStyle,
      border = _ref.border,
      ListFooterComponent = _ref.ListFooterComponent,
      ListEmptyComponent = _ref.ListEmptyComponent,
      ItemSeparatorComponent = _ref.ItemSeparatorComponent,
      rest = _objectWithoutProperties(_ref, _excluded);

  var theme = (0, _core.useTheme)();
  var borderStyle = {
    border: "1px solid ".concat(_grey["default"][300]),
    backgroundColor: theme.palette.background.paper,
    borderRadius: 4,
    overflow: 'hidden'
  };

  if (!onEndReached) {
    onEndReached = function onEndReached() {};
  }

  var style = containerStyle;

  if (border) {
    style = _objectSpread(_objectSpread({}, style), borderStyle);
  }

  (0, _reactBottomScrollListener.useBottomScrollListener)(onEndReached, 200);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box["default"], _objectSpread(_objectSpread({
    style: _objectSpread({}, style)
  }, rest), {}, {
    flex: 1,
    enter: {
      delay: delay,
      duration: duration,
      animation: animation
    },
    children: [data.length > 0 ? data.map(function (item, index) {
      return renderRow(item, index);
    }) : getEmptyContainer(ListEmptyComponent), getFooterContainer(ListFooterComponent)]
  }));
};

var _default = ListView;
exports["default"] = _default;
ListView.propTypes = {
  border: _propTypes["default"].bool,
  animation: _propTypes["default"].string,
  containerStyle: _propTypes["default"].object,
  ListEmptyComponent: _propTypes["default"].node,
  ListFooterComponent: _propTypes["default"].node,
  data: _propTypes["default"].array.isRequired,
  onEndReached: _propTypes["default"].func
};
ListView.defaultProps = {
  border: false,
  animation: 'transition.slideUpIn',
  data: [],
  onEndReached: function onEndReached() {}
};