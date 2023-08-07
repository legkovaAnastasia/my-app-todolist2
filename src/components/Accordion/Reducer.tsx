
type ActionType = {
    type: string
}
export type StateType ={
    collapsed: boolean
}
export const TOGGLE_COLLAPSED = 'toggle-collapsed'
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
              return {...state, collapsed: !state.collapsed}
        default:
            throw new Error('wrong type')
    }
    return state
}