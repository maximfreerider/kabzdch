import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    return(
        <StoreContext.Consumer>
            { store => {
                let state = store.getState();

                let onSendMessage = () => {
                    store.dispatch(addMessageActionCreator())
                };

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                };
                return <Dialogs state={state}  dialogsData={state.dialogsPage.dialogsData}
                         messagesData={state.dialogsPage.messagesData}
                         onSendMessage={onSendMessage}
                         updateNewMessageText={onMessageChange}/>
            }
        }
        </StoreContext.Consumer>
    );
};


export default DialogsContainer;