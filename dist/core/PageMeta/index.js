"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _head = _interopRequireDefault(require("next/head"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PageMeta = function PageMeta(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_head["default"], {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
      children: props.title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      name: "description",
      content: props.desc
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      property: "og:type",
      content: "website"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      name: "og:title",
      property: "og:title",
      content: props.title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      name: "og:description",
      property: "og:description",
      content: props.desc
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      property: "og:site_name",
      content: "Proper Noun"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      name: "twitter:card",
      content: "summary"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      name: "twitter:title",
      content: props.title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      name: "twitter:description",
      content: props.desc
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      name: "twitter:site",
      content: "@wearesling"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      name: "twitter:creator",
      content: "@wearesling"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("link", {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("link", {
      rel: "apple-touch-icon",
      href: "/favicon.ico"
    }), props.canonical && /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      property: "og:url",
      content: "".concat(props.canonical)
    }), props.css && /*#__PURE__*/(0, _jsxRuntime.jsx)("link", {
      rel: "stylesheet",
      href: "".concat(props.css)
    }), props.image ? /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      property: "og:image",
      content: "".concat(props.image)
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      property: "og:image",
      content: "https://firebasestorage.googleapis.com/v0/b/git-access.appspot.com/o/logo512.png?alt=media"
    }), props.image && /*#__PURE__*/(0, _jsxRuntime.jsx)("meta", {
      name: "twitter:image",
      content: "".concat(props.image)
    })]
  });
};

var _default = PageMeta;
exports["default"] = _default;
PageMeta.prototype = {
  title: _propTypes["default"].string,
  description: _propTypes["default"].string
};
PageMeta.defaultProps = {
  title: 'Sling- Frontend Head Demo',
  description: 'Sling is the frontend head for your headless Api'
};