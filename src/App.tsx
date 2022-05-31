import React, {useState} from 'react';
import style from './App.module.css';
import Counter from './component/counter/Counter';
import {RangeCount} from './component/range_count/RangeCount';


function App() {

    const [settings, setSettings] = useState<boolean>(true)

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
