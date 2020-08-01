export const parseProducts = products => {
  return products.map((product) => ({
    name: product.title,
    priceString: product.variants[0].price,
    priceInt: parseInt(product.variants[0].price),
    photo: product.image.src,
  }));
}

const createProductItem = product => {
  let productItem = document.createElement('div');
  productItem.className += "product-item";

  let itemPhoto = document.createElement("img");
  itemPhoto.src = product.photo;
  itemPhoto.className += "item-photo";

  let itemName = document.createElement("p");
  itemName.className += "item-name";
  itemName.innerHTML = product.name

  let itemPrice = document.createElement("p");
  itemPrice.className += "item-price";
  itemPrice.innerHTML = product.priceString;

  productItem.append(itemPhoto);
  productItem.append(itemName);
  productItem.append(itemPrice);


  return productItem;
}
export const RenderStuff = (products) => {
  let $el = document.querySelector(".products-section")
  products.forEach(element => {
    const newItem = createProductItem(element)
    $el.append(newItem);
  });
}