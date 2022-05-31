

export type maxValueInitialStateType = {
    maxValue: number | number[]
}

const initialState: maxValueInitialStateType = {
    maxValue: 0,
}

export const maxValueReducer = (state: maxValueInitialStateType =  initialState,
                                action: ActionCreatorType): maxValueInitialStateType => {
    switch (action.type) {
        case 'SET_MAX_VALUE': {
            return {...state,maxValue:action.value}
        }
        default:
            return state
    }
}

export type ActionCreatorType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (value:number | number[]) => {
    return {
        type: 'SET_MAX_VALUE',
        value
    } as const
}