import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className='w-full h-full flex flex-col items-center text-white'>
      <h1 className='text-3xl font-bold mt-10'>Learn About redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App