import React from 'react';
import style from './Settings.module.css'
import Button from '../boutton/Button';

type SettingsPropsType = {
    setSettings: (settings: boolean) => void;
}

export const Settings = (props: SettingsPropsType) => {
    const onClickHandlerBack = () => {
        props.setSettings(true)
    }

    return (
        <div className={style.settings_wrapper}>
            <Button
                ButtonName={'back'}
                onClickHandler={() => {
                    onClickHandlerBack()
                }}/>
            <Button
                ButtonName={'save'}
                onClickHandler={() => {
                    alert("save")
                }}/>
        </div>
    );
};

