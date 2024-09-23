#
React-Redux :
- The library that provides bindings for using Redux with React. It allows React components to interact with the Redux store
- Key features: `provider, connect`

Redux Toolkit
- The official, recommended way to write Redux logic. It simplifies the setup and reduces boilerplate code in Redux applications.
- Key features : `createSlice, configureStore, createAsyncThunk`



## Setup redux-toolkit and react-redux 
```
npm install @reduxjs/toolkit
```

```
npm install react-redux
```

## 
- Creation of store, `src > App > Store.js`
    - Store imports reducers


- Creation of Slice, `src > features > todo > todoSlice.js`
_Slice is encapsulation of state, actions and reducers_

    - Here, inside slice we create reducers: addTodo and removeTodo which are then exported to store


#### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
