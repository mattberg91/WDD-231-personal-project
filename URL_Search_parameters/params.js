// params.js
const products = [
  { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
  { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
  { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" }
];


function getParam(param) {
  const paramsString = window.location.search;
  const params = new URLSearchParams(paramsString);
  return params.get(param);

}


function productTemplate(product) {
  return `
  <div class="product">
    <img src="${product.image}" alt="${product.name}">
    <div class="product__details">
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
  </div>
  </div>

    `;
}
function getProductDetails() {
  const id = getParam("productID");
  if (id) {
    const product = products.find((p) => p.id ===Number(id));
    if (product) {
      output("main", productTemplate(product));
    }
  }
}

function output(selector, markup) {
  const element = document.querySelector(selector);
  element.insertAdjacentHTML("beforeEnd", markup);

}

getProductDetails();





