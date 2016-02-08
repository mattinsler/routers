import path from 'path';

class HandlerResolver {
  constructor(root) {
    this.root = path.resolve(process.cwd(), root || '');
  }

  parseHandler(spec) {
    var matches = spec.match(/^([^#]+)(#(.+))?$/);
    if (!matches) { throw new Error('Invalid handler format'); }

    return {
      controller: matches[1],
      action: matches[3]
    };
  }

  resolve(handler) {
    if (typeof(handler) !== 'string') { return handler; }

    var parsed = this.parseHandler(handler);
    if (!parsed.action) parsed.action = 'index';

    var handlerFile = require.resolve(path.join(this.root, parsed.controller));
    var handlerModule = require(handlerFile);
    if (!handlerModule[parsed.action]) {
      throw new Error('Could not find a method named ' + parsed.action + ' in ' + handlerFile);
    }

    return handlerModule[parsed.action];
  }
}

export default function(root) {
  var resolver = new HandlerResolver(root);
  return resolver.resolve.bind(resolver);
}
