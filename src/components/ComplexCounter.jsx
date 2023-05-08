import { useReducer } from "react"

const initialState = {
    counter: 0,
    counter2: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.value };
        case 'decrement':
            return { ...state, counter: state.counter - action.value };
        case 'increment2':
            return { ...state, counter2: state.counter2 + action.value };
        case 'decrement2':
            return { ...state, counter2: state.counter2 - action.value };
        default:
            return state;
    }
}

export default function ComplexCounter() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count1 - {count.counter}</div>
            <div>Count2 - {count.counter2}</div>
            <div>
                <button type="button" onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment by 1</button>
                <button type="button" onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement by 1</button>
            </div>
            <div>
                <button type="button" onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment by 1</button>
                <button type="button" onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement by 1</button>
            </div>
        </div>
    )
}
