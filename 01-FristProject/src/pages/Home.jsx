import React from 'react'
import Card from '../components/card';
import Footer from '../components/Footer';

const Home = ({jobs}) => {
  return (
    <>
      <div className="container">
        <Card jobs={jobs}/>
      </div>
      <Footer/>
    </>
  )
}

export default Home