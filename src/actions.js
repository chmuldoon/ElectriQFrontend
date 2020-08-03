
import { renderProducts, parseProducts } from "./render"
import axios from "axios";

const fetchData = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    return { msg: "Products not found" };
  }
};

export const fetchProducts = async () => {
  const products = await fetchData(
    "https://protected-fortress-19687.herokuapp.com/api/products"
  );
  //Checks if producs are found or not
  if (!Array.isArray(products)) {
    const $errMsg = $("<div/>", { class: "err-msg" }).append(products.msg);
    $(".products-section").append($errMsg);
    return;
  }
  //If products are properly fetched the data is parsed into a smaller simpler product object
  const parsed = parseProducts(products);
  //Product Items get rendered
  renderProducts(parsed);
  return parsed
};
