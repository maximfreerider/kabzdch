import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 1680;
        }
        this.props.getUserProfile(userId);
    }
    render () {
        return (<Profile {...this.props} profile={this.props.profile}/>);
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
 });

let WithUrlDataContainerComponent =  withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);