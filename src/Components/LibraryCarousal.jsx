import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

const LibraryCarousal = () => {
  return (
        <Carousel>
      <Carousel.Item>
        <Image src='https://kitaboo.com/wp-content/uploads/2022/05/digital-library.jpg' className='w-100' height={450}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.randwick.nsw.gov.au/__data/assets/image/0011/388901/eLibrary-Homepage-banner-for-carousel_1400px-X-500px_hr.jpg" alt="" height={450} className='w-100' />
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://blog.bookbaby.com/wp-content/uploads/2015/11/What-Makes-A-Book-Banner.jpg" alt="" className='w-100' height={450} />
      </Carousel.Item>
    </Carousel>
  )
}

export default LibraryCarousal