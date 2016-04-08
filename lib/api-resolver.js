'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errorHandler = require('./error-handler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

var _handlerResolver = require('./handler-resolver');

var _handlerResolver2 = _interopRequireDefault(_handlerResolver);

var _promisedResolver = require('./promised-resolver');

var _promisedResolver2 = _interopRequireDefault(_promisedResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatters = {
  json: function json(res, statusCode, data) {
    res.status(statusCode);
    res.json(data);
  }
};

function apiResolver(pathname) {
  var dataType = arguments.length <= 1 || arguments[1] === undefined ? 'json' : arguments[1];

  var resolver = (0, _handlerResolver2.default)(pathname);
  var formatter = formatters[dataType];
  var handleError = (0, _errorHandler2.default)('boom');

  var resolve = (0, _promisedResolver2.default)(resolver, function (data, res, next) {
    formatter(res, 200, data);
  }, function (err, res, next) {
    console.log('error', err.stack);
    var data = handleError(err);
    formatter(res, data.statusCode, data);
  });

  resolve.resolver = resolver;
  resolve.formatter = formatter;
  resolve.handleError = handleError;

  resolve.errorHandler = function (err, req, res, next) {
    console.log('error', err.stack);
    var data = handleError(err);
    formatter(res, data.statusCode, data);
  };

  return resolve;
}

apiResolver.formatters = formatters;

exports.default = apiResolver;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktcmVzb2x2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNLGFBQWE7QUFDakIsc0JBQUssS0FBSyxZQUFZLE1BQU07QUFDMUIsUUFBSSxNQUFKLENBQVcsVUFBWCxFQUQwQjtBQUUxQixRQUFJLElBQUosQ0FBUyxJQUFULEVBRjBCO0dBRFg7Q0FBYjs7QUFPTixTQUFTLFdBQVQsQ0FBcUIsUUFBckIsRUFBa0Q7TUFBbkIsaUVBQVcsc0JBQVE7O0FBQ2hELE1BQU0sV0FBVywrQkFBZ0IsUUFBaEIsQ0FBWCxDQUQwQztBQUVoRCxNQUFNLFlBQVksV0FBVyxRQUFYLENBQVosQ0FGMEM7QUFHaEQsTUFBTSxjQUFjLDRCQUFhLE1BQWIsQ0FBZCxDQUgwQzs7QUFLaEQsTUFBTSxVQUFVLGdDQUNkLFFBRGMsRUFFZCxVQUFVLElBQVYsRUFBZ0IsR0FBaEIsRUFBcUIsSUFBckIsRUFBMkI7QUFDekIsY0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixJQUFwQixFQUR5QjtHQUEzQixFQUdBLFVBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsSUFBcEIsRUFBMEI7QUFDeEIsWUFBUSxHQUFSLENBQVksT0FBWixFQUFxQixJQUFJLEtBQUosQ0FBckIsQ0FEd0I7QUFFeEIsUUFBTSxPQUFPLFlBQVksR0FBWixDQUFQLENBRmtCO0FBR3hCLGNBQVUsR0FBVixFQUFlLEtBQUssVUFBTCxFQUFpQixJQUFoQyxFQUh3QjtHQUExQixDQUxJLENBTDBDOztBQWlCaEQsVUFBUSxRQUFSLEdBQW1CLFFBQW5CLENBakJnRDtBQWtCaEQsVUFBUSxTQUFSLEdBQW9CLFNBQXBCLENBbEJnRDtBQW1CaEQsVUFBUSxXQUFSLEdBQXNCLFdBQXRCLENBbkJnRDs7QUFxQmhELFVBQVEsWUFBUixHQUF1QixVQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLEdBQW5CLEVBQXdCLElBQXhCLEVBQThCO0FBQ25ELFlBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsSUFBSSxLQUFKLENBQXJCLENBRG1EO0FBRW5ELFFBQU0sT0FBTyxZQUFZLEdBQVosQ0FBUCxDQUY2QztBQUduRCxjQUFVLEdBQVYsRUFBZSxLQUFLLFVBQUwsRUFBaUIsSUFBaEMsRUFIbUQ7R0FBOUIsQ0FyQnlCOztBQTJCaEQsU0FBTyxPQUFQLENBM0JnRDtDQUFsRDs7QUE4QkEsWUFBWSxVQUFaLEdBQXlCLFVBQXpCOztrQkFFZSIsImZpbGUiOiJhcGktcmVzb2x2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4vZXJyb3ItaGFuZGxlcic7XG5pbXBvcnQgaGFuZGxlclJlc29sdmVyIGZyb20gJy4vaGFuZGxlci1yZXNvbHZlcic7XG5pbXBvcnQgcHJvbWlzZWRSZXNvbHZlciBmcm9tICcuL3Byb21pc2VkLXJlc29sdmVyJztcblxuY29uc3QgZm9ybWF0dGVycyA9IHtcbiAganNvbihyZXMsIHN0YXR1c0NvZGUsIGRhdGEpIHtcbiAgICByZXMuc3RhdHVzKHN0YXR1c0NvZGUpO1xuICAgIHJlcy5qc29uKGRhdGEpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBhcGlSZXNvbHZlcihwYXRobmFtZSwgZGF0YVR5cGUgPSAnanNvbicpIHtcbiAgY29uc3QgcmVzb2x2ZXIgPSBoYW5kbGVyUmVzb2x2ZXIocGF0aG5hbWUpO1xuICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2RhdGFUeXBlXTtcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSBlcnJvckhhbmRsZXIoJ2Jvb20nKTtcblxuICBjb25zdCByZXNvbHZlID0gcHJvbWlzZWRSZXNvbHZlcihcbiAgICByZXNvbHZlcixcbiAgICBmdW5jdGlvbiAoZGF0YSwgcmVzLCBuZXh0KSB7XG4gICAgICBmb3JtYXR0ZXIocmVzLCAyMDAsIGRhdGEpO1xuICAgIH0sXG4gICAgZnVuY3Rpb24gKGVyciwgcmVzLCBuZXh0KSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIuc3RhY2spO1xuICAgICAgY29uc3QgZGF0YSA9IGhhbmRsZUVycm9yKGVycik7XG4gICAgICBmb3JtYXR0ZXIocmVzLCBkYXRhLnN0YXR1c0NvZGUsIGRhdGEpO1xuICAgIH1cbiAgKTtcblxuICByZXNvbHZlLnJlc29sdmVyID0gcmVzb2x2ZXI7XG4gIHJlc29sdmUuZm9ybWF0dGVyID0gZm9ybWF0dGVyO1xuICByZXNvbHZlLmhhbmRsZUVycm9yID0gaGFuZGxlRXJyb3I7XG5cbiAgcmVzb2x2ZS5lcnJvckhhbmRsZXIgPSBmdW5jdGlvbihlcnIsIHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyLnN0YWNrKTtcbiAgICBjb25zdCBkYXRhID0gaGFuZGxlRXJyb3IoZXJyKTtcbiAgICBmb3JtYXR0ZXIocmVzLCBkYXRhLnN0YXR1c0NvZGUsIGRhdGEpO1xuICB9O1xuXG4gIHJldHVybiByZXNvbHZlO1xufVxuXG5hcGlSZXNvbHZlci5mb3JtYXR0ZXJzID0gZm9ybWF0dGVycztcblxuZXhwb3J0IGRlZmF1bHQgYXBpUmVzb2x2ZXI7XG4iXX0=