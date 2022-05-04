import style from './Counter.module.css';
import Button from '../boutton/Button';


type CounterPropsType = {
    count: number;
    setCount: (count: number) => void;
    setSettings: (settings: boolean) => void;
}

const Counter = (props: CounterPropsType) => {



    const onClickHandlerInc = () => {
        props.count !== 5 ? props.setCount(props.count + 1) : props.setCount(5);
    }
    const onClickHandlerReset = () => {
        props.setCount(0)
    }
    const onClickHandlerSet = () => {
        props.setSettings(false)
    }
    const styleMoreOrLessFive = props.count >= 5 ? style.moreFive : style.lessFive;
    return (
        <div className={style.counter}>
            <div className={styleMoreOrLessFive}>{props.count}</div>
            <div className={style.buttons_wrapper}>
                <Button ButtonName={props.count} count={props.count} onClickHandler={() => {
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