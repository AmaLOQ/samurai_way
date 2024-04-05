import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <NavLink className={s.link} to={'/profile'}>
                <div className={s.linkItem}>Моя страница</div>
            </NavLink>
            <NavLink className={s.link} to={'/news'}>
                <div className={s.linkItem}>Новости</div>
            </NavLink>
            <NavLink className={s.link} to={'/dialogs'}>
                <div className={s.linkItem}>Сообщения</div>
            </NavLink>
            <NavLink className={s.link} to={'/music'}>
                <div className={s.linkItem}>Музыка</div>
            </NavLink>
            <NavLink className={s.link} to={'/settings'}>
                <div className={s.linkItem}>Настройки</div>
            </NavLink>
        </>
    );
};

