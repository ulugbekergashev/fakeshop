import React from 'react'
import { useParams } from 'react-router-dom';
import Card from './../cards/Card';
import "./SearchPage.scss"

export default function SearchPage({items, addItem, addedItems, removeItem}) {
    const {searchQuery} = useParams()
    const itmesFilter = items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())|| item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(itmesFilter)

  return (
    <>
      <h1 className='container'>Searched products by: {searchQuery}</h1>
      <div className='search-wrap container'>
          {itmesFilter.map((item)=>(
          <Card 
            key={item.id}
            product={item}
            addItem={addItem} 
            removeItem={removeItem} 
            addedItems={addedItems} 
          />
      ))}</div>
    </>
  )
}
