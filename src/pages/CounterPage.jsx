import { useReducer } from 'react'
import { produce } from 'immer'
import Button from '../components/Button'
import Panel from '../components/Panel'

const INCREMENT_COUNT = 'increment_count'
const SET_VALUE_TO_ADD = 'set_value_to_add'
const DECREMENT_COUNT = 'decrement_count'
const ADD_VALUE_TO_COUNT = 'add_value_to_count'

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            // return {
            //     ...state,
            //     count: state.count + 1
            // }
            state.count = state.count + 1
            return;
        case SET_VALUE_TO_ADD:
            // return {
            //     ...state,
            //     valueToAdd: action.payload
            // }
            state.valueToAdd = action.payload
            return;
        case DECREMENT_COUNT:
            // return {
            //     ...state,
            //     count: state.count - 1
            // }
            state.count = state.count - 1
            return;
        case ADD_VALUE_TO_COUNT:
            // return {
            //     ...state,
            //     count: state.count + state.valueToAdd,
            //     valueToAdd: 0
            // }
            state.count = state.count + state.valueToAdd
            state.valueToAdd = 0
            return;
        default:
            return state
    }
}

const CounterPage = ({ initialCount }) => {
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    })
    // console.log(state) 

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT

        })
    }
    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        })
    }

    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch({
            type: ADD_VALUE_TO_COUNT
        })
    }


    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    className='p-1 m-3 bg-gray-50 border border-gray-300'
                    type='number'
                    value={state.valueToAdd || ""}
                    onChange={handleChange}
                />
                <Button>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage