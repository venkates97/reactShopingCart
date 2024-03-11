import React from 'react'
import { ProductsItems } from './assets/Componets/ProductsItems'
import { useState } from 'react';

function App() {

  const [cartItems, setcartItems,] = useState(0);

  const productName = [{
    name: "Fancy Product",
    saleTag: false,
    rating: false,
    buttonOp: "view_options",
    price: "$40.00 - $80.00"

  }, {
    name: "Special Item",
    saleTag: true,
    rating: true,
    buttonOp: "Add_to_cart",
    price: "$20.00 $18.00"
  }, {
    name: "Sale Item",
    saleTag: true,
    rating: false,
    buttonOp: "Add_to_cart",
    price: "$50.00 $25.00"
  }, {
    name: "Popular Item",
    saleTag: false,
    rating: true,
    buttonOp: "Add_to_cart",
    price: "$40.00"
  }, {
    name: "Sale Item",
    saleTag: true,
    rating: false,
    buttonOp: "Add_to_cart",
    price: "$50.00 $25.00"
  }, {
    name: "Fancy Product",
    saleTag: false,
    rating: false,
    buttonOp: "view_options",
    price: "$120.00 - $280.00"
  }, {
    name: "Special Item",
    saleTag: true,
    rating: true,
    buttonOp: "Add_to_cart",
    price: "$20.00 $18.00"
  }, {
    name: "Popular Item",
    saleTag: false,
    rating: true,
    buttonOp: "Add_to_cart",
    price: "$40.00"
  }
  ]


  return (

    <div>

      <div id="navigationBar">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">Start Bootstrap</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#!">All Products</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                    <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-outline-dark" type="submit">
                  <i class="bi-cart-fill me-1"></i>
                  Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill" value={cartItems}>{cartItems}</span>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div id="header">
        <header class="bg-dark py-5">
          <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
              <h1 class="display-4 fw-bolder">Shop in style</h1>
              <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
          </div>
        </header>
      </div>

      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              productName.map((ele,index) => <CreateProduct data={ele} cartItems={cartItems} setcartItems={setcartItems} key={index} />)
            }



          </div>
        </div>
      </section>

    </div>

  )
}

function CreateProduct({ data,cartItems,setcartItems,key }) {


  const salesStyle = {
    top: "0.5rem",
    right: "0.5rem"
  }

  return (

    <div>

      {ProductsItems({data, salesStyle,cartItems,setcartItems,key})}

    </div>
  )
}

export default App


