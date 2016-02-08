export function handleError(err, req, res, next) {
  if (err.isBoom) {
    let {payload} = err.output;
    res.status(payload.statusCode);
    res.json({
      status: payload.statusCode,
      error: payload.error,
      message: payload.message
    })
  } else {
    res.status(500);
    res.json({
      message: err.message
    });
  }
}

export default function(resolve) {
  return function(handler) {
    if (resolve) {
      handler = resolve(handler);
    }

    if (handler.length > 2) { return handler; }

    return function(req, res, next) {
      Promise.resolve(handler(req, res)).then((data) => {
        res.json(data);
      }, (err) => {
        handleError(err, req, res, next);
      });
    }
  };
}



export default function(resolve) {
  return function(handler) {
    if (resolve) {
      handler = resolve(handler);
    }

    if (handler.length > 2) { return handler; }

    return function(req, res, next) {
      Promise.resolve(handler(req, res)).then((data) => {
        res.json(data);
      }, (err) => {
        if (err.isBoom) {
          let {payload} = err.output;
          res.status(payload.statusCode);
          res.json({
            status: payload.statusCode,
            error: payload.error,
            message: payload.message
          })
        } else {
          res.status(500);
          res.json({
            message: err.message
          });
        }
      });
    }
  };
}
