# routers

A group of router helpers for server-side use

## Installation

```bash
$ npm install --save routers
```

## Included Router Helpers

#### apiResolver(handlerRootPathname, dataType = 'json')

Composes `promisedResolver` and `handlerResolver` with a response formatter based
on `dataType`.

#### handlerResolver(handlerRootPathname)

Maps a root path and string to file and method.

```javascript
const app = express();
const resolve = handlerResolver('routes');

// resolve to module at routes/users, method index
app.get('/users', resolve('users#index'));
```

#### promisedResolver(resolver, handleResponse, handleError)

Adapts another resolver to handle promises.

```javascript
const app = express();
const resolve = promisedResolver(
  handlerResolver('routes'),
  (data, res, next) => res.send(data),
  (err, res, next) => res.statusCode(err.statusCode).send(err.stack)
);

// resolve to module at routes/users, method index
app.get('/users', resolve('users#index'));
```

If the handler is of the form `function(req)`, the return value will be
interpreted as a promise. Otherwise the handler acts as any normal request
handler (you write to res and then call next).

#### guard(app, middleware, fn)

Adds a middleware to every route added inside `fn`.

```javascript
const app = express();

guard(app, authMiddleware, (app) => {
  app.get('/users', loggedInUsers.index);
});
```
