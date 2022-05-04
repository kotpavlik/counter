import React, {FC, useState} from 'react';
import style from './RangeCount.module.css'
import {Slider} from '@mui/material';


type RangeCountPropsType = {
    maxValue: number | number[]
    startValue: number | number[]
    setStartValue: (startValue: number | number[]) => void
    setMaxValue: (maxValue: number | number[]) => void
}


export const RangeCount: FC<RangeCountPropsType> = (props) => {
debugger

    const [error,setError]=useState(false)


    const startValueChangeHandler = (event: Event, value: number | number[], activeThumb: number) => {
        if(value >= props.maxValue) {
            setError(true)
        } else {
            setError(false)
            props.setStartValue(value)}

    }
    const maxValueChangeHandler = (event: Event, value: number | number[], activeThumb: number) => {
        debugger
       if(props.startValue >= value) {
           setError(true)
       } else {
           setError(false)
           props.setMaxValue(value)
       }
    }
    return (
        <div>
            {error ? <div>incorrect value</div>:""}
           <div>start value</div>
            <Slider
                onChange={startValueChangeHandler}
                size="small"
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
            />
            <div>max value</div>
            <Slider
                onChange={maxValueChangeHandler}
                size="small"
                defaultValue={0}
                aria-label="Small"
                valueLabelDisplay="auto"
            />
        </div>
    );
};

