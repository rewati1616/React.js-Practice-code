import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if(userData.length > 0){
    printUserData = userData.map(function (elem, idx){

      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='h-52 w-52 overflow-hidden rounded-2xl flex flex-wrap'>
            <img className='h-full w-full overflow-hidden rounded-xl' src={elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto text-white h-screen p-4 font-bold'>
      <div className='flex h-[82%]  flex-wrap gap-4'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center gap-6 p-4'>
        <button 
        className='bg-amber-300 text-black text-sm cursor-pointer active:scale-100 rounded-2xl px-4 py-2 font-semibold'
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }}
        >Prev
        </button>
        <h4 className='font-normal'>Page {index}</h4>
        <button 
        className='bg-amber-300 text-black text-sm cursor-pointer active:scale-100 rounded-2xl px-4 py-2 font-semibold'
        onClick={()=>{
          setIndex(index+1)
        }}
        >Next
        </button>
      </div>
    </div>
  )
}

export default App