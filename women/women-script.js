const womens_wear = "https://classic-world.onrender.com/WomensData";

const omgDeals = "https://classic-world.onrender.com/HomePageData";

const preloader = document.getElementById("preloader");




// 88888888888888888888888 womens home page images 888888888888888888888888888888

const home_image_container = document.getElementById("home-image-container") 

// console.log(shirt_container)
async function getHomeImage(url){
    // to show the preloader before api is fetched
    preloader.style.display = "flex";

    const res = await fetch(url);
    const data = await res.json();
    const slicedOmg = data.HomePageBrandsToBag.slice(0, 10);

        // hide the preloader after api is fetched
        preloader.style.display = "none";

    showSOmgDeals(slicedOmg)
}
getHomeImage(omgDeals);


const showSOmgDeals = (data)=>{
    home_image_container.innerHTML='';
    data.forEach(element => {
        const {id,image} = element
        const shirtEle = document.createElement('div')
        shirtEle.classList.add('box')
         shirtEle.innerHTML = `
        <div id ="${id}">
         <a href="clothing-women.html">
             <img src="${image}">
         </a>
     </div>
        `
        home_image_container.appendChild(shirtEle)
    });
}



// 88888888888888888888888 women home page images 888888888888888888888888888888



// 888888888888888888888888  home page best buy 8888888888888888888888888888888

const home_best_buy = document.getElementById("home-image-best-buy") 

async function getHomeBestBuy(url){


    const res = await fetch(url);
    const data = await res.json();
    const slicedBestBuy = data.HomePageBudgetToBuys.slice(6, 16);

    showBestBuy(slicedBestBuy)

}
getHomeBestBuy(omgDeals);


const showBestBuy = (data)=>{
    home_best_buy.innerHTML='';
    data.forEach(element => {
        const {id,image} = element
        const shirtEle = document.createElement('div')
        shirtEle.classList.add('box')
         shirtEle.innerHTML = `
        <div id ="${id}">
         <a href="clothing-women.html">
             <img src="${image}">
         </a>
     </div>
        `
        home_best_buy.appendChild(shirtEle)
    });
}


// 888888888888888888888888  home page best buy 8888888888888888888888888888888



// 88888888888888888888888  home image top brands 8888888888888888888888888888888

const home_top_brand = document.getElementById("home-image-brand") 

async function getHomeTopBrand(url){

    const res = await fetch(url);
    const data = await res.json();
    const slicedBestBuy = data.HomePageGrandBrands.slice(8, 20);

    showTopBrand(slicedBestBuy)


}
getHomeTopBrand(omgDeals);


const showTopBrand = (data)=>{
    home_top_brand.innerHTML='';
    data.forEach(element => {
        const {id,image} = element
        const shirtEle = document.createElement('div')
        shirtEle.classList.add('box')
         shirtEle.innerHTML = `
        <div id ="${id}">
         <a href="clothing-women.html">
             <img src="${image}">
         </a>
     </div>
        `
        home_top_brand.appendChild(shirtEle)
    });
}


// 88888888888888888888888  home image top brands 8888888888888888888888888888888





// 888888888888888888888 fetch women-cloth 888888888888888888888888



const cloth_container = document.getElementById("clothing-container") 
async function getWoemnWear(url){


    // to show the preloader before api is fetched
    preloader.style.display = "flex";

    const res = await fetch(url);
    const data = await res.json();
    const slicedDatacloth = data.slice(0, 60);
    
    showWomenWear(slicedDatacloth)
    console.log(slicedDatacloth)

    // hide the preloader after api is fetched
     preloader.style.display = "none";
}
getWoemnWear(womens_wear);


const showWomenWear = (data)=>{
    cloth_container.innerHTML='';
    data.forEach(element => {
        const {id, title, discount, rating, strike_price, discounted_price,brand,images} = element
        const shirtEle = document.createElement('div')
        shirtEle.classList.add('box')
         shirtEle.innerHTML = `
        <div id ="${id}">
         <a href="product-detail-women.html?id=${id}">
             <img src="${images}">
             <div id="details">
                 <h3>${title}</h3>
             </div>
             <div id="brnd-rating">
             <h4>${brand}</h4> 
             <span>${rating}</span>
             </div>
             <div id ="single-price">
             <h2> <span class="price">₹ ${strike_price}</span></h2>
            <h2><span >₹ ${discounted_price}</span></h2>
            <h2><span class="disscount" > ${discount}</span></h2>
             </div>
         </a>
     </div>
        `
        cloth_container.appendChild(shirtEle)
    });
}

// 888888888888888888888 fetch women-cloth 888888888888888888888888




// 8888888888888888888 Fetching single Product 88888888888888888888

const single_product = document.getElementById("single-product");
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const productUrl = `https://classic-world.onrender.com/WomensData/${productId}`;
console.log(productId)

async function getSIngleProduct(url) {
    const res = await fetch(url);
    const single_product_details = await res.json();
    showSIngleProduct(single_product_details);
}
getSIngleProduct(productUrl);

const showSIngleProduct = (single_product_details) => {
    single_product.innerHTML = '';
    const { id, category, rating, title, discount, strike_price, discounted_price, brand, images } = single_product_details;
    // console.log(description)
    const SingleEle = document.createElement('div')
    SingleEle.classList.add('pro-details-container')
    SingleEle.innerHTML = `
        <div class="left-column">
            <img src="${images}" alt="${title}">
        </div>
        <div class="right-column">
            <div class="product-description">
                <span>${category}</span>
                <div class="pro-rating">
                    <span>${rating}</span>
                </div>
                <h1>${title}</h1>
                <h3>${brand}</h3>
            </div>
            <div class="product-configuration">
                <div class="size-config">
                    <span>Size</span>
                    <div class="size-choose">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                </div>
            </div>
            <div id ="single-product-price">
             <h2> <span class="price">₹ ${strike_price}</span></h2>
            <h2><span class="disscount-single" > ${discount}</span></h2>
             </div>

            <div class="product-price">
                <span>₹ ${discounted_price}</span>
                <div>
                    <button class="cart-btn" id="cart-btn">Add to cart</button>
                </div>
            </div>
        </div>
    `;
    single_product.appendChild(SingleEle);





    const addToCartBtn = SingleEle.querySelector('#cart-btn');
    addToCartBtn.addEventListener('click', () => {
        // get existing cart items from localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // check if product is already in cart
        const isProductInCart = cartItems.some(item => item.id === single_product_details.id);

        if (!isProductInCart) {
            // add new product to cart
            const newCartItem = {
                id: single_product_details.id,
                title: single_product_details.title,
                discounted_price: single_product_details.discounted_price,
                images: single_product_details.images,
            };
            cartItems.push(newCartItem);

            // update localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // update cart badge
            const cartBadge = document.getElementById('badge');
            cartBadge.innerText = cartItems.length;
        }
    });


};

// 8888888888888888888 Fetching single Product 88888888888888888888


// 888888888888888888888   cart page 8888888888888888888

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartContainer = document.getElementById('element-details');
const cartSubtotalElement = document.getElementById('cart-subtotal');

const cartTaxElement = document.getElementById('cart-tax');
const cartShippingElement = document.getElementById('cart-shipping');
const cartTotalElement = document.getElementById('cart-total');

 cartContainer.innerHTML='';
cartItems.forEach(item => {

    const productEle = document.createElement('div');
    productEle.classList.add('product');
    productEle.innerHTML = `
    <div class="product-image">
        <img src="${item.images}">
    </div>
    <div class="product-details">
        <div class="product-title">${item.title}</div>
    </div>
    <div class="product-price">${item.discounted_price}</div>
    <div class="product-quantity">
        <input type="number" value="1" min="1" id="pCount">
    </div>
    <div class="product-removal">
        <button class="remove-product">Remove</button>
    </div>
    <div class="product-line-price" id="product-mul-price">${item.discounted_price}</div>
    </div>

    `
    cartContainer.appendChild(productEle);

    const pCountInput = productEle.querySelector('#pCount');
    const productLinePrice = productEle.querySelector('#product-mul-price');

    pCountInput.addEventListener('change', () => {
        const quantity = pCountInput.value;
        const price = item.price;
        const linePrice = quantity * price;
        productLinePrice.textContent = linePrice;


        // Recalculate cart subtotal
        let subtotal = 0;
        const linePrices = cartContainer.querySelectorAll('.product-line-price');
        linePrices.forEach(linePrice => {
            subtotal += parseFloat(linePrice.textContent);
        });
        cartSubtotalElement.textContent = subtotal.toFixed(2);

        // Recalculate cart tax and total
        const cartTax = subtotal * 0.05;
        cartTaxElement.textContent = cartTax.toFixed(2);
        const cartTotal = subtotal + cartTax + 15;
        cartTotalElement.textContent = cartTotal.toFixed(2);
    });

    const removeProductButton = productEle.querySelector('.remove-product');

    removeProductButton.addEventListener('click', () => {
        cartContainer.removeChild(productEle); // Remove product element from the DOM
        const index = cartItems.indexOf(item);
        if (index > -1) {
            cartItems.splice(index, 1); // Remove corresponding item from cartItems array
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }


        // Recalculate cart subtotal
        let subtotal = 0;
        const linePrices = cartContainer.querySelectorAll('.product-line-price');
        linePrices.forEach(linePrice => {
            subtotal += parseFloat(linePrice.textContent);
        });
        cartSubtotalElement.textContent = subtotal.toFixed(2);

        // Recalculate cart tax and total
        const cartTax = subtotal * 0.05;
        cartTaxElement.textContent = cartTax.toFixed(2);
        const cartTotal = subtotal + cartTax + 15;
        cartTotalElement.textContent = cartTotal.toFixed(2);
    });
 

});

// Calculate cart subtotal on page load
let subtotal = 0;
const linePrices = cartContainer.querySelectorAll('.product-line-price');
linePrices.forEach(linePrice => {
    subtotal += parseFloat(linePrice.textContent);
});
cartSubtotalElement.textContent = subtotal.toFixed(2);

// Recalculate cart tax and total
const cartTax = subtotal * 0.05;
cartTaxElement.textContent = cartTax.toFixed(2);
const cartTotal = subtotal + cartTax + 15;
cartTotalElement.textContent = cartTotal.toFixed(2);


// 888888888888888888888   cart page 8888888888888888888





