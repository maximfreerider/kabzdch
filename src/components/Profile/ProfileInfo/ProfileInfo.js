import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(props.profile == null || props.profile === undefined){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.fonPhoto}
                    // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZ6cRx3M4E_M8t-FNlY5CW1AeQj5bg2a8Ryt0RcSVHmanMTA1"
                    src="https://www.freewebheaders.com/wp-content/gallery/cute-headers/lovely-cartoons-header-37225.jpg"
                     alt="fon"/>
            </div>
            <div className={s.desc}>
                <img alt="user`s photochka " src={props.profile.photos.small}/>
                <p>Name: {props.profile.fullName}</p>
                <div>ava + description</div>
            </div>
        </div>
    );
};

export default ProfileInfo;