import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(props.profile == null || props.profile === undefined){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.fonPhoto}
                    src="https://www.freewebheaders.com/wp-content/gallery/cute-headers/lovely-cartoons-header-37225.jpg"
                     alt="fon"/>
            </div>
            <div className={s.desc}>
                {
                    <img alt="user`s photochka " src={props.profile.photos.small}/>
                }
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <p>Name: {props.profile.fullName}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;