import { useState, type FC } from 'react'

export const Counter: FC = () => {
    const [counter, setCounter] = useState(0)
    return (
        <button onClick={() => setCounter(counter + 1)}>
            Count: {counter}
        </button>
    )
}
