import style from './Counter.module.css';
import Button from '../boutton/Button';


type CounterPropsType = {
    count: number;
    maxValue: number | number[]
    startValue: number | number[]
    setCount: (count: number) => void;
    setSettings: (settings: boolean) => void;
    updateStartValue:() => void;
}

const Counter = (props: CounterPropsType) => {



    const onClickHandlerInc = () => {
        props.count !== props.maxValue ? props.setCount(props.count + 1) : props.setCount(props.maxValue);
    }
    const onClickHandlerReset = () => {
        props.updateStartValue()
    }
    const onClickHandlerSet = () => {
        props.setSettings(false)
    }
    const styleMoreOrLessFive = props.count >= props.maxValue ? style.moreFive : style.lessFive;

    return (
        <div className={style.counter}>
            <div className={styleMoreOrLessFive}>{props.count}</div>
            <div className={style.buttons_wrapper}>
                <Button ButtonName={props.count} disabled={props.count !== props.maxValue ? false: true} onClickHandler={() => {
                    onClickHandlerInc()
                }}/>
                <Button
                    ButtonName={'RES'}
                    onClickHandler={() => {
                        onClickHandlerReset()
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