'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (root) {
  var resolver = new HandlerResolver(root);
  return resolver.resolve.bind(resolver);
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HandlerResolver = function () {
  function HandlerResolver(root) {
    _classCallCheck(this, HandlerResolver);

    this.root = _path2.default.resolve(process.cwd(), root || '');
  }

  _createClass(HandlerResolver, [{
    key: 'parseHandler',
    value: function parseHandler(spec) {
      var matches = spec.match(/^([^#]+)(#(.+))?$/);
      if (!matches) {
        throw new Error('Invalid handler format');
      }

      return {
        controller: matches[1],
        action: matches[3]
      };
    }
  }, {
    key: 'resolve',
    value: function resolve(handler) {
      if (typeof handler !== 'string') {
        return handler;
      }

      var parsed = this.parseHandler(handler);
      if (!parsed.action) parsed.action = 'index';

      var handlerFile = require.resolve(_path2.default.join(this.root, parsed.controller));
      var handlerModule = require(handlerFile);
      if (!handlerModule[parsed.action]) {
        throw new Error('Could not find a method named ' + parsed.action + ' in ' + handlerFile);
      }

      return handlerModule[parsed.action];
    }
  }]);

  return HandlerResolver;
}();

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oYW5kbGVyLXJlc29sdmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQWlDZSxVQUFTLElBQVQsRUFBZTtBQUM1QixNQUFJLFdBQVcsSUFBSSxlQUFKLENBQW9CLElBQXBCLENBQVgsQ0FEd0I7QUFFNUIsU0FBTyxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsQ0FBc0IsUUFBdEIsQ0FBUCxDQUY0QjtDQUFmOzs7Ozs7Ozs7O0lBL0JUO0FBQ0osV0FESSxlQUNKLENBQVksSUFBWixFQUFrQjswQkFEZCxpQkFDYzs7QUFDaEIsU0FBSyxJQUFMLEdBQVksZUFBSyxPQUFMLENBQWEsUUFBUSxHQUFSLEVBQWIsRUFBNEIsUUFBUSxFQUFSLENBQXhDLENBRGdCO0dBQWxCOztlQURJOztpQ0FLUyxNQUFNO0FBQ2pCLFVBQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxtQkFBWCxDQUFWLENBRGE7QUFFakIsVUFBSSxDQUFDLE9BQUQsRUFBVTtBQUFFLGNBQU0sSUFBSSxLQUFKLENBQVUsd0JBQVYsQ0FBTixDQUFGO09BQWQ7O0FBRUEsYUFBTztBQUNMLG9CQUFZLFFBQVEsQ0FBUixDQUFaO0FBQ0EsZ0JBQVEsUUFBUSxDQUFSLENBQVI7T0FGRixDQUppQjs7Ozs0QkFVWCxTQUFTO0FBQ2YsVUFBSSxPQUFPLE9BQVAsS0FBb0IsUUFBcEIsRUFBOEI7QUFBRSxlQUFPLE9BQVAsQ0FBRjtPQUFsQzs7QUFFQSxVQUFJLFNBQVMsS0FBSyxZQUFMLENBQWtCLE9BQWxCLENBQVQsQ0FIVztBQUlmLFVBQUksQ0FBQyxPQUFPLE1BQVAsRUFBZSxPQUFPLE1BQVAsR0FBZ0IsT0FBaEIsQ0FBcEI7O0FBRUEsVUFBSSxjQUFjLFFBQVEsT0FBUixDQUFnQixlQUFLLElBQUwsQ0FBVSxLQUFLLElBQUwsRUFBVyxPQUFPLFVBQVAsQ0FBckMsQ0FBZCxDQU5XO0FBT2YsVUFBSSxnQkFBZ0IsUUFBUSxXQUFSLENBQWhCLENBUFc7QUFRZixVQUFJLENBQUMsY0FBYyxPQUFPLE1BQVAsQ0FBZixFQUErQjtBQUNqQyxjQUFNLElBQUksS0FBSixDQUFVLG1DQUFtQyxPQUFPLE1BQVAsR0FBZ0IsTUFBbkQsR0FBNEQsV0FBNUQsQ0FBaEIsQ0FEaUM7T0FBbkM7O0FBSUEsYUFBTyxjQUFjLE9BQU8sTUFBUCxDQUFyQixDQVplOzs7O1NBZmIiLCJmaWxlIjoiaGFuZGxlci1yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jbGFzcyBIYW5kbGVyUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3Rvcihyb290KSB7XG4gICAgdGhpcy5yb290ID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIHJvb3QgfHwgJycpO1xuICB9XG5cbiAgcGFyc2VIYW5kbGVyKHNwZWMpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IHNwZWMubWF0Y2goL14oW14jXSspKCMoLispKT8kLyk7XG4gICAgaWYgKCFtYXRjaGVzKSB7IHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoYW5kbGVyIGZvcm1hdCcpOyB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29udHJvbGxlcjogbWF0Y2hlc1sxXSxcbiAgICAgIGFjdGlvbjogbWF0Y2hlc1szXVxuICAgIH07XG4gIH1cblxuICByZXNvbHZlKGhhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mKGhhbmRsZXIpICE9PSAnc3RyaW5nJykgeyByZXR1cm4gaGFuZGxlcjsgfVxuXG4gICAgdmFyIHBhcnNlZCA9IHRoaXMucGFyc2VIYW5kbGVyKGhhbmRsZXIpO1xuICAgIGlmICghcGFyc2VkLmFjdGlvbikgcGFyc2VkLmFjdGlvbiA9ICdpbmRleCc7XG5cbiAgICB2YXIgaGFuZGxlckZpbGUgPSByZXF1aXJlLnJlc29sdmUocGF0aC5qb2luKHRoaXMucm9vdCwgcGFyc2VkLmNvbnRyb2xsZXIpKTtcbiAgICB2YXIgaGFuZGxlck1vZHVsZSA9IHJlcXVpcmUoaGFuZGxlckZpbGUpO1xuICAgIGlmICghaGFuZGxlck1vZHVsZVtwYXJzZWQuYWN0aW9uXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBhIG1ldGhvZCBuYW1lZCAnICsgcGFyc2VkLmFjdGlvbiArICcgaW4gJyArIGhhbmRsZXJGaWxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlck1vZHVsZVtwYXJzZWQuYWN0aW9uXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihyb290KSB7XG4gIHZhciByZXNvbHZlciA9IG5ldyBIYW5kbGVyUmVzb2x2ZXIocm9vdCk7XG4gIHJldHVybiByZXNvbHZlci5yZXNvbHZlLmJpbmQocmVzb2x2ZXIpO1xufVxuIl19