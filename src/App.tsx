import React, {useEffect, useState} from 'react';
import style from './App.module.css';
import Counter from './component/counter/Counter';
import {RangeCount} from './component/range_count/RangeCount';
import {useSelector} from 'react-redux';
import {AppStateType} from './store/store';


function App() {

    const count = useSelector<AppStateType, number>(state => state.count_value.count)
    const startValue = useSelector<AppStateType, number | number[]>(state => state.start_value.startValue)
    const maxValue = useSelector<AppStateType, number | number[]>(state => state.max_value.maxValue)

    const countLocalStorage = () => {
        let newValueString = localStorage.getItem('counterValue');
        if (newValueString) {
            let newCount = JSON.parse(newValueString);
            return newCount
        }
    }


    const startValueLocalStorage = () => {
        let newValueString = localStorage.getItem('start_value');
        if (newValueString) {
            let newStartValue = JSON.parse(newValueString);
            return newStartValue
        }
    }

    const maxValueLocalStorage = () => {
        let newValueString = localStorage.getItem('max_value');
        if (newValueString) {
            let newMaxValue = JSON.parse(newValueString);
            return newMaxValue
        }
    }


    // const [count, setCount] = useState(
    //     () => {
    //         let newValueString = localStorage.getItem('counterValue');
    //         if (newValueString) {
    //             let newCount = JSON.parse(newValueString);
    //             return newCount || 0;
    //         }
    //     });
    // const [maxValue, setMaxValue] = useState<number | number[]>(() => {
    //     let newValueString = localStorage.getItem('max_value');
    //     if (newValueString) {
    //         let newMaxValue = JSON.parse(newValueString);
    //         return newMaxValue || startValue;
    //     }
    // });
    // const [startValue, setStartValue] = useState<number | number[]>(() => {
    //     let newValueString = localStorage.getItem('start_value');
    //     if (newValueString) {
    //         let newStartValue = JSON.parse(newValueString);
    //         return newStartValue || startValue;
    //     }
    // });
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


    return (
        <div className={style.wrapper_counter}>

            {settings
                ?
                <>
                    <div className={style.count_wrapper}><h1> counter</h1></div>
                    <Counter
                        setSettings={setSettings}
                    />

                </>
                :
                <>
                    <div className={style.count_wrapper}><h1> settings</h1></div>
                    <RangeCount
                        setSettings={setSettings}
                    />
                </>
            }

        </div>
    );
}

export default App;
