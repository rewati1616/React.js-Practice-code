import React from 'react'

const RightCradContent = (props) => {
    return (
        <div className='bg-amber-3000 absolute h-full w-full top-0 left-0 rounded-4xl flex flex-col justify-between'>
            <h2 className='bg-white h-10 w-10  flex items-center justify-center m-6 rounded-full'>{props.id+1}</h2>
            <div className='p-6 '>
                <p className='text-white mb-10'>{props.intro}</p>
                <div className='flex justify-between '>
                    <button style={{backgroundColor:props.color}} className=' px-6 py-2 text-white font-bold rounded-full '>{props.tag}</button>
                    <button className='text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCradContent