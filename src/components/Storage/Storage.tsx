import { useSelector } from 'react-redux'
import store, { RootState } from '../redux/store'
import { useState } from 'react'

const Storage = () => {
  const storage = useSelector((state: RootState) => state)
  const [state, setState] = useState(store.getState())
  return (
    <>
      <div className="container">
        <div className='item'>
          <h1>Use selector</h1>
          <pre>
            ${JSON.stringify(storage, null, 2)}
          </pre>
        </div>
      </div>
      <div className="container">
        <div className='item'>
          <h1>Default store method</h1>
          <button onClick={() => setState(store.getState())}>update</button>
          <pre>
            ${JSON.stringify(state, null, 2)}
          </pre>
        </div>
      </div>
    </>
  )
}

export default Storage