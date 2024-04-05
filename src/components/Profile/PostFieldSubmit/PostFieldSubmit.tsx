import React, {ChangeEvent, useState} from 'react';
import s from './PostFieldSubmit.module.css'
import avatar from '../../../img/vk_large.jpg'
export const PostFieldSubmit = () => {
    const [rows, setRows] = useState(1)
    const [postText, setPostText] = useState('')
    const onFocusChangeRows = ()=> {
        setRows(3)
    }
    const onBlurChangeRows = () => {
        postText ? setRows(3) : setRows(1)
    }
    const onChangeSetTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostText(e.currentTarget.value)
    }
    return (
        <div className={s.postFieldSubmitWrapper}>
            <div className={s.postFieldSubmitContainer}>
                <div className={s.postFieldSubmitImgContainer}>
                    <img src={avatar} alt="Аватар"/>
                </div>
                <textarea
                    onChange={onChangeSetTitle}
                    title={postText}
                    onBlur={onBlurChangeRows}
                    onFocus={onFocusChangeRows}
                    className={s.postFieldSubmitTextField}
                    rows={rows}
                    placeholder={"Что у вас нового?"}></textarea>
            </div>
            <div className={s.buttonWrapper}>
                <button className={s.button}>Добавить пост</button>
            </div>
        </div>
    );
};

