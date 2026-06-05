import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='h-[85vh] flex items-center justify-between'>
        <LeftContent/>
        <RightContent users={props.users}/>

    </div>
  )
}

export default Page1Content