# TESTING

We maintain 100% test coverage.

## Unit Tests
Tests unit tests must be created in the same directory as the module it is testing and
name as with the `unit.test.ts` or `unit.test.tsx` extension.

```
SuperCoolComponent
|--SuperCoolComponent.tsx
|--SuperCoolComponent.unit.test.tsx
```

## Integration Tests
Integration tests should be placed in the `src/__tests__` directory and the name should describe the flow it is testing.

```
src
|--__tests__
|  |--user-login.integration.test.tsx

```

## Coverage
To view the coverage report run
```shell script
$ npm run test:coverage
```

Running this command will output to console the coverage report, and it will also create a file
`coverage/lcov-report/index.html` which will display an in depth html report of coverage.
