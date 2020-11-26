import { connect } from "react-redux";
import { addItemsThunk } from "../Redux/emloyees-reducer";
import Employees from "./Employees";


const mapStateToProps = (state) => {
    return {
        items: state.employees.items
    }
}

export default connect(
    mapStateToProps,
    {addItems: addItemsThunk}
)(Employees);
