import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Card from './../cards/Card';
import "./CategoryPage.scss"

export default function CategoryPage({products, addItem, addedItems, removeItem}) {
   const {categoryOfProduct} = useParams()

  const itmesFilter = products.filter((item) =>
        item.category == categoryOfProduct
    );
  console.log(itmesFilter)

  return (
    <>
    <h1 className='container'>Category: {categoryOfProduct}</h1>
      <div className='category-wrap container'>
        {itmesFilter.map((item)=>(
        <Card 
          key={item.id}
          product={item}
          addItem={addItem} 
          removeItem={removeItem} 
          addedItems={addedItems} 
        />
        ))}
      </div>
    </>
  )
}
