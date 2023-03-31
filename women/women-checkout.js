const checkoutURL = new URLSearchParams(window.location.search);
const checkoutPriceFinal = checkoutURL.get("price");
console.log(checkoutPriceFinal);

document.getElementById("checkout-Final-Price").innerHTML = checkoutPriceFinal;


const firstNameInput = document.getElementById("firstName");
const placeOrderButton = document.getElementById("place-order");
const modalContent = document.getElementById("modal-content");

placeOrderButton.addEventListener("click", () => {
    modalContent.innerText = `Congratulations ${firstNameInput.value}! Your order has been placed.`;
});