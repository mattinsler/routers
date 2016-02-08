'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routeResolver;

var _handlerResolver = require('./handler-resolver');

var _handlerResolver2 = _interopRequireDefault(_handlerResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routeResolver(resolver) {
  return function (spec) {
    var handler = resolver(spec);
    if (handler.length >= 3) {
      return handler;
    }

    return function (req, res, next) {
      Promise.resolve(handler(req, res)).then(function (data) {
        if (data == null) {
          return res.status(404);
        }
        res.json(data);
      }).catch(function (err) {
        console.log(err.stack);

        if (err.isBoom) {
          var payload = err.output.payload;
          res.status(payload.statusCode).json({
            error: payload.error,
            message: payload.message
          });
        } else {
          res.status(500).json({
            error: err.stack,
            message: err.message
          });
        }
      });
    };
  };
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZS1yZXNvbHZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0I7Ozs7Ozs7O0FBQVQsU0FBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDO0FBQzlDLFNBQU8sVUFBUyxJQUFULEVBQWU7QUFDcEIsUUFBSSxVQUFVLFNBQVMsSUFBVCxDQUFWLENBRGdCO0FBRXBCLFFBQUksUUFBUSxNQUFSLElBQWtCLENBQWxCLEVBQXFCO0FBQUUsYUFBTyxPQUFQLENBQUY7S0FBekI7O0FBRUEsV0FBTyxVQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLElBQW5CLEVBQXlCO0FBQzlCLGNBQVEsT0FBUixDQUFnQixRQUFRLEdBQVIsRUFBYSxHQUFiLENBQWhCLEVBQW1DLElBQW5DLENBQXdDLFVBQVMsSUFBVCxFQUFlO0FBQ3JELFlBQUksUUFBUSxJQUFSLEVBQWM7QUFBRSxpQkFBTyxJQUFJLE1BQUosQ0FBVyxHQUFYLENBQVAsQ0FBRjtTQUFsQjtBQUNBLFlBQUksSUFBSixDQUFTLElBQVQsRUFGcUQ7T0FBZixDQUF4QyxDQUdHLEtBSEgsQ0FHUyxVQUFTLEdBQVQsRUFBYztBQUNyQixnQkFBUSxHQUFSLENBQVksSUFBSSxLQUFKLENBQVosQ0FEcUI7O0FBR3JCLFlBQUksSUFBSSxNQUFKLEVBQVk7QUFDZCxjQUFJLFVBQVUsSUFBSSxNQUFKLENBQVcsT0FBWCxDQURBO0FBRWQsY0FBSSxNQUFKLENBQVcsUUFBUSxVQUFSLENBQVgsQ0FBK0IsSUFBL0IsQ0FBb0M7QUFDbEMsbUJBQU8sUUFBUSxLQUFSO0FBQ1AscUJBQVMsUUFBUSxPQUFSO1dBRlgsRUFGYztTQUFoQixNQU1PO0FBQ0wsY0FBSSxNQUFKLENBQVcsR0FBWCxFQUFnQixJQUFoQixDQUFxQjtBQUNuQixtQkFBTyxJQUFJLEtBQUo7QUFDUCxxQkFBUyxJQUFJLE9BQUo7V0FGWCxFQURLO1NBTlA7T0FITyxDQUhULENBRDhCO0tBQXpCLENBSmE7R0FBZixDQUR1QztDQUFqQyIsImZpbGUiOiJyb3V0ZS1yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoYW5kbGVyUmVzb2x2ZXIgZnJvbSAnLi9oYW5kbGVyLXJlc29sdmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm91dGVSZXNvbHZlcihyZXNvbHZlcikge1xuICByZXR1cm4gZnVuY3Rpb24oc3BlYykge1xuICAgIHZhciBoYW5kbGVyID0gcmVzb2x2ZXIoc3BlYyk7XG4gICAgaWYgKGhhbmRsZXIubGVuZ3RoID49IDMpIHsgcmV0dXJuIGhhbmRsZXI7IH1cblxuICAgIHJldHVybiBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGhhbmRsZXIocmVxLCByZXMpKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCkgeyByZXR1cm4gcmVzLnN0YXR1cyg0MDQpOyB9XG4gICAgICAgIHJlcy5qc29uKGRhdGEpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG5cbiAgICAgICAgaWYgKGVyci5pc0Jvb20pIHtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGVyci5vdXRwdXQucGF5bG9hZDtcbiAgICAgICAgICByZXMuc3RhdHVzKHBheWxvYWQuc3RhdHVzQ29kZSkuanNvbih7XG4gICAgICAgICAgICBlcnJvcjogcGF5bG9hZC5lcnJvcixcbiAgICAgICAgICAgIG1lc3NhZ2U6IHBheWxvYWQubWVzc2FnZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgIGVycm9yOiBlcnIuc3RhY2ssXG4gICAgICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iXX0=