import React from 'react';
import s from './ProfileInfo.module.css'
import logo from '../../../img/profile_main_img.jpg'
import avatar from '../../../img/vk_large.jpg'

export const ProfileInfo = () => {
    return (
        <div className={s.profileInfoWrapper}>
            <img className={s.mainImg} src={logo} alt="main profile image"/>
            <div className={s.bottomBar}>
                <div className={s.ownerAvatarBigCircle}>
                    <div className={s.ownerAvatar}>
                        <img src={avatar} alt="owner avatar"/>
                    </div>
                </div>
                <div className={s.descriptionProfile}>
                    <div className={s.ownerNameAndSurname}>Алексей Мухаметшин</div>
                    <div>Ввсети статус</div>
                </div>
            </div>
        </div>
    );
};
