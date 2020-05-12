export const initialState = [{
    todo: '',
    completed: false,
    id: Date.now()
}]

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state, 
                action.payload
            ]
        case "TODO_TOGGLED":
            return state.map((item) => {
                return item.id === action.payload ?
                {...item, completed: !item.completed} :
                item
            })
        case "CLEAR_TODOS":
            return state.filter((item) => !item.completed)
        default:
            return state
    }
}