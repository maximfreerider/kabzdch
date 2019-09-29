import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        // setState - async function
        this.setState({
            editMode: true
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (event) => {
        this.setState({status:event.currentTarget.value});
    };

    componentDidUpdate (prevProps, prevState) {
        console.log("componentDidMount");
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }


    render () {
        console.log("render");
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>Status: {this.props.status || "input your status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;