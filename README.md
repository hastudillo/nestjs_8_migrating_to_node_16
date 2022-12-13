## Description

Small project built on [NestJS](https://nestjs.com/), showing a problem when **upgrading from NodeJS 14 to 16** related to the package `body-parser`, used by `express`.

Any additional field set to the request (such as the `user`) in a middleware is lost later, impossible to retrieve in other middlewares, guards or controllers.

It seems that the `swagger-ui-express` dependency (no longer required since [NestJS v9](https://github.com/nestjs/docs.nestjs.com/commit/6f6e89f062b85a6208baaa621a6ec4730b38999b)) forces the use of `express` and `body-parser` last versions.

The issue can be fixed by introducing some peer dependencies:

```js
"peerDependencies": {
  "express": "4.18.1",
  "body-parser": "1.20.0"
}
```

Something may happen to `body-parser` last version (1.20.1):

- available as latest in [npm](https://www.npmjs.com/package/body-parser/v/1.20.1)
- not shown as a release (yet?) in [github](https://github.com/expressjs/body-parser/releases)

## Running the app

```bash
$ nvm use 14
$ npm i
$ npm run start
```

Make a request GET http://localhost:3000/users/user.
You will receive a body such as the following one:

```json
{
  "test": "userPayload"
}
```

It works. You can see the field set in the first middleware is retrievable (cf. the logs) in the nest middleware, the guard and the controller.

```bash
$ nvm use 16
$ rm -rf dist
$ rm -rf node_modules
$ rm -rf package-lock.json
$ npm i
$ npm run start
```

The same request doesn't produce same result.

Now repeat the same after adding the above peer dependencies to `package.json`...
It works again!
