import { fetchProducts }  from "./actions"
// document.addEventListener("DOMContentLoaded",  () => {
//   debugger
//   fetchProducts()});

//maybe too much jquery 
$(document).on("DOMContentLoaded", () => fetchProducts());
