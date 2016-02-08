import methods from 'methods';

export default function(app, middleware, fn) {
  const original = methods.reduce((o, m) => {
    o[m] = app[m];
    return o
  }, {});

  methods.forEach(function(m) {
    app[m] = function(route, handler) {
      original[m].call(app, route, middleware, handler);
    };
  });

  fn(app);

  methods.forEach(function(m) {
    app[m] = original[m];
  });
}
