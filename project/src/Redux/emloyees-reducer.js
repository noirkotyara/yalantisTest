import { Employee } from "../Api/api";

const ADD_ITEMS = 'ADD-ITEMS';
const SET_USERS = 'SET-USERS';

export const employeesPageClicked = false;

let monthsArray= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
let monthsA = monthsArray.map(month => {return {name: month, id: []}});

let initial = {
    items: [],
    months: monthsA
}

const employeesPage = (state = initial, action) => {
    switch (action.type) {
        case ADD_ITEMS: {
            return {
                ...state,
                items: action.items
            }
        }
        case SET_USERS: {
            if (action.users.length === 0){
                state.months = monthsArray.map(month => {return {name: month, id: []}});
            }
            
           for (let i = 0; i < action.users.length; i++) {
                let choosedUser = state.items.filter(item => item.id === action.users[i]);
                let data = new Date(choosedUser[0].dob);
                state.months[(data.getMonth() + 1)].id.push(choosedUser[0]);
           }
            return {
                ...state
            }
        }
        default:
            return state;
    }
}

export const addItemsAC = (items) => ({ type: ADD_ITEMS, items });
export const setUsersAC = (users) => ({type: SET_USERS, users});


export const addItemsThunk = () => async (dispatch) => {
    const response = await Employee.getEmployee();
    dispatch(addItemsAC(response.data));
}

export default employeesPage;