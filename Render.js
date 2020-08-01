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
  let productItem = document.createElement('div');
  productItem.className += "product-item lifted";

  let itemPhoto = document.createElement("img");
  itemPhoto.src = product.photo;
  itemPhoto.className += "item-photo" +" rounded";

  let itemName = document.createElement("p");
  itemName.className += "item-name";
  itemName.innerHTML = product.name

  let itemPrice = document.createElement("p");
  itemPrice.className += "item-price";
  itemPrice.innerHTML = "$" + product.priceString;
  
  // let name = document.createElement("div");
  // name.append(itemName);

  productItem.append(itemPhoto);
  productItem.append(itemName);
  productItem.append(itemPrice);

  return productItem;
}

export const renderProducts = (products, filter = null) => {
  let $el = document.querySelector(".products-section");

  while($el.firstChild) $el.removeChild($el.firstChild);

  if(filter){
    if(filter === "price"){
      products = products.sort((a, b) => a.priceInt - b.priceInt);
    }else{
      products = products.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }
  }
  debugger
  products.forEach((element) => {
    const newItem = createProductItem(element);
    $el.append(newItem);
  });
}