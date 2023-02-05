import React, { useEffect, useState } from "react";

import CardBody from "../cards/CardBody";
import ProductDetail from "../productDetail/ProductDetail";
import Slider from "../slider/Slider"



function Home({items, searchValue, changingSrarchData,addItem, addedItems, removeItem, setAddedItem,itmesFilter}) {
    

  return (
    <>

        <Slider />
        
          

        <CardBody
          products={itmesFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
    </>
  )
}

export default Home