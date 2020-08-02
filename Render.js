export const parseProducts = products => {
  return products.map((product) => ({
    name: product.title,
    priceString: product.variants[0].price,
    priceInt: parseInt(product.variants[0].price),
    photo: product.image.src,
  }));
}
// export const bindEvents = (products) => {
//   debugger
//   document.getElementById("price").click((e) => {
//     debugger
//     renderProducts(products, "price")
//   })
// }
const createProductItem = product => {
  let $productItem = $("<div/>", { class: "product-item lifted" });

  let $itemPhoto = $("<img/>", { class: "item-photo rounded shadow", src: product.photo})
  let $itemName = $("<p/>", { class: "item-name" }).append(product.name)
  let $itemPrice = $("<p/>", { class: "item-price" }).append("$"+product.priceString);

  $productItem.append($itemPhoto)
  $productItem.append($itemName);
  $productItem.append($itemPrice);


  return $productItem[0]
}

export const renderProducts = async (products, filter = null) => {
  let $el = document.querySelector(".products-section");

  while($el.firstChild) $el.removeChild($el.firstChild);
  
  if(filter){
    if(filter === "price"){
      products = products.sort((a, b) => b.priceInt - a.priceInt);
    }else{
      products = products.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
  }
  setTimeout(function() {

    products.forEach((element) => {
      const newItem = createProductItem(element);
      $el.append(newItem);
    });
  },200)
}