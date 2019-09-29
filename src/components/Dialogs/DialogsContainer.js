import Dialogs from "./Dialogs";
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
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
        onSendMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText))
        }
    }
};


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);