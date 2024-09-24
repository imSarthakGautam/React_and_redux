# React_and_redux

Redux is a popular **state management library** for JavaScript applications, particularly with React. It helps manage the state of your application making it easier to handle complex state interactions. 

## Core Concepts of Redux

1. Store: 
 The single source of truth that holds the state of your entire application.

2. Action:  
 An object that describes a change to the state. It has a type property and optionally other properties with data.

3. Reducer: 
 A pure function that takes the current state and an action, and returns a new state.
 - Store ma kei change garna xa bhane reducer bata garni

4. Dispatch: 
 A function that sends an action to the store to trigger a state change.
 - useDispatcher

5. Selector: 
 A function to extract specific data from the state.
 - useSelector

## How Redux Works

1. State: All the state is stored in a single store.
2. Action: To change the state, you dispatch an action. typically in format:
```
  {
        "type": "ADD_TODO",
       "payload": {
              "text": "Buy milk"
                }
    }

    {
        "type": "REMOVE_TODO",
       "payload": {
              "id": "x1"
                }
    }


```
3. Reducer: ,  The store calls the appropriate reducer based on the action's type.
 The reducer processes the action and returns a new state.
4. Store Update: The store updates its state and notifies the UI components.

### Slice:
- Slices can be used to organize and manage parts of the state
- _A slice in Redux Toolkit is a self-contained unit of **state, actions, and reducers** that can be used to manage a specific part of your application's state._
-  _It's a way to organize and encapsulate related state and logic, making your code more modular and easier to maintain_

#### Action Creators :
Action creators are automatically generated in Redux Toolkit using the `createSlice()` function.   

When you create a slice using `createSlice`, you provide it with a reducers object that contains the reducer functions for that slice. Redux Toolkit then automatically generates corresponding action creators based on the reducer names.

### Relation between actions, action creators and reducers :
- Initial State
```
const initialState = {
  todos: [
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Finish homework' },
  ],
};

- Action Creators

```javascript
const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text,
});

const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: id,
});

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});
```

- Actions : ADD_TODO , REMOVE_TODO  , TOGGLE_TODO
- Reducers:

```javascript
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: nanoid(), text: action.payload }],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};
```



## Redux Toolkit

includes these APIs

- configureStore() 
- createReducer()
- createAction()
- createSlice()
- createAsyncThunk
- createEntityAdapter

###

Using `Redux (via Provider and store)` is an alternative to manually passing props down through every component, often called `prop drilling"` It allows global state management, meaning components can access and update the state without the need for passing props down multiple layers.

### Example without Redux / Prop Drilling
```jsx

// App.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';

function App() {
  const [user, setUser] = useState({ name: 'John Doe', loggedIn: true });

  return (
    <div>
      {/* Passing user as prop to each component */}
      <Navbar user={user} />
      <Profile user={user} />
    </div>
  );
}

export default App;

// Navbar.jsx
function Navbar({ user }) {
  return <div>Welcome, {user.name}</div>;
}

// Profile.jsx
function Profile({ user }) {
  return <div>Profile: {user.name}</div>;
}

```
the state is passed from parent to child components through props.
The `user` state is passed through each component as a prop, even if some components don’t need it.

### Using Redux

```jsx
// store.js (Redux Store Setup)
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { user: { name: 'John Doe', loggedIn: true } };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default store;

// App.jsx
import React from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      {/* No need to pass props manually */}
      <Navbar />
      <Profile />
    </Provider>
  );
}

export default App;

// Navbar.jsx
import { useSelector } from 'react-redux';

function Navbar() {
  const user = useSelector(state => state.user.user); // Accessing state from Redux store
  return <div>Welcome, {user.name}</div>;
}

export default Navbar;

// Profile.jsx
import { useSelector } from 'react-redux';

function Profile() {
  const user = useSelector(state => state.user.user); // Accessing state from Redux store
  return <div>Profile: {user.name}</div>;
}

export default Profile;

```