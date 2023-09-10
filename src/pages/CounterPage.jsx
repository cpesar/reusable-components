import Button from '../components/Button'
import useCounter from '../hooks/use-counter'


// eslint-disable-next-line react/prop-types
const CounterPage = ({ initialCount }) => {
    const { count, increment } = useCounter(initialCount)


    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={increment}>
                Increment
            </Button>
        </div>
    )
}

export default CounterPage