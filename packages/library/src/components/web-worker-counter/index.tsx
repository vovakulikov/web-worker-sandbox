import { useState, type ButtonHTMLAttributes } from "react";

import { log } from './utils.ts'
import MyWorker from './worker.worker.ts?worker'

export function WebWorkerCounter(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    const [counter, setCounter] = useState(0)
    const [worker, setWorker] = useState<Worker|null>(null)

    const handleClick = () => {
        if (worker !== null) {
            worker.terminate()
            setWorker(null)
            return
        }

        // new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' })
        const newWorker = new MyWorker()

        newWorker.onmessage = (event: { data: number }) => {
            log('[Button]', `worker data ${event.data}`)
            setCounter(event.data)
        }

        setWorker(newWorker)
    }

    return (
        <button {...props} onClick={handleClick}>
            { worker ? 'Web worker is running' : 'Web worker is not running' }{' '}
            { counter }
        </button>
    )
}
