import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { productsState } from "../components/Recoil/products/atom";

function SingleProduct() {
  const params = useParams();
  const products = useRecoilValue(productsState);

  const product = products.find((product) => product.id === params.productId);

  return <div>{product.title}</div>;
}

export default SingleProduct;
