import { Link } from "react-router-dom";



function ProductComponent({ product }) {
  return (
    <>
     <div className="col-md-3 ">
       <Link to={"product/"+product.id}>
           <div id="Ecommerce" className="card card-body">
           <img className="Ecommerceimg" src={product.image} alt="my image"/>
          <div>{product.title} </div>
          <div>Rs.{product.price} </div>
          <div className="ecomStar"> {product.rating.rate} <i className="fa fa-star"></i> </div>
        </div>
     
       </Link>
       </div>
    </>
  );
}

export default ProductComponent;
