import { fetchProducts }  from "./actions"
import { renderProducts } from "./render";
// document.addEventListener("DOMContentLoaded",  () => {
//   debugger
//   fetchProducts()});

//maybe too much jquery 
$(document).on("DOMContentLoaded", () => fetchProducts().then(result => {
  $(".Price").click(() => renderProducts(result, "price"));
  $(".Alphabetical").click(() => renderProducts(result, "alpha"));
})

);
