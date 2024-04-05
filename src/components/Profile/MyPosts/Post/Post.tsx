import React from 'react';
import s from './Post.module.css'
import avatar from '../../../../img/vk_large.jpg'

type PostPropsType = {
    title: string,
    likesCount: number
}
export const Post: React.FC <PostPropsType> = (props) => {
    const {title, likesCount} = props
    return (
        <div className={s.postWrapper}>
            <div className={s.postDescription}>
                <div className={s.postImgContainer}>
                    <img src={avatar} alt="Avatar"/>
                </div>
                <div className={s.postAuthorContainer}>
                    <div className={s.postAuthor}>Алексей Мухаметшин</div>
                    <div className={s.postDataTime}>12:07</div>
                </div>
                <div className={s.postButtonContainer}><button className={s.button}>X</button></div>
            </div>
            <textarea className={s.postText}>{title}</textarea>
            <div className={s.postLikes}>Лайков: {likesCount}</div>
        </div>
    );
};

