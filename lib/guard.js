'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app, middleware, fn) {
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

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ndWFyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWUsVUFBUyxHQUFULEVBQWMsVUFBZCxFQUEwQixFQUExQixFQUE4QjtBQUMzQyxNQUFNLFdBQVcsa0JBQVEsTUFBUixDQUFlLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBVTtBQUN4QyxNQUFFLENBQUYsSUFBTyxJQUFJLENBQUosQ0FBUCxDQUR3QztBQUV4QyxXQUFPLENBQVAsQ0FGd0M7R0FBVixFQUc3QixFQUhjLENBQVgsQ0FEcUM7O0FBTTNDLG9CQUFRLE9BQVIsQ0FBZ0IsVUFBUyxDQUFULEVBQVk7QUFDMUIsUUFBSSxDQUFKLElBQVMsVUFBUyxLQUFULEVBQWdCLE9BQWhCLEVBQXlCO0FBQ2hDLGVBQVMsQ0FBVCxFQUFZLElBQVosQ0FBaUIsR0FBakIsRUFBc0IsS0FBdEIsRUFBNkIsVUFBN0IsRUFBeUMsT0FBekMsRUFEZ0M7S0FBekIsQ0FEaUI7R0FBWixDQUFoQixDQU4yQzs7QUFZM0MsS0FBRyxHQUFILEVBWjJDOztBQWMzQyxvQkFBUSxPQUFSLENBQWdCLFVBQVMsQ0FBVCxFQUFZO0FBQzFCLFFBQUksQ0FBSixJQUFTLFNBQVMsQ0FBVCxDQUFULENBRDBCO0dBQVosQ0FBaEIsQ0FkMkM7Q0FBOUIiLCJmaWxlIjoiZ3VhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWV0aG9kcyBmcm9tICdtZXRob2RzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYXBwLCBtaWRkbGV3YXJlLCBmbikge1xuICBjb25zdCBvcmlnaW5hbCA9IG1ldGhvZHMucmVkdWNlKChvLCBtKSA9PiB7XG4gICAgb1ttXSA9IGFwcFttXTtcbiAgICByZXR1cm4gb1xuICB9LCB7fSk7XG5cbiAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG0pIHtcbiAgICBhcHBbbV0gPSBmdW5jdGlvbihyb3V0ZSwgaGFuZGxlcikge1xuICAgICAgb3JpZ2luYWxbbV0uY2FsbChhcHAsIHJvdXRlLCBtaWRkbGV3YXJlLCBoYW5kbGVyKTtcbiAgICB9O1xuICB9KTtcblxuICBmbihhcHApO1xuXG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtKSB7XG4gICAgYXBwW21dID0gb3JpZ2luYWxbbV07XG4gIH0pO1xufVxuIl19