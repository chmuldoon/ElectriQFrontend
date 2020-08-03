
import { renderProducts, parseProducts } from "./Render"
import axios from 'axios';

document.addEventListener("DOMContentLoaded", function () {
  const fetchData = async (url) => {
    try {
      const res = await axios.get(url)
      return res.data;
    } catch (err) {
      return { msg: "Products not found" }
    }
  }
  async function fetchProducts() {
    const products = await fetchData("https://protected-fortress-19687.herokuapp.com/api/products")
    debugger
    if(!Array.isArray(products)) {
      const $errMsg = $("<div/>", { class: "err-msg"}).append(products.msg)
      $(".products-section").append($errMsg)
      return;
    }
    const parsed = parseProducts(products);
    renderProducts(parsed);
    $(".Price").click(() => 
      renderProducts(parsed, "price")
    )
    $(".Alphabetical").click(() => 
      renderProducts(parsed, "alpha")
    );
  }
  fetchProducts();
});
