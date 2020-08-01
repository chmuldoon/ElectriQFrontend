export const RenderStuff = (products) => {
  let $el = document.querySelector(".products-section")
  products.forEach(element => {
    $el.append(element.title);
  });
}