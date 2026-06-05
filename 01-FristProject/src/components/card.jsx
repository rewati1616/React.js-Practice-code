import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = () => {
  return (
    <>
    <div className="main-border">

        <div className="top">
          <img src="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651105.jpg" alt="Amazon Logo" />
          <button>Save <Bookmark size={16}/></button>
        
        </div>

        <div className="center">

          <div className="company-name">
            <h2>Amazon</h2>
            <p>5 days ago</p>
          </div>
          <h1>Senior UI/UX Designer</h1>
          <div className='btn'>
            <button>Part-Time</button>
            <button>Senior Level</button>
          </div>

        </div>
        
        <hr />

        <div className="bottom">
      
          <div>
            <h1>$120/hr</h1>
            <p>Mumbai, India</p>
          </div>
          <button>Apply Now</button>

        </div>

      </div>
    </>
  )
}

export default Card