import { connect } from "react-redux";
import { addItemsThunk, setUsersAC } from "../Redux/emloyees-reducer";
import Employees from "./Employees";


const mapStateToProps = (state) => {
    return {
        items: state.employees.items,
        months: state.employees.months
    }
}

export default connect(
    mapStateToProps,
    {
        addItems: addItemsThunk,
        setUsers: setUsersAC
    }
)(Employees);
