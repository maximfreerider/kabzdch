import React from 'react';
import Redirect from "react-router-dom/es/Redirect";
import connect from "react-redux/es/connect/connect";

let mapStateToPropsForRedirect = (state) =>{
    return {
        isAuth: state.auth.isAuth
    }
};

export const withAuthRedirect = (Component) =>  {
    class RedirectComponent extends React.Component {
        render () {
            if(!this.props.isAuth) return <Redirect to={"/login"}/>;
            return (
                <Component{...this.props}/>
            );
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedRedirectComponent;
};