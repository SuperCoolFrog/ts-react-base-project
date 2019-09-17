# API

Our api is used to setup calls to back-end services or external resources.

## API.ts

The API.ts file is the file that collects, initializes, and exports all the repositories.  In terms of this application,
a repository is a module that exports async functions that make calls to back-end services.

The API gets initialized in the `src/store/store.ts` file and is injected as an extra argument in thunks.
