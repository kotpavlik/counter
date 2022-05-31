


export type CountInitialStateType = {
    count: number
}

const initialState: CountInitialStateType = {
    count: 0,
}

export const countValueReducer = (state: CountInitialStateType =  initialState, action: ActionCreatorType): CountInitialStateType => {
    switch (action.type) {
        case 'SET_COUNT': {
            return {...state,count:action.value}
        }
        default:
            return state
    }
}

export type ActionCreatorType = ReturnType<typeof setCountValueAC>
export const setCountValueAC = (value:number ) => {
    return {
        type: 'SET_COUNT',
        value
    } as const
}