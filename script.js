document.addEventListener("DOMContentLoaded", async () => {
    await fetchProducts(); // Wait for the products to be fetched before proceeding
    displayProduct(allproducts); // Call displayProduct only after allproducts is populated
});

let allproducts;
//let currentPage = 2;
//const productsPerPage = 21;

async function fetchProducts() {
    try {
        //const response = await fetch("https://fakestoreapi.com/products?limit=`${productsPerPage}`&page=`${page}`");
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        // Save fetched data in allproducts variable
        allproducts = data;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}
// function displayProduct(products) {
//     const itemList = document.getElementsByClassName("list")[0];
//     // Build HTML structure for each product
//     itemList.innerHTML = products
//         .map((product) => {
//             const { image, category, price, title, id } = product;
//             return `
//                 <div class='item' id='item-${id}'>
//                     <img class='img' src='${image}' alt='Product Image'>
//                     <div>
//                         <div class='title'>${title}</div>
//                         <div class='price'>$${price}</div>
//                     </div>
//                     <div>
//                         <button>Add to cart</button>
//                         <button>Favorite</button>
//                     </div>
//                 </div>
//             `;
//         })
//         .join("");
// }
function displayProduct(products) {
    const itemList = document.getElementsByClassName("list")[0];
    // Build HTML structure for each product
    products.forEach(function (product){
        const item=document.createElement("div");
            item.innerHTML = `
                <div class='item' id='${product.id}'>
                    <img class='img' src='${product.image}' alt='Product Image'>
                    <div>
                        <div class='title'>${product.title}</div>
                        <div class='price'>$${product.price}</div>
                    </div>
                    <div>
                        <button onclick=addcart(${product.id})>Add to cart</button>
                        <button onclick=addFav(${product.id})>Favorite</button>
                    </div>
                </div>
            `
            itemList.appendChild(item);
    });    
}
// const mod=document.querySelectorAll(".item");
// document.addEventListener("click",function(){
//     console.log(document.target.id);
// });

var i;
for(i=0 ;i<20 ; i++ ){
    const item=document.getElementById(i+1);
    item.addEventListener('click', function(){
        console.log(i) ;
    })

}
