import React, {FC, useState} from 'react';
import style from './RangeCount.module.css'
import {Slider} from '@mui/material';
import Button from '../boutton/Button';
import {useDispatch, useSelector} from 'react-redux';
import { setMaxValueAC} from '../../store/reducers/max_value_reducer';
import {setStartValueAC} from '../../store/reducers/start_value_reducer';
import {AppStateType} from '../../store/store';
import {setCountValueAC} from '../../store/reducers/count_reducer';


type RangeCountPropsType = {
    setSettings: (settings: boolean) => void;
}


export const RangeCount: FC<RangeCountPropsType> = (props) => {

    const dispatch = useDispatch()
    const maxValue = useSelector<AppStateType,number | number[]>(state => state.max_value.maxValue)
    const startValue = useSelector<AppStateType,number | number[]>(state => state.start_value.startValue)

    const [error, setError] = useState(false)

    const startValueChangeHandler = (event: Event, value: number | number[], activeThumb: number) => {
        if (value >= maxValue) {
            dispatch(setStartValueAC(value))
            setError(true)
        } else {
            setError(false)
            dispatch(setStartValueAC(value))
        }
    }
    const maxValueChangeHandler = (event: Event, value: number | number[], activeThumb: number) => {
        if (startValue >= value) {
            dispatch(setMaxValueAC(value))
            setError(true)
        } else {
            setError(false)
            dispatch(setMaxValueAC(value))

        }
    }
    const onClickHandlerBack = (startValue:number| number[]) => {
        props.setSettings(true)
        dispatch(setCountValueAC(Number(startValue)))
    }





        return (
            <div className={style.all_range_wrapper}>
                {error ? <div className={style.error}>incorrect value</div> : ''}
                <div>start value</div>
                <Slider
                    onChange={startValueChangeHandler}
                    size="small"
                    defaultValue={startValue}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                />
                <div>max value</div>
                <Slider
                    onChange={maxValueChangeHandler}
                    size="small"
                    defaultValue={maxValue}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                />
                <div className={style.settings_wrapper}>
                    <Button
                        disabled={error}
                        ButtonName={'back'}
                        onClickHandler={() => {
                            onClickHandlerBack(startValue)
                        }}/>
                </div>
            </div>
        );
    };

