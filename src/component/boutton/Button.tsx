import React from 'react';
import style from './Button.module.css';

type ButtonPropsType = {
    ButtonName: number | string
    onClickHandler: () => void
    disabled?:boolean

}

const Button = (props: ButtonPropsType) => {

    return (
        <div className={style.button_wrapper}>
            <button onClick={props.onClickHandler}
                    disabled={props.disabled}
                    className={style.button}>
                {props.ButtonName}
            </button>
        </div>
    );
};

export default Button;