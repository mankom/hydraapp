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
const key = new Date().toISOString().slice(0, 10);

console.log("numberGlasses " + numberGlasses);
if(localStorage.getItem(key)){
  numberGlasses = localStorage.getItem(key);
  counter.textContent = numberGlasses;
}else{
  numberGlasses = 0;
  counter.textContent = numberGlasses;
  localStorage.setItem(key, numberGlasses);
}
console.log("numberGlasses " + numberGlasses);
addButton.addEventListener('click', (e)=>{
  numberGlasses = parseInt(numberGlasses) + 1;
  localStorage.setItem(key, numberGlasses);
  counter.textContent = numberGlasses;
  console.log("dodano szklankę wody. W sumie wypito :" + counter.textContent + "szklanek.");
})

removeButton.addEventListener('click', (e)=>{
  if(--numberGlasses >= 0){
    localStorage.setItem(key, numberGlasses);
    counter.textContent = numberGlasses;
  }else{
    alert("Liczba wypitych szklanek już wynosi 0.");
  }

  
})


