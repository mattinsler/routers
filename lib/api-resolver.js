'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (pathname) {
  return (0, _routeResolver2.default)((0, _promisedResolver2.default)((0, _handlerResolver2.default)(pathname)));
};

var _routeResolver = require('./route-resolver');

var _routeResolver2 = _interopRequireDefault(_routeResolver);

var _handlerResolver = require('./handler-resolver');

var _handlerResolver2 = _interopRequireDefault(_handlerResolver);

var _promisedResolver = require('./promised-resolver');

var _promisedResolver2 = _interopRequireDefault(_promisedResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcGktcmVzb2x2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUllLFVBQVMsUUFBVCxFQUFtQjtBQUNoQyxTQUFPLDZCQUNMLGdDQUNFLCtCQUFnQixRQUFoQixDQURGLENBREssQ0FBUCxDQURnQztDQUFuQiIsImZpbGUiOiJhcGktcmVzb2x2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcm91dGVSZXNvbHZlciBmcm9tICcuL3JvdXRlLXJlc29sdmVyJztcbmltcG9ydCBoYW5kbGVyUmVzb2x2ZXIgZnJvbSAnLi9oYW5kbGVyLXJlc29sdmVyJztcbmltcG9ydCBwcm9taXNlZFJlc29sdmVyIGZyb20gJy4vcHJvbWlzZWQtcmVzb2x2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwYXRobmFtZSkge1xuICByZXR1cm4gcm91dGVSZXNvbHZlcihcbiAgICBwcm9taXNlZFJlc29sdmVyKFxuICAgICAgaGFuZGxlclJlc29sdmVyKHBhdGhuYW1lKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==