'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app, middleware, fn) {
  if (middleware.length <= 1) {
    middleware = promisifyMiddleware(middleware);
  }

  var original = _methods2.default.reduce(function (o, m) {
    o[m] = app[m];
    return o;
  }, {});

  _methods2.default.forEach(function (m) {
    app[m] = function (route, handler) {
      original[m].call(app, route, middleware, handler);
    };
  });

  fn(app);

  _methods2.default.forEach(function (m) {
    app[m] = original[m];
  });
};

var _methods = require('methods');

var _methods2 = _interopRequireDefault(_methods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function promisifyMiddleware(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req)).then(function () {
      return next();
    }, function (err) {
      return next(err);
    });
  };
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ndWFyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBV2UsVUFBUyxHQUFULEVBQWMsVUFBZCxFQUEwQixFQUExQixFQUE4QjtBQUMzQyxNQUFJLFdBQVcsTUFBWCxJQUFxQixDQUFyQixFQUF3QjtBQUMxQixpQkFBYSxvQkFBb0IsVUFBcEIsQ0FBYixDQUQwQjtHQUE1Qjs7QUFJQSxNQUFNLFdBQVcsa0JBQVEsTUFBUixDQUFlLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtBQUN4QyxNQUFFLENBQUYsSUFBTyxJQUFJLENBQUosQ0FBUCxDQUR3QztBQUV4QyxXQUFPLENBQVAsQ0FGd0M7R0FBVixFQUc3QixFQUhjLENBQVgsQ0FMcUM7O0FBVTNDLG9CQUFRLE9BQVIsQ0FBZ0IsVUFBUyxDQUFULEVBQVk7QUFDMUIsUUFBSSxDQUFKLElBQVMsVUFBUyxLQUFULEVBQWdCLE9BQWhCLEVBQXlCO0FBQ2hDLGVBQVMsQ0FBVCxFQUFZLElBQVosQ0FBaUIsR0FBakIsRUFBc0IsS0FBdEIsRUFBNkIsVUFBN0IsRUFBeUMsT0FBekMsRUFEZ0M7S0FBekIsQ0FEaUI7R0FBWixDQUFoQixDQVYyQzs7QUFnQjNDLEtBQUcsR0FBSCxFQWhCMkM7O0FBa0IzQyxvQkFBUSxPQUFSLENBQWdCLFVBQVMsQ0FBVCxFQUFZO0FBQzFCLFFBQUksQ0FBSixJQUFTLFNBQVMsQ0FBVCxDQUFULENBRDBCO0dBQVosQ0FBaEIsQ0FsQjJDO0NBQTlCOzs7Ozs7OztBQVRmLFNBQVMsbUJBQVQsQ0FBNkIsRUFBN0IsRUFBaUM7QUFDL0IsU0FBTyxVQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCO0FBQzlCLFlBQVEsT0FBUixDQUFnQixHQUFHLEdBQUgsQ0FBaEIsRUFBeUIsSUFBekIsQ0FDRTthQUFNO0tBQU4sRUFDQSxVQUFDLEdBQUQ7YUFBUyxLQUFLLEdBQUw7S0FBVCxDQUZGLENBRDhCO0dBQXpCLENBRHdCO0NBQWpDIiwiZmlsZSI6Imd1YXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1ldGhvZHMgZnJvbSAnbWV0aG9kcyc7XG5cbmZ1bmN0aW9uIHByb21pc2lmeU1pZGRsZXdhcmUoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKGZuKHJlcSkpLnRoZW4oXG4gICAgICAoKSA9PiBuZXh0KCksXG4gICAgICAoZXJyKSA9PiBuZXh0KGVycilcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFwcCwgbWlkZGxld2FyZSwgZm4pIHtcbiAgaWYgKG1pZGRsZXdhcmUubGVuZ3RoIDw9IDEpIHtcbiAgICBtaWRkbGV3YXJlID0gcHJvbWlzaWZ5TWlkZGxld2FyZShtaWRkbGV3YXJlKTtcbiAgfVxuXG4gIGNvbnN0IG9yaWdpbmFsID0gbWV0aG9kcy5yZWR1Y2UoKG8sIG0pID0+IHtcbiAgICBvW21dID0gYXBwW21dO1xuICAgIHJldHVybiBvXG4gIH0sIHt9KTtcblxuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24obSkge1xuICAgIGFwcFttXSA9IGZ1bmN0aW9uKHJvdXRlLCBoYW5kbGVyKSB7XG4gICAgICBvcmlnaW5hbFttXS5jYWxsKGFwcCwgcm91dGUsIG1pZGRsZXdhcmUsIGhhbmRsZXIpO1xuICAgIH07XG4gIH0pO1xuXG4gIGZuKGFwcCk7XG5cbiAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG0pIHtcbiAgICBhcHBbbV0gPSBvcmlnaW5hbFttXTtcbiAgfSk7XG59XG4iXX0=