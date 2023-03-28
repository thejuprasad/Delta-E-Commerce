const Mens_shirt ="https://dummyjson.com/products/category/mens-shirts";
const Mens_watches = "https://dummyjson.com/products/category/mens-watches" ;
const Mens_shoes = "https://dummyjson.com/products/category/mens-shoes";



// 888888888888888888888 fetch Mens-shirt 888888888888888888888888

const shirt_container = document.getElementById("clothing-container") 
console.log(shirt_container)
async function getMensShirt(url){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.products)
    
    showShirt(data.products)
}
getMensShirt(Mens_shirt);


const showShirt = (data)=>{
    shirt_container.innerHTML='';
    data.forEach(element => {
        const {id, title, price,brand, thumbnail} = element
        const shirtEle = document.createElement('div')
        shirtEle.classList.add('box')
         shirtEle.innerHTML = `
        <div id ="${id}">
         <a href="">
             <img src="${thumbnail}">
             <div id="details">
                 <h3>${title}</h3>
                 <h4>${brand}</h4>
                 <h2>Rs  <span class="price">${price}</span></h2>
             </div>
         </a>
     </div>
        `
        shirt_container.appendChild(shirtEle)
    });
}

// 888888888888888888888 fetch Mens-shirt 888888888888888888888888



// 888888888888888888888 fetch Mens-Watch 888888888888888888888888

const Watch_container = document.getElementById("watch-container") 
async function getMensWatch(url){
    const res = await fetch(url);
    const watch_data = await res.json();
    console.log( watch_data.products)
    
    showWatch( watch_data.products)
}
getMensWatch(Mens_watches);


const showWatch = (watch_data)=>{
    Watch_container.innerHTML='';
    watch_data.forEach(element => {
        const {id, title, price,brand, thumbnail} = element
        const WatchEle = document.createElement('div')
        WatchEle.classList.add('box')
         WatchEle.innerHTML = `
        <div id ="${id}">
         <a href="">
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




// 888888888888888888888 fetch Mens-shoes 888888888888888888888888

const shoe_container = document.getElementById("shoe-container") 
async function getMensShoe(url){
    const res = await fetch(url);
    const shoe_data = await res.json();
    console.log( shoe_data.products)
    
    showShoe( shoe_data.products)
}
getMensShoe(Mens_shoes);


const showShoe = (shoe_data)=>{
    shoe_container.innerHTML='';
    shoe_data.forEach(element => {
        const {id, title, price,brand, thumbnail} = element
        const ShoeEle = document.createElement('div')
        ShoeEle.classList.add('box')
         ShoeEle.innerHTML = `
        <div id ="${id}">
         <a href="">
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

// 888888888888888888888 fetch Mens-shoes 888888888888888888888888
