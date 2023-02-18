import React, { useState } from "react";
import menu from "../menudata";
import { Modal } from "react-bootstrap";
export default function Burger({ burger }) {
  const [quantity, setquantity] = useState(1);
  const [meal, setmeal] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ margin: "70px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h1>{burger.name}</h1>
        <img
          src={burger.image}
          className="img fluid"
          alt="image"
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Meal</p>
          <select
            className="form-control"
            value={meal}
            onChange={(e) => {
              setmeal(e.target.value);
            }}
          >
            {burger.meal.map((meal) => {
              return <option value={meal}>{meal}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price :$ {burger.prices[0][meal] * quantity}{" "}
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn">ADD TO ORDER</button>
        </div>
      </div>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{burger.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={burger.image} className='img-fluid' style={{height:'400px'}} />
          <p>{burger.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
