import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersContainerComponent extends React.Component {

    componentDidMount(){
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                debugger;
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    };

    onPageChanged = (numberOfPage) => {
        this.props.setCurrentPage(numberOfPage);
        this.props.toggleIsFetching(true);
        getUsers(numberOfPage, this.props.pageSize).then(data => {
            debugger;
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    };

    render () {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
            <Users currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
            </>
        );
    }
}

let mapPropsToState = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

// let mapDispatchToState = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//           dispatch(setTotalUsersCountActionCreator(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching))
//         }
//     }
// };

export default connect(mapPropsToState,
    {follow, unfollow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching})(UsersContainerComponent);