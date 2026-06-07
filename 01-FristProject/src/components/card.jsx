import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = ({jobs}) => {

   console.log(jobs);
  console.log(Array.isArray(jobs));
  return (
    <>
      {
        jobs.map((job) => (
          <div className="main-border" key={job.id}>

            <div className="top">
              <img src={job.logo} alt="" />
              <button>Save <Bookmark size={16} /></button>
            </div>

            <div className="center">
              <div className="company-name">
                <h2>{job.companyName}</h2>
                <p>{job.postedAt}</p>
              </div>
              <h1>{job.position}</h1>
              <div className='btn'>
                <button>{job.employmentType}</button>
                <button>{job.experienceLevel}</button>
              </div>
            </div>

            <hr />

            <div className="bottom">
              <div>
                <h1>{job.salary}</h1>
                <p>{job.location}</p>
              </div>
              <button>Apply Now</button>
            </div>

          </div>
        ))}
    </>
  )
}

export default Card