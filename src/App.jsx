import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/main/Home";
import ProductDetail from "./components/productDetail/ProductDetail";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Canvas from "./components/canvas/Canvas"
import SearchPage from "./components/search/SearchPage";
import CategoryPage from "./components/category/CategoryPage";
import { CartProvider } from "react-use-cart";
const App = () => {
  const [items, setItem] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const [addedItems, setAddedItem] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setItem(data));
    }, []);
    function changingSrarchData(e) {
        setSearchValue(e.target.value);
    }

    function addItem(item) {
        item.addNumber = 1;
        const itemArr = addedItems;
        setAddedItem([...itemArr, item]);
    }
    function removeItem(item) {
        const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
        setAddedItem(newItems);
    }
  return (
    <Router>
      <div className="full-navbar">
        <div className="nav">
          <Header />
          <div className="nav-right flex-grow-1 justify-content-end">
            <Search
              products={items}
              value={searchValue}
              onChangeData={changingSrarchData}
            />
            <Canvas  
              addedItems={addedItems} 
              removeItem={removeItem} 
              setAddedItem={setAddedItem} 
            />
          </div>
        </div>
      </div>
      <Routes>
        
        <Route exact path="/" element={<Home 
          items={items}  
          searchValue={searchValue} 
          changingSrarchData={changingSrarchData}  
          addedItems={addedItems}
          removeItem={removeItem}
          setAddedItem={setAddedItem}
          addItem={addItem}
          itmesFilter={items}

        />} />
        <Route path="/product/:id" element={<ProductDetail 
          addItem={addItem} 
          removeItem={removeItem} 
          addedItems={addedItems} 
          setAddedItem={setAddedItem}
          products={items}
        />} />
        <Route 
          path="/searchResult/:searchQuery" 
          element={<SearchPage 
            items={items} 
            removeItem={removeItem} 
            addedItems={addedItems} 
            addItem={addItem}
            
            />} 
        />
          <Route 
            path="/category/:categoryOfProduct"  
            element={<CategoryPage 
              products={items}
              removeItem={removeItem} 
              addedItems={addedItems} 
              addItem={addItem} 
            />} />
        {/* <Redirect to="/" /> */}
      </Routes>
    </Router>

  );
};

export default App;


// const searchQueryHandler = (event) => {
//   if (
//       (event?.key === "Enter" || event === "searchButton") &&
//       searchQuery?.length > 0
//   ) {
//       navigate(`/searchResult/${searchQuery}`);
//   }
// };