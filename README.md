# Typescript/React Base Project

This Project is the starting project for all other projects.  It contains the structure and conventions we follow to build our UI apps using Typescript and React.

## Use
Clone this repo and then rename the name property in `package.json`.

## Conventions
1. [Learn about our Components](src/components/README.md)
2. [Learn about our API](src/api/README.md)
3. [Learn how we test our app](src/__tests__/README.md)

## serve locally

```shell
$ npm start
```

## build dev

```shell
$ npm run build
```

## build prod

```shell
$ npm run build-prod
```
You can specify a version like so
```shell
$ npm run build:prod -- --env.VERSION=1.1.8
```

## test

```shell
$ npm run test
```

To generate coverate report

```shell
$ npm run test:coverage
```


## lint

```shell
$ npm run lint
```

You can also tell the linter to attempt to fix errors
```shell
$ npm run lint:fix
```

