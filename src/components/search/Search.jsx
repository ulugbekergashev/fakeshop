import React, {useRef , useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.scss";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Search = ({ value, onChangeData }) => {
  const showSearchRef= useRef(null)
  const focusOnInput = useRef(null)
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const searchQueryHandler = (event) => {
    if (
        (event?.key === "Enter" || event === "searchButton") &&
        searchQuery?.length > 0
    ) {
        navigate(`/searchResult/${searchQuery}`);
        setSearchQuery("")
        handleClose()
    }
};
  return (
    <>
      <div className="search__input search__input-hide"  ref={showSearchRef}>
        <i className="fa-solid fa-magnifying-glass fs-4" onClick={()=>{
          // searchQueryHandler("searchButton")
          // showSearchRef.current.classList.remove("search__input-hide")
          handleShow()
          focusOnInput.current.focus()

        }}></i>

      </div>
      <>

      <Modal centered className="bg-dark bg-opacity-50" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Title>Enter product name or category</Modal.Title>

          <input
            
            type="text"
            placeholder="Enter product name or category"
            onChange={(e)=>setSearchQuery(e.target.value)}
            value={searchQuery}
            onKeyUp={searchQueryHandler}
            ref={focusOnInput}
          />
      </Modal>
    </>
    </>
  );
};

export default Search;

