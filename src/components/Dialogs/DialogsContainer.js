import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
    }
};



let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        }
    }
};


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);