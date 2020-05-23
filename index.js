"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

const reduxShort = (stateProps, dispatch = {}) => {
  const mapStateToProps = state => {
    const obj = {};
    stateProps.forEach(item => {
      obj[item] = state[item];
    });
    return obj;
  };

  const mapDispatchToProps = {};
  Object.keys(dispatch).forEach(item => {
    mapDispatchToProps[item] = dispatch[item];
  });
  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
};

var _default = reduxShort;
exports.default = _default;