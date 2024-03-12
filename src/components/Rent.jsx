import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import First from '../assets/img1.jpeg'
import Second from '../assets/img2.jpeg'
import Third from '../assets/img4.jpeg'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Rent = () => {
  return (
    <div className="text-white md:h-[130vh] h-[85vh] mx-auto text-center flex flex-col align-center bg-[#FF7D3C]">
      <h3 className=" py-20 font-bold text-5xl">Nossos Serviços</h3>
      <div className="px-[5%] w-screen text-left">
        <h1 className="font-bold py-5 text-4xl">Aluguel de veículos</h1>
        <div className="py-[5%]">
          <p className="text-[#212121] text-1xl">Temos uma <b>frota variada</b> à sua disposição para todas as necessidades e</p>
          <p className="text-[#212121] text-1xl"><b>motoristas capacitados</b>, oferecendo <b>o melhor serviço para você.</b></p>
          <p className="text-[#212121] text-1xl"> Alguns dos nossos veículos disponíveis são:</p>
        </div>
      </div>

      <Carousel className="w-[100%]"
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        <img className='h-[80%] max-w-[80%] rounded-md mx-auto' src={First} alt="/" />
        <img className='h-[80%] max-w-[80%] rounded-md mx-auto' src={Third} alt="/" />
        <img className='h-[80%] max-w-[80%] rounded-md mx-auto' src={Third} alt="/" />
        <img className='h-[80%] max-w-[80%] rounded-md mx-auto' src={Second} alt="/" />
      </Carousel>
    </div>
  )
}
export default Rent;