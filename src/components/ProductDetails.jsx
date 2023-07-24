import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../actions/setProducts";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
  console.log(product);

  const { id } = useParams();

  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((error) => {
        console.log("error");
      });
    console.log(response.data);
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {                  // return use in useEffect is calling willUnmount
    fetchProduct();
    return(()=>{

    })
  }, []);
  return (
   
    <>
     {
         Object.keys(product).length>0?
        <div className="container" >
        <div className="detailsProduct">
         <div>
         <img className="detailsImg" src={product.image}></img> 
         <button className="detailsbtn"> <i className="fa fa-shopping-cart" aria-hidden="true"></i>Add to Cart</button>
         <button className="detailsbtn" >Buy Now</button>
         </div>
          <div className="detailsdescription">
          <h4>{product.title}</h4>
          <div>{product.description}</div>
          <div>${product.price}</div>
          <div className="ecomStar1">{product.rating.rate}<i className="fa fa-star"></i></div>
          </div>
        </div>
        
      </div> : <div>Loding...</div>
    }
      
    </>
  );
}
export default ProductDetails;
