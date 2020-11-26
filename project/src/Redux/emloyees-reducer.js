import { Employee } from "../Api/api";

const ADD_ITEMS = 'ADD-ITEMS';
const SET_USERS = 'SET-USERS';

let monthsArray= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
let monthsA = monthsArray.map(month => {return {name: month, id: []}});

let initial = {
    items: [],
    months: monthsA
}

console.log(initial.months);

const employeesPage = (state = initial, action) => {
    switch (action.type) {
        case ADD_ITEMS: {
            // debugger;
            return {
                ...state,
                items: action.items
            }
        }
        case SET_USERS: {
            // console.log("Length " + action.users.length);
           for (let i = 0; i < action.users.length; i++) {
            //    debugger;
                let choosedUser = state.items.filter(item => item.id === action.users[i]);
                // console.log('choosedUser '+ choosedUser[0].dob);
                let data = new Date(choosedUser[0].dob);
                // console.log('new '+ data);
                // console.log('newData '+ (data.getMonth() + 1));
                // debugger;
                state.months[(data.getMonth() + 1)].id.push(choosedUser[0]);
           }
        //    console.log(state);
            return {
                ...state
            }
        }
        default:
            return state;
    }
}

const addItemsAC = (items) => ({ type: ADD_ITEMS, items });
export const setUsersAC = (users) => ({type: SET_USERS, users});


export const addItemsThunk = () => async (dispatch) => {
    const response = await Employee.getEmployee();
    dispatch(addItemsAC(response.data));
}

export default employeesPage;