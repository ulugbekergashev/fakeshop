import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AddProducts from '../addproducts/AddProducts';
import CartIcon from '../button/Button';
import "./Canvas.scss"


function OffCanvasExample({ name, addedItems,removeItem,setAddedItem,setShowAddProducts , ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  console.log(props.addedItems)
 
  return (
    <>
      <Button variant='white' onClick={handleShow} className="button">
        <CartIcon num={addedItems?.length} />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <AddProducts
              // click={setShowAddProducts}
              items={addedItems}
              removeItem={removeItem}
              setAddedItem={setAddedItem}
              />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function Example({addedItems,removeItem,setAddedItem}) {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample
        addedItems={addedItems}
        removeItem={removeItem}
        setAddedItem={setAddedItem} 
        key={idx} placement={placement} 
        name={placement} />
      ))}
    </>
  );
}

export default Example