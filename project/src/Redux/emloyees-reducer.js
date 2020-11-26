import { Employee } from "../Api/api";

const ADD_ITEMS = 'ADD-ITEMS';


let initial = {
    items: []
}

const employeesPage = (state = initial, action) => {
    switch (action.type) {
        case ADD_ITEMS: {
            return {
                ...state,
                items: action.items
            }
        }
        default:
            return state;
    }
}

const addItemsAC = (items) => ({type: ADD_ITEMS, items});

export const addItemsThunk = (items) => async (dispatch) => {
    const response = await Employee.getEmployee(); 
    debugger;
    addItemsAC(response);
}

export default employeesPage;