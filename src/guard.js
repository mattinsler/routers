import methods from 'methods';

function promisifyMiddleware(fn) {
  return function(req, res, next) {
    Promise.resolve(fn(req)).then(
      () => next(),
      (err) => next(err)
    );
  }
}

export default function(app, middleware, fn) {
  if (middleware.length <= 1) {
    middleware = promisifyMiddleware(middleware);
  }

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
