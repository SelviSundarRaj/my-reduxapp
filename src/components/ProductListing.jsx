import axios from "axios";
import { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../actions/setProducts";
import Slider from "./Slider";

import slide1 from "../image/e com women.jpg";

function ProductListing() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((error) => {
        console.log("error");
      });
    console.log(response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      

      <img className="Bannerimg" src={slide1} alt="" />

      <div className="container">
        <div className="d-flex flex-wrap">
          {products.items.map((item) => (
            <ProductComponent key={item.id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
}
export default ProductListing;
