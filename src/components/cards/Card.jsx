import React, { useEffect } from "react";
import "./Card.scss";
import { useState } from "react";
import {Link} from "react-router-dom"
import ProductDetail from "../productDetail/ProductDetail";

const Card = ({ product, addItem, removeItem, addedItems,  }) => {
  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems?.filter((addedItem) => addedItem.id == product.id);
  useEffect(() => {
    item?.length == 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);
  
  return (
    <>
      <div className="card text-center" >
        <Link className="link" to={{
          pathname: `/product/${product.id}`,
        }}>
          <img className="card__img card-img-top" src={product.image} alt=""   />
          <div>
            <h5 className="text-black" >{(product.price)}USD</h5>
            <p>{(product.title).slice(0,45)}{(product.title).length > 45 && "..."}</p>
          </div>
        </Link>
          

        <div className="card-price-add">
          <button
            className={`${isAdded ? "add-item-btn" : "remove-item-btn"} fs-4`}
            onClick={() => {
              isAdded ? addItem(product) : removeItem(product);
              setIsAdded(!isAdded);
              
            }}
          >
            {isAdded ? "+" : <i className="fa-solid fa-trash fs-5"></i> }
          </button>
        </div>

      </div>
             
      </>
  );
};

export default Card;
