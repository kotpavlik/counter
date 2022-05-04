import React from 'react';
import style from './Button.module.css';

type ButtonPropsType = {
    ButtonName: number | string
    onClickHandler: () => void
    count?: number

}

const Button = (props: ButtonPropsType) => {

    return (
        <div className={style.button_wrapper}>
            <button onClick={props.onClickHandler}
                    disabled={props.count !== 5 ? false: true}
                    className={style.button}>
                {props.ButtonName}
            </button>
        </div>
    );
};

export default Button;