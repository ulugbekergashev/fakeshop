import React , {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import SameProducts from "../sameproduct/SameProducts";
import "./ProductDetail.scss"

export default function ProductDetail({ products, addItem, removeItem, addedItems,  }) {
  const {id} = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => setProduct(data));
  }, [id]);
  const[product, setProduct]=useState([])


  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems.filter((addedItem) => addedItem.id == product.id);
  useEffect(() => {
    item.length == 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);




  return (
    <>
      <div className="product-body">
        <img className="product-img" src={product.image} alt="" />
        <div className="product-detail">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>{product.price}<span>USD</span></h3>
          <button
            className={`${isAdded ? "add-product-btn" : "remove-product-btn"}`}
            onClick={() => {
              isAdded ? addItem(product) : removeItem(product);
              setIsAdded(!isAdded);
            }}
          >
            {isAdded ? <> <i className="fa-solid fa-cart-arrow-down"></i><span>Add to cart</span></> : <i className="fa-solid fa-cart-arrow-down"></i> }
          </button>
        </div>
      </div>
      <h2>Similar products</h2>
      <SameProducts 
        productCategory={product.category} 
        productId={product.id} 
        addItem={addItem} 
        removeItem={removeItem} 
        addedItems={addedItems} 
        products={products}
      />
    </>
  );
}
