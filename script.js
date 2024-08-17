// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close')
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}


if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove ('active')
    })
}

var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

for (var i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
        MainImg.src = this.src;
    }
}
// Select all product containers
var productContainers = document.querySelectorAll('.product-container');

productContainers.forEach(function(container) {
    var mainImg = container.querySelector('.main-img');
    var smallImgs = container.querySelectorAll('.small-img');

    smallImgs.forEach(function(smallImg) {
        smallImg.addEventListener('click', function() {
            mainImg.src = this.src;
        });
    });
});

    var productItems = document.querySelectorAll('.pro');

    productItems.forEach(function(item) {
        item.addEventListener('click', function() {
            window.location.href = 'sproduct.html';
        });
    });


