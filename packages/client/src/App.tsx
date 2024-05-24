
import { WebWorkerCounter } from '@example/library'

import './App.css'

function App() {
    return (
        <div>
          <h1>Web worker sandbox [Client level – demo]</h1>
          <div className="card">
              Click button below to active web-worker and observe its timer value,
              toggle click deactivates (terminate) web-worker
          </div>
            <WebWorkerCounter />
        </div>
  )
}

export default App
