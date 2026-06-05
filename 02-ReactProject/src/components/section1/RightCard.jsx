import React from 'react'
import RightCradContent from './RightCradContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-65 overflow-hidden shrink-0 relative rounded-4xl' >
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCradContent id={props.id} color={props.color} tag={props.tag} intro={props.intro}/>
        
    </div>
  )
}

export default RightCard