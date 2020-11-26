import thunkMiddleware from "redux-thunk";
import employeesPage from "./emloyees-reducer";
const { createStore, applyMiddleware, combineReducers, compose } = require("redux");

const reducers = combineReducers({
    employees: employeesPage
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;