const btnincrease = document.querySelector(".btn-increase");
const btndecrease = document.querySelector(".btn-decrease");
const textValue = document.querySelector("h2");
const btnchange = document.querySelector(".btn-change");

let counter = 0;

btnincrease.addEventListener("click", function () {
    counter++;
    textValue.textContent = counter;

});
btndecrease.addEventListener("click", function () {
   if(counter > 0) {
    counter--;
   textValue.textContent = counter;
}
   
});
btnchange.addEventListener("click", function () {
    textValue.style.backgroundColor = "cyan";
});