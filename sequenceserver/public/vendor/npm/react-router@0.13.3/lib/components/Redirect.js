/* */ 
'use strict';
var _classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
};
var _inherits = function(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }});
  if (superClass)
    subClass.__proto__ = superClass;
};
var PropTypes = require("../PropTypes");
var Route = require("./Route");
var Redirect = (function(_Route) {
  function Redirect() {
    _classCallCheck(this, Redirect);
    if (_Route != null) {
      _Route.apply(this, arguments);
    }
  }
  _inherits(Redirect, _Route);
  return Redirect;
})(Route);
Redirect.propTypes = {
  path: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  handler: PropTypes.falsy
};
Redirect.defaultProps = {};
module.exports = Redirect;
