import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='full flex overflow-x-auto gap-6 p-8 m-12'>
        {props.users.map(function(elem,idx){

          return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} intro={elem.intro}/>
        })}
    </div>
  ) 
}

export default RightContent