import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";

let maxLenght50 = maxLenghtCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLenght50]} placeholder="Enter your message" name="newMessageBody" component={Textarea}/>
            <button>Send</button>
        </form>
    );
};

const AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm);

export default AddMessageFormRedux;