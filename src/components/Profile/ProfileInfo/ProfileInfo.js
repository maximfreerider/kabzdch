import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZ6cRx3M4E_M8t-FNlY5CW1AeQj5bg2a8Ryt0RcSVHmanMTA1"
                    alt="profile info"/>
            </div>
            <div className={s.desc}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;