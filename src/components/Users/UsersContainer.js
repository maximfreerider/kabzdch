import {connect} from "react-redux";
import {
    toggleIsFollowingProgress,
    getUsers, follow, unfollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainerComponent extends React.Component {

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (numberOfPage) => {
        this.props.getUsers(numberOfPage, this.props.pageSize);
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
                   followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};



export default connect(mapPropsToState,
    {follow, unfollow, toggleIsFollowingProgress,
    getUsers})(UsersContainerComponent);