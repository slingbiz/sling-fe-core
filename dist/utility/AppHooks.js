"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var useDefaultUser = function useDefaultUser() {
  return {
    displayName: 'John Alex',
    email: 'demo@example.com',
    token: 'access-token',
    role: 'user',
    photoURL: 'https://via.placeholder.com/150'
  };
};

var _default = useDefaultUser;
exports["default"] = _default;