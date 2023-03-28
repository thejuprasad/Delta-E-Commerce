const womens_wear ="https://dummyjson.com/products/category/womens-dresses";
const womens_watch = "https://dummyjson.com/products/category/womens-watches" ;
const womens_shoes = "https://dummyjson.com/products/category/womens-shoes";



// 888888888888888888888 fetch womens wear 888888888888888888888888

const womens_dress = document.getElementById("clothing-container") 

async function getWomensShirt(url){
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.products)
    console.log(data.results)
    showShirt(data.products)
}
getWomensShirt(womens_wear);


const showShirt = (data)=>{
    womens_dress.innerHTML='';
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
        womens_dress.appendChild(shirtEle)
    });
}

// 888888888888888888888 fetch womens-wear 888888888888888888888888



// 888888888888888888888 fetch womens-Watch 888888888888888888888888

const Watch_container = document.getElementById("watch-container") 
async function getMensWatch(url){
    const res = await fetch(url);
    const watch_data = await res.json();
    console.log( watch_data.products)
    
    showWatch( watch_data.products)
}
getMensWatch(womens_watch);


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
getMensShoe(womens_shoes);


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
