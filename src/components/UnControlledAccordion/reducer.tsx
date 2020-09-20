type ActionType = {
    type: string
}

export type stateType={
    collapsed:boolean
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED';
export const reducer = (state: stateType, action: ActionType):stateType => {
    //state-это наш useState
    //action-это как мы преобразовываем
    //:stateType-должен вернуть объект а не бы что
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            const stateCopy={...state}
            stateCopy.collapsed=!state.collapsed;
                return stateCopy;
        default:
            throw new Error('Bad action type')
    }
    return state;
}