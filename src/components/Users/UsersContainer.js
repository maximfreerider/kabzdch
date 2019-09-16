import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/users-reducer";

let mapPropsToState = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToState = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
};

export default connect(mapPropsToState, mapDispatchToState)(Users);