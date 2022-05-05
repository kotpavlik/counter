import React, {FC, useState} from 'react';
import style from './RangeCount.module.css'
import {Slider} from '@mui/material';
import Button from '../boutton/Button';


type RangeCountPropsType = {
    maxValue: number | number[]
    startValue: number | number[]
    setStartValue: (startValue: number | number[]) => void
    setMaxValue: (maxValue: number | number[]) => void
    setSettings: (settings: boolean) => void;
    updateStartValue: () => void;
}


export const RangeCount: FC<RangeCountPropsType> = (props) => {


    const [error, setError] = useState(false)

    const startValueChangeHandler = (event: Event, value: number | number[], activeThumb: number) => {
        if (value >= props.maxValue) {
            props.setStartValue(value)
            setError(true)
        } else {
            setError(false)
            props.setStartValue(value)
        }
    }
    const maxValueChangeHandler = (event: Event, value: number | number[], activeThumb: number) => {
        if (props.startValue >= value) {
            props.setMaxValue(value)
            setError(true)
        } else {
            setError(false)
            props.setMaxValue(value)

        }
    }
    const onClickHandlerBack = () => {
        props.setSettings(true)
        props.updateStartValue()
    }





        return (
            <div className={style.all_range_wrapper}>
                {error ? <div className={style.error}>incorrect value</div> : ''}
                <div>start value</div>
                <Slider
                    onChange={startValueChangeHandler}
                    size="small"
                    defaultValue={props.startValue}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                />
                <div>max value</div>
                <Slider
                    onChange={maxValueChangeHandler}
                    size="small"
                    defaultValue={props.maxValue}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                />
                <div className={style.settings_wrapper}>
                    <Button
                        disabled={error}
                        ButtonName={'back'}
                        onClickHandler={() => {
                            onClickHandlerBack()
                        }}/>
                </div>
            </div>
        );
    };

