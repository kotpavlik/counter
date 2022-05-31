import style from './Counter.module.css';
import Button from '../boutton/Button';
import {useDispatch, useSelector} from 'react-redux';
import { setCountValueAC} from '../../store/reducers/count_reducer';

import {AppStateType} from '../../store/store';


type CounterPropsType = {
    setSettings: (settings: boolean) => void;
}

const Counter = (props: CounterPropsType) => {

    const dispatch = useDispatch()
    const count = useSelector<AppStateType,number >(state => state.count_value.count)
    const startValue = useSelector<AppStateType,number | number[]>(state => state.start_value.startValue)
    const maxValue = useSelector<AppStateType,number | number[]>(state => state.max_value.maxValue)


    const onClickHandlerInc = () => {
        count !== maxValue ? dispatch(setCountValueAC(count + 1)) : dispatch(setCountValueAC(maxValue));
    }
    const onClickHandlerReset = (startValue:number | number[]) => {
        dispatch(setCountValueAC(Number(startValue)))
    }
    const onClickHandlerSet = () => {
        props.setSettings(false)
    }
    const styleMoreOrLessFive = count >= maxValue ? style.moreFive : style.lessFive;

    return (
        <div className={style.counter}>
            <div className={styleMoreOrLessFive}>{count}</div>
            <div className={style.buttons_wrapper}>
                <Button ButtonName={count} disabled={count !== maxValue ? false: true} onClickHandler={() => {
                    onClickHandlerInc()
                }}/>
                <Button
                    ButtonName={'RES'}
                    onClickHandler={() => {
                        onClickHandlerReset(startValue)
                    }}/>
                <Button
                    ButtonName={'SET'}
                    onClickHandler={() => {
                        onClickHandlerSet()
                    }}/>
            </div>

        </div>
    );
};

export default Counter;