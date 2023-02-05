import React, {useEffect, useState} from 'react'
import Card from "../cards/Card"
import "./SameProducts.scss"


import { Pagination, Navigation } from "swiper";

export default function SameProducts({products, productCategory, productId , addItem, removeItem, addedItems}) {

  const sameProductArray = products.filter((sameproduct) => sameproduct.category == productCategory);

  const sameProducts = sameProductArray.filter((sameproduct) => sameproduct.id != productId);

  return (
    <div className='same-section'>
      {sameProducts.map((sameproduct , i)=>(
        <Card 
          key={sameproduct.id}
          product={sameproduct}
          addItem={addItem} 
          removeItem={removeItem} 
          addedItems={addedItems} 
        />
      ))}
    </div>


  )
}

// import React, { useRef, useState } from "react";
// // Import Swiper React components

// // Import Swiper styles


// import "./styles.css";

// // import required modules

// export default function App() {
//   return (
//     <>
//       
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//     </>
//   );
// }
