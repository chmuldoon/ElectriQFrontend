
const { renderProducts, parseProducts, } = require("./Render");

document.addEventListener("DOMContentLoaded", function () {
  async function getData(url) {
    const res = await fetch(url)
    return res.json()
  }
  async function fetchProducts() {
    const products = await getData("https://protected-fortress-19687.herokuapp.com/api/products")
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
