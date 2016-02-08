import routeResolver from './route-resolver';
import handlerResolver from './handler-resolver';
import promisedResolver from './promised-resolver';

export default function(pathname) {
  return routeResolver(
    promisedResolver(
      handlerResolver(pathname)
    )
  );
}
