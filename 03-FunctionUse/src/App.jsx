import React from 'react'

function clicked(val){
  console.log(val)
}

const App = () => {
  return (
    <div>
      <input
        onChange={function clickedd(elem){
          clicked(elem.target.value)
        }}

        type="text"
        placeholder='Your Name'
        className='border-2 p-6 m-10' />
    </div>
  )
}

export default App