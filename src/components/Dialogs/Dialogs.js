import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import AddMessageFormRedux from "./AddMessageForm/AddMessageForm";

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    );
};

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messageElement = props.messagesData.map(message => <Message message={message.message} id={message.id}/>);

    let addNewMessage = (values) =>  {
        props.onSendMessage(values.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElement}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};


export default Dialogs;