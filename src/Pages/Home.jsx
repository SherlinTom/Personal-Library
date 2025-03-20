import React from 'react'
import LibraryCarousal from '../Components/LibraryCarousal'
import Dashboard from '../Components/Dashboard'
import About from '../Components/About'
import Books from './Books'

const Home = () => {
  return (
    <div>
      <LibraryCarousal/>
      <Dashboard/>
      <About/>
      <Books/>
    </div>
  )
}

export default Home