import React from 'react'
import Image from 'next/image'
const Carousel = () => {
  return (
   <>
   <div className="carousel py-4  bg-white w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <Image 
    src={'/images/caruosel5.jpg'}
    alt='carousel1'
    width={1920}
    height={344}
    />
    
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
  <Image 
    src={'/images/caruosel6.jpg'}
    alt='carousel2'
    width={1920}
    height={344}
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <Image 
    src={'/images/caruosel3.jpg'}
    alt='carousel3'
    width={1920}
    height={344}
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <Image 
    src={'/images/caruosel4.jpg'}
    alt='carousel4'
    width={1920}
    height={344}
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
   </>
  )
}

export default Carousel

