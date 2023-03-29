const womens_wear = "https://dummyjson.com/products/category/womens-dresses";
const womens_watch = "https://dummyjson.com/products/category/womens-watches";
const womens_shoes = "https://dummyjson.com/products/category/womens-shoes";



// 888888888888888888888 fetch womens wear 888888888888888888888888

const womens_dress = document.getElementById("clothing-container")

async function getWomensShirt(url) {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.products)
    // console.log(data.results)
    showShirt(data.products)
}
getWomensShirt(womens_wear);


const showShirt = (data) => {
    womens_dress.innerHTML = '';
    data.forEach(element => {
        const { id, title, price, brand, thumbnail } = element
        const shirtEle = document.createElement('div')
        shirtEle.classList.add('box')
        shirtEle.innerHTML = `
        <div id ="${id}">
         <a href="product-detail-women.html?id=${id}">
             <img src="${thumbnail}">
             <div id="details">
                 <h3>${title}</h3>
                 <h4>${brand}</h4>
                 <h2>Rs  <span class="price">${price}</span></h2>
             </div>
         </a>
     </div>
        `
        womens_dress.appendChild(shirtEle)
    });
}

// 888888888888888888888 fetch womens-wear 888888888888888888888888



// 888888888888888888888 fetch womens-Watch 888888888888888888888888

const Watch_container = document.getElementById("watch-container")
async function getMensWatch(url) {
    const res = await fetch(url);
    const watch_data = await res.json();
    // console.log( watch_data.products)

    showWatch(watch_data.products)
}
getMensWatch(womens_watch);


const showWatch = (watch_data) => {
    Watch_container.innerHTML = '';
    watch_data.forEach(element => {
        const { id, title, price, brand, thumbnail } = element
        const WatchEle = document.createElement('div')
        WatchEle.classList.add('box')
        WatchEle.innerHTML = `
        <div id ="${id}">
         <a href="product-detail-women.html?id=${id}">
             <img src="${thumbnail}">
             <div id="details">
                 <h3>${title}</h3>
                 <h4>${brand}</h4>
                 <h2>Rs  <span class="price">${price}</span></h2>
             </div>
         </a>
     </div>
        `
        Watch_container.appendChild(WatchEle)
    });
}

// 888888888888888888888 fetch Mens-watch 888888888888888888888888




// 888888888888888888888 fetch womens-shoes 888888888888888888888888

const shoe_container = document.getElementById("shoe-container")
async function getMensShoe(url) {
    const res = await fetch(url);
    const shoe_data = await res.json();
    // console.log( shoe_data.products)

    showShoe(shoe_data.products)
}
getMensShoe(womens_shoes);


const showShoe = (shoe_data) => {
    shoe_container.innerHTML = '';
    shoe_data.forEach(element => {
        const { id, title, price, brand, thumbnail } = element
        const ShoeEle = document.createElement('div')
        ShoeEle.classList.add('box')
        ShoeEle.innerHTML = `
        <div id ="${id}">
         <a href="product-detail-women.html?id=${id}">
             <img src="${thumbnail}">
             <div id="details">
                 <h3>${title}</h3>
                 <h4>${brand}</h4>
                 <h2>Rs  <span class="price">${price}</span></h2>
             </div>
         </a>
     </div>
        `
        shoe_container.appendChild(ShoeEle)
    });
}

// 888888888888888888888 fetch womens-shoes 888888888888888888888888




// 8888888888888888888 Fetching single Product 88888888888888888888

const single_product = document.getElementById("single-product");
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');
const productUrl = `https://dummyjson.com/products/${productId}`;

async function getSIngleProduct(url) {
    const res = await fetch(url);
    const single_product_details = await res.json();
    showSIngleProduct(single_product_details);
}
getSIngleProduct(productUrl);

const showSIngleProduct = (single_product_details) => {
    single_product.innerHTML = '';
    const { id, category, description, rating, title, price, brand, thumbnail } = single_product_details;
    // console.log(description)
    const SingleEle = document.createElement('div')
    SingleEle.classList.add('pro-details-container')
    SingleEle.innerHTML = `
        <div class="left-column">
            <img src="${thumbnail}" alt="${title}">
        </div>
        <div class="right-column">
            <div class="product-description">
                <span>${category}</span>
                <div class="pro-rating">
                    <span>${rating}</span>
                </div>
                <h1>${title}</h1>
                <h3>${brand}</h3>
                <p>${description}</p>
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
            <div class="product-price">
                <span>₹ ${price}</span>
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
                price: single_product_details.price,
                thumbnail: single_product_details.thumbnail,
                description: single_product_details.description
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
 cartContainer.innerHTML='';
cartItems.forEach(item => {
    const productEle = document.createElement('div');
    productEle.classList.add('product');
    productEle.innerHTML = `
    <div class="product-image">
        <img src="${item.thumbnail}">
    </div>
    <div class="product-details">
        <div class="product-title">${item.title}</div>
        <p class="product-description">${item.description}</p>
    </div>
    <div class="product-price">${item.price}</div>
    <div class="product-quantity">
        <input type="number" value="2" min="1">
    </div>
    <div class="product-removal">
        <button class="remove-product">
            Remove
        </button>
    </div>
    <div class="product-line-price">25.98</div>
</div>


    
    `
    cartContainer.appendChild(productEle);
});

// 888888888888888888888   cart page 8888888888888888888


