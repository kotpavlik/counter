import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import Counter from './component/counter/Counter';
import {Settings} from './component/settings/Settings';
import {RangeCount} from './component/range_count/RangeCount';


function App() {

    const [count, setCount] = useState<number>(
        () => {
            let newValueString = localStorage.getItem('counterValue');
            if (newValueString) {
                let newCount = JSON.parse(newValueString);
                return newCount || 0;
            }
        });
    const [maxValue, setMaxValue] = useState<number | number[]>(2);
    const [startValue, setStartValue] = useState<number | number[]>(0);
    const [settings, setSettings] = useState<boolean>(true)


    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }, [count])

    return (
        <div className={style.wrapper_counter}>

            {settings
                ?
                <>
                    <div className={style.count_wrapper}><h1> counter</h1></div>
                    <Counter count={count} setCount={setCount} setSettings={setSettings}/>
                </>
                :
                <>
                    <div className={style.count_wrapper}><h1> settings</h1></div>
                    <RangeCount
                        maxValue={maxValue}
                        startValue={startValue}
                        setStartValue={setStartValue}
                        setMaxValue={setMaxValue}

                    />
                    <Settings setSettings={setSettings}/>
                </>
            }

        </div>
    );
}

export default App;
