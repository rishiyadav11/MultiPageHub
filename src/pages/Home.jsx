import React from 'react'
import Applandingpage from './Applandingpage'
import Alllandingpages from './Alllandingpages'

const Home = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Applandingpage/>
      <Alllandingpages/>
    </div>
  )
}

export default Home
