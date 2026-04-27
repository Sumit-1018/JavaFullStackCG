import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, dynamic } from './RTK/counterSlice'


const App = () => {
  let count = useSelector((c) => c.counter.count)
  console.log(count)

  let dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(dynamic(5))}>Add 5</button>
    </div>
  )
}

export default App
