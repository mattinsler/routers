import handlerResolver from './handler-resolver';

export default function routeResolver(resolver) {
  return function(spec) {
    var handler = resolver(spec);
    if (handler.length >= 3) { return handler; }

    return function(req, res, next) {
      Promise.resolve(handler(req, res)).then(function(data) {
        if (data == null) { return res.status(404); }
        res.json(data);
      }).catch(function(err) {
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
    }
  };
}
