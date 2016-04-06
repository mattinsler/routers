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

  return (0, _promisedResolver2.default)(resolver, function (data, res, next) {
    formatter(res, 200, data);
  }, function (err, res, next) {
    console.log('error', err.stack);
    var data = handleError(err);
    formatter(res, data.statusCode, data);
  });
}

apiResolver.formatters = formatters;

exports.default = apiResolver;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktcmVzb2x2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNLGFBQWE7QUFDakIsc0JBQUssS0FBSyxZQUFZLE1BQU07QUFDMUIsUUFBSSxNQUFKLENBQVcsVUFBWCxFQUQwQjtBQUUxQixRQUFJLElBQUosQ0FBUyxJQUFULEVBRjBCO0dBRFg7Q0FBYjs7QUFPTixTQUFTLFdBQVQsQ0FBcUIsUUFBckIsRUFBa0Q7TUFBbkIsaUVBQVcsc0JBQVE7O0FBQ2hELE1BQU0sV0FBVywrQkFBZ0IsUUFBaEIsQ0FBWCxDQUQwQztBQUVoRCxNQUFNLFlBQVksV0FBVyxRQUFYLENBQVosQ0FGMEM7QUFHaEQsTUFBTSxjQUFjLDRCQUFhLE1BQWIsQ0FBZCxDQUgwQzs7QUFLaEQsU0FBTyxnQ0FDTCxRQURLLEVBRUwsVUFBVSxJQUFWLEVBQWdCLEdBQWhCLEVBQXFCLElBQXJCLEVBQTJCO0FBQ3pCLGNBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsSUFBcEIsRUFEeUI7R0FBM0IsRUFHQSxVQUFVLEdBQVYsRUFBZSxHQUFmLEVBQW9CLElBQXBCLEVBQTBCO0FBQ3hCLFlBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsSUFBSSxLQUFKLENBQXJCLENBRHdCO0FBRXhCLFFBQU0sT0FBTyxZQUFZLEdBQVosQ0FBUCxDQUZrQjtBQUd4QixjQUFVLEdBQVYsRUFBZSxLQUFLLFVBQUwsRUFBaUIsSUFBaEMsRUFId0I7R0FBMUIsQ0FMRixDQUxnRDtDQUFsRDs7QUFrQkEsWUFBWSxVQUFaLEdBQXlCLFVBQXpCOztrQkFFZSIsImZpbGUiOiJhcGktcmVzb2x2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXJyb3JIYW5kbGVyIGZyb20gJy4vZXJyb3ItaGFuZGxlcic7XG5pbXBvcnQgaGFuZGxlclJlc29sdmVyIGZyb20gJy4vaGFuZGxlci1yZXNvbHZlcic7XG5pbXBvcnQgcHJvbWlzZWRSZXNvbHZlciBmcm9tICcuL3Byb21pc2VkLXJlc29sdmVyJztcblxuY29uc3QgZm9ybWF0dGVycyA9IHtcbiAganNvbihyZXMsIHN0YXR1c0NvZGUsIGRhdGEpIHtcbiAgICByZXMuc3RhdHVzKHN0YXR1c0NvZGUpO1xuICAgIHJlcy5qc29uKGRhdGEpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBhcGlSZXNvbHZlcihwYXRobmFtZSwgZGF0YVR5cGUgPSAnanNvbicpIHtcbiAgY29uc3QgcmVzb2x2ZXIgPSBoYW5kbGVyUmVzb2x2ZXIocGF0aG5hbWUpO1xuICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2RhdGFUeXBlXTtcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSBlcnJvckhhbmRsZXIoJ2Jvb20nKTtcblxuICByZXR1cm4gcHJvbWlzZWRSZXNvbHZlcihcbiAgICByZXNvbHZlcixcbiAgICBmdW5jdGlvbiAoZGF0YSwgcmVzLCBuZXh0KSB7XG4gICAgICBmb3JtYXR0ZXIocmVzLCAyMDAsIGRhdGEpO1xuICAgIH0sXG4gICAgZnVuY3Rpb24gKGVyciwgcmVzLCBuZXh0KSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIuc3RhY2spO1xuICAgICAgY29uc3QgZGF0YSA9IGhhbmRsZUVycm9yKGVycik7XG4gICAgICBmb3JtYXR0ZXIocmVzLCBkYXRhLnN0YXR1c0NvZGUsIGRhdGEpO1xuICAgIH1cbiAgKTtcbn1cblxuYXBpUmVzb2x2ZXIuZm9ybWF0dGVycyA9IGZvcm1hdHRlcnM7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaVJlc29sdmVyO1xuIl19