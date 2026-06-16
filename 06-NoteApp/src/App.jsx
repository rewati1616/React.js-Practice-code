import React from 'react'

const App = () => {
  return (
    <div>
      <form >
        <div className='flex flex-col bg-pink-950 h-screen w-96'>
          <input
            type="text"
            placeholder='Enter Note Heading'
            className='p-4 m-3 '
          />  
          <textarea
            type='text'
            placeholder='Details'
          >Details</textarea>
          <button>
            Add Note
          </button>
        </div>
      </form>
    </div>
  )
}

export default App