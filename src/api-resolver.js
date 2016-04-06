import errorHandler from './error-handler';
import handlerResolver from './handler-resolver';
import promisedResolver from './promised-resolver';

const formatters = {
  json(res, statusCode, data) {
    res.status(statusCode);
    res.json(data);
  }
};

function apiResolver(pathname, dataType = 'json') {
  const resolver = handlerResolver(pathname);
  const formatter = formatters[dataType];
  const handleError = errorHandler('boom');

  return promisedResolver(
    resolver,
    function (data, res, next) {
      formatter(res, 200, data);
    },
    function (err, res, next) {
      console.log('error', err.stack);
      const data = handleError(err);
      formatter(res, data.statusCode, data);
    }
  );
}

apiResolver.formatters = formatters;

export default apiResolver;
