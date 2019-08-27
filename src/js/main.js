"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const counter = document.querySelector('.app__counter--js');
const addButton = document.querySelector('.app__button-add--js');
const removeButton = document.querySelector('.app__button-remove--js');
var numberGlasses = 0;

console.log("numberGlasses " + numberGlasses);
if(localStorage.getItem('numberOfWaterGlasses')){
  numberGlasses = localStorage.getItem('numberOfWaterGlasses');
}else{
  numberGlasses = 0;
  localStorage.setItem('numberOfWaterGlasses', numberGlasses);
}
console.log("numberGlasses " + numberGlasses);
addButton.addEventListener('click', (e)=>{
  numberGlasses = parseInt(numberGlasses) + 1;
  localStorage.setItem('numberOfWaterGlasses', numberGlasses);
  counter.textContent = numberGlasses;
  console.log("dodano szklankę wody. W sumie wypito :" + counter.textContent + "szklanek.");
})

removeButton.addEventListener('click', (e)=>{
  if(--numberGlasses >= 0){
    localStorage.setItem('numberOfWaterGlasses', numberGlasses);
    counter.textContent = numberGlasses;
  }else{
    alert("Liczba wypitych szklanek już wynosi 0.");
  }

  
})


