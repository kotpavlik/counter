import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {maxValueReducer} from './reducers/max_value_reducer';
import {startValueReducer} from './reducers/start_value_reducer';
import {countValueReducer} from './reducers/count_reducer';
import {loadState, saveState} from '../utilities/localStorage';


const rootReducers = combineReducers({
        max_value: maxValueReducer,
        start_value: startValueReducer,
        count_value: countValueReducer
    }
)



export const store = createStore(rootReducers,loadState(), applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    saveState({
        max_value:store.getState().max_value,
        start_value:store.getState().start_value,
        count_value:store.getState().count_value

    })
})

export type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>


// @ts-ignore
window.store = store