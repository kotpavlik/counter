import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import Counter from './component/counter/Counter';
import {RangeCount} from './component/range_count/RangeCount';


function App() {

    const [count, setCount] = useState(
        () => {
            let newValueString = localStorage.getItem('counterValue');
            if (newValueString) {
                let newCount = JSON.parse(newValueString);
                return newCount || startValue;
            }
        });
    const [maxValue, setMaxValue] = useState<number | number[]>(() => {
        let newValueString = localStorage.getItem('max_value');
        if (newValueString) {
            let newMaxValue = JSON.parse(newValueString);
            return newMaxValue || startValue;
        }
    });
    const [startValue, setStartValue] = useState<number | number[]>(() => {
        let newValueString = localStorage.getItem('start_value');
        if (newValueString) {
            let newStartValue = JSON.parse(newValueString);
            return newStartValue || startValue;
        }
    });
    const [settings, setSettings] = useState<boolean>(true)

    useEffect(() => {
        localStorage.setItem('start_value', JSON.stringify(startValue))
    }, [startValue])
    useEffect(() => {
        localStorage.setItem('max_value', JSON.stringify(maxValue))
    }, [maxValue])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }, [count])

    const updateStartValue = () => {
        setCount(startValue)
    }


    return (
        <div className={style.wrapper_counter}>

            {settings
                ?
                <>
                    <div className={style.count_wrapper}><h1> counter</h1></div>
                    <Counter
                        count={count}
                        maxValue={maxValue}
                        startValue={startValue}
                        setCount={setCount}
                        setSettings={setSettings}
                        updateStartValue={updateStartValue}/>

                </>
                :
                <>
                    <div className={style.count_wrapper}><h1> settings</h1></div>
                    <RangeCount
                        maxValue={maxValue}
                        startValue={startValue}
                        setStartValue={setStartValue}
                        setMaxValue={setMaxValue}
                        setSettings={setSettings}
                        updateStartValue={updateStartValue}
                    />
                </>
            }

        </div>
    );
}

export default App;
