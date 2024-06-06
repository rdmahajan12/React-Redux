What is Redux - Redux is a pattern and library for managing and updating application state, using events called actions. It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in predictable fashion.

a. Action - Actions are plane js objects that have a type field. Action only tell what to do, but they don't tell how to do.

b. Reducer - Reducers are functions that take the current state and an actions as arguments, and return a new state result.

c. Store - The redux store brings together the state, actions and reducers that make up your app. It's imp to note that you'll only have a single store in a redux application. Every redux store has a single root reducer function.

Redux Principles -
a. single source of truth - The global state of your application is stored as an object inside a single store.
b. state is read only - The only way to change the state is to dispatch an action.
c. Immutability, One way data flow, predictability of outcome.
d. Changes are made with pure reducer functions.
