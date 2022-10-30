const initState = {
    count: 100,
    age: 150
}

const couterReducer = (state = initState, action) => {
    switch (action.type) {
        case "INCRMENT": return {
            ...state, count: state.count + action.payload, age: state.count + action.payload
        }
        case "DECREMENT": return {
            ...state, count: state.count - action.payload
        }
        case "RESET": return {
            ...state, count: action.payload
        }
        case "HANDLE_AGE": return {
            ...state, age: state.count
        }
        default: return state
    }
}

export default couterReducer