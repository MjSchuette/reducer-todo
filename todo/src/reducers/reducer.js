export const initialState = {
    todoName: '',
    completed: false,
    id: Date.now()
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return 
        case "TODO_TOGGLED":
            return 
        case "CLEAR_TODOS":
            return 
        default:
            return state
    }
}