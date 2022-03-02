"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../../wrappers/index"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Hidden = _interopRequireDefault(require("@material-ui/core/Hidden"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RenderTree = function RenderTree(props) {
  var ComponentBlocks = props.ComponentBlocks,
      Widgets = props.Widgets,
      Blocks = props.Blocks;
  var NodeTypeMap = {
    componentBlock: ComponentBlocks,
    widget: Widgets,
    block: Blocks
  };
  var layout = props.layout;
  var tree = layout === null || layout === void 0 ? void 0 : layout.root;
  var elements = [];

  var processRows = function processRows(rows) {
    var tmpElements = [];
    rows === null || rows === void 0 ? void 0 : rows.map(function (_ref) {
      var cells = _ref.cells,
          config = _ref.config;

      if (config !== null && config !== void 0 && config.wrapper) {
        var Wrapper = _index["default"][config.wrapper];

        if (Wrapper) {
          tmpElements.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(Wrapper, {
            children: cells === null || cells === void 0 ? void 0 : cells.map(function (cell) {
              var rows = cell.rows,
                  key = cell.key,
                  payload = cell.payload,
                  type = cell.type;
              var style = payload.style,
                  muiWidths = payload.muiWidths,
                  widgetProps = payload.props,
                  muiHidden = payload.muiHidden;

              if (key) {
                var CellComponent = Blocks[key];

                if (type) {
                  CellComponent = NodeTypeMap[type][key];
                }

                if (CellComponent) {
                  if (muiHidden) {
                    console.log('[muiHidden]', muiHidden, key);
                    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Hidden["default"], _objectSpread(_objectSpread({}, muiHidden), {}, {
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], _objectSpread(_objectSpread({
                        item: true,
                        display: 'flex',
                        flex: 1
                      }, muiWidths), {}, {
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CellComponent, {
                          parentProps: props,
                          widgetProps: widgetProps,
                          payload: payload
                        }, key)
                      }))
                    }));
                  }

                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], _objectSpread(_objectSpread({
                    item: true,
                    display: 'flex',
                    flex: 1
                  }, muiWidths), {}, {
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CellComponent, {
                      parentProps: props,
                      widgetProps: widgetProps,
                      payload: payload
                    }, key)
                  }));
                }
              }

              if (rows) {
                if (muiHidden) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Hidden["default"], _objectSpread(_objectSpread({}, muiHidden), {}, {
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], _objectSpread(_objectSpread({
                      item: true
                    }, muiWidths), {}, {
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"] // container
                      , {
                        spacing: 2,
                        justifyContent: 'center',
                        width: 'auto',
                        children: processRows(rows)
                      })
                    }))
                  }));
                }

                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid["default"], _objectSpread(_objectSpread({
                  item: true
                }, muiWidths), {}, {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"] // container
                  , {
                    spacing: 2,
                    justifyContent: 'center',
                    width: 'auto',
                    children: processRows(rows)
                  })
                }));
              }
            })
          }));
        }
      }
    });
    return tmpElements;
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box["default"], {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    children: function children() {
      Object.keys(tree).map(function (section) {
        console.log(section, '@@@section@@@');
        var rows = tree[section].rows;
        elements.push(processRows(rows));
      });
      return elements;
    }
  });
};

RenderTree.propTypes = {
  layout: _propTypes["default"].object
};
var _default = RenderTree;
exports["default"] = _default;