import React from 'react';
import { useState } from 'react';

export function ProductsItems({data, salesStyle,cartItems,setcartItems,key}) {
 const [checkCart, setcheckCart] = useState(false);

 function AddItems() {
  console.log("Addtems");
  setcheckCart(!checkCart);
  setcartItems(cartItems+1);
}

function RemoveItems() {
  console.log("Remove Items");
  setcheckCart(!checkCart);
  setcartItems(cartItems-1);

}

 return <div className="col mb-5">
    <div className="card h-100">
      {/* <!-- Sale badge--> */}
      {data.saleTag === true ? <div className="badge bg-dark text-white position-absolute" style={salesStyle}>Sale</div> : <></>}
      {/* <!-- Product image--> */}
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      {/* <!-- Product details--> */}

      <div className="card-body p-4">
        <div className="text-center">
          {/* <!-- Product name--> */}
          <h5 className="fw-bolder">{data.name}</h5>


          {/* <!-- Product reviews--> */}

          {
            data.rating === true ? (<div className="d-flex justify-content-center small text-warning mb-2">      
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
          </div>) : <></>
          }
          

          {/* <!-- Product price--> */}
          {data.price}
        </div>
      </div>
      {/* <!-- Product actions--> */}
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center"  onClick={()=>{
          checkCart === false ? AddItems(): RemoveItems();
          }}><a className="btn btn-outline-dark mt-auto" href="#" >{
          data.buttonOp 
          }</a></div>
      </div>
    </div>
  </div>
}

