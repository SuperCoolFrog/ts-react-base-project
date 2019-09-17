# Components
Everything is a component.  Instead of including all logic within one component, consider breaking it up into separate components even if the functionality is not reusable. 

## Naming
A component's folder and main file should be in Pascal Case (first letter capital), and should be the same name as the component. 

## Components
Components that are specific to the main component should be located in a `components` folder within the main folder

## Styles
Styles specific to this component should be located within the same folder in a different file. 

## Avoid
There should be a limited amount of connected components within a specific components folder, but if you find yourself passing down properties through many levels of components, consider refactoring, creating a connected component, and pulling out into its own folder within `src/components` 


# Component State

State management is handled by redux.

## Thunks

Thunks are used for handling side effect.

[Read More](https://github.com/reduxjs/redux-thunk)


## API calls

The api is injected as an additional argument in a thunk.  You should **never** need to import the api.
This makes our actions easier to test.

```javascript
    const getSomethingFromApi = (somethingId) => (dispatch, getState, api) => {
        dispatch(somethingRequested());
        api.somethingRepo.get(somethingId)
            .then(() => dispatch(somethingRequestSucceeded()))
            .catch(() => dispatch(somethingRequestFailed()));
    };
```

## State
State for the component should be located in a `state` folder within the component.  The state should include a reducers, action-types, and actions file.
**Remember** to add the reducer the the exports in `src/store/reducers`


```
SampleComponent
|--SampleComponent.tsx
|--components
|  |--SpecificComponent
|  |  |-- SpecificComponent.tsx
|--state
|  |--sample-component-reducer.ts
|  |--sample-component-actions.ts
|  |--sample-component-action-types.ts
``` 
