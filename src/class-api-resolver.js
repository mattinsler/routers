import path from 'path';
import apiResolver from './api-resolver';

function classApiResolver(pathname, { dataType } = {}) {
  return apiResolver(pathname, {
    dataType,
    descriptorToHandler(context, { controller, action }) {
      if (!context.handlerFiles) { context.handlerFiles = {} }
      if (!context.handlerFiles[controller]) {
        const handlerFile = require.resolve(path.join(context.root, controller));
        const handlerModule = require(handlerFile);

        if (typeof(handlerModule) !== 'function') {
          throw new Error(`Controllers must export a class (${handlerFile})`);
        }

        context.handlerFiles[controller] = new handlerModule();
      }

      if (!context.handlerFiles[controller][action]) {
        throw new Error(`Could not find a method named ${action} in the class exported from the ${controller} controller`);
      }

      return context.handlerFiles[controller][action];
    }
  });
}

export default classApiResolver;