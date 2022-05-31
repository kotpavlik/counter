

export type StartValueInitialStateType = {
    startValue: number | number[]
}

const initialState: StartValueInitialStateType = {
    startValue: 0,
}

export const startValueReducer = (state: StartValueInitialStateType =  initialState, action: ActionCreatorType): StartValueInitialStateType => {
    switch (action.type) {
        case 'SET_START_VALUE': {
            debugger
            return {...state,startValue:action.value}
        }
        default:
            return state
    }
}

export type ActionCreatorType = ReturnType<typeof setStartValueAC>
export const setStartValueAC = (value:number | number[]) => {
debugger
    return {
        type: 'SET_START_VALUE',
        value
    } as const
}