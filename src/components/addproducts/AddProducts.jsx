import React from "react";
import CardList from "./CardList";
import "./AddProducts.css";
import { useRef } from "react";
const AddProducts = ({ items,click,removeItem, setAddedItem }) => {
  const total = items
    .reduce((pre, cur) => {
      return pre + Number(cur.addNumber) * Number(cur.price);
    }, 0)
    .toFixed(2);
  console.log(items)
  const showDivRef = useRef(null);
  
  return (
      <div className="postion-relative">
          <h3 className="my-4 bg-white p-3 fs-2">{total}<span className="text-secondar">USD</span></h3>
          {items.map((item, i, itemsArr) => (
            <CardList
              key={item.id}
              item={item}
              removeItem={removeItem}
              setAddedItem={setAddedItem}
              itemsArr={itemsArr}
            />
          ))}
          <div className="check-out position-absolute bottom-0 w-100 py-3">
             <button
              className="check-out-btn"
              data-bs-toggle="modal" href="#exampleModalToggle" role="button"
              onClick={() => {
                items.length >= 1 ? showDivRef.current.classList.remove("nonvisible") : showDivRef.current.classList.add("nonvisible");
              }}
            >
              Check Out
            </button>
          </div>
          <div className="modal bg-dark p-2 text-dark bg-opacity-10" ref={showDivRef} id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered contact-modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Contact Form</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input required type="tel" className="form-control" id="inputEmail4" />
                  </div>
                  <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                  </div>
                  <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" required className="form-control" id="inputAddress" placeholder="1234 Main St" />
                  </div>
                  <div className="col-12">
                    <label for="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" required className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                  </div>
                  <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                      <option selected>Uzbekistan</option>
                      <option >Turkiye</option>
                      <option >Russia</option>
                      <option >United State of America</option>
                    </select>
                  </div>
                  <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>

                  <button onClick={(e) => (e.preventDefault())} type="submit" className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Send contact information</button>

                </form>
                </div>
                <div className="modal-footer">
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-content">
                <div className="modal-header py-2">
                <button className="btn btn-back" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i class="fa-solid fa-chevron-left m-0 me-1"></i>Back to Contact form</button>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body fs-2">
                  Thanks for your attention. We will contact you
                </div>
                
              </div>
            </div>
          </div>
      </div>
      
  );
};

export default AddProducts;
