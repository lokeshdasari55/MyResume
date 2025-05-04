var firstName = '';
document.getElementById('setFname').textContent = localStorage.getItem('name');
document.getElementById('firstName').addEventListener('keydown',(event) => {
 firstName = event.target.value;
})
document.getElementById('btn').addEventListener('click',()=> {
 localStorage.setItem('name',firstName);
 document.getElementById('setFname').textContent = 
localStorage.getItem('name');
})



'use strict';
var colors = ['white', 'red', 'blue', 'green', 'yellow','violet'];
var len = colors.length - 1;
var buttonControl = document.getElementById('btn');
var spanControl = document.querySelector('.color');
buttonControl.addEventListener('click', () => {
 var index = generateRandomNumber();
 document.body.style.backgroundColor = colors[index];
 spanControl.textContent = colors[index];
})
function generateRandomNumber(){
 return Math.round(Math.random() * len);
}