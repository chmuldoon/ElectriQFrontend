// import _ from "lodash";
// function component() {
//   const element = document.createElement("div");

const { RenderStuff } = require("../Render");

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = "Hey"

//   return element;
// }

// document.querySelector("#main").appendChild(component())
document.addEventListener("DOMContentLoaded", function () {
  async function getData(url) {
    const res = await fetch(url)
    return res.json()
  }
  async function fetchProducts() {
    const products = await getData("https://protected-fortress-19687.herokuapp.com/api/products")
    console.log(products)
    debugger
    RenderStuff(products.products);
  }
  fetchProducts();
});
