var synms = ['castelan', 'stylish', 'beautiful', 'chique', 'elegant', 'fash', 'classy', 'dapper', 'dressy', 'fashionable', 'sleek', 'sharp', 'urban']
var clicks = 0
var pageBottom = document.getElementById("header")
var left = document.getElementById("header-p")

// [].random()
Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

const title = document.getElementById('title')
title.addEventListener("click", function () {
    title.innerHTML = synms.random()
    clicks++
    if (clicks == 3) {
        pageBottom.scrollIntoView()
    }
})

left.addEventListener('click', function() {
    left.style.borderRight = '.15em solid black';
    left.style.animation = 'blink-caret .8s step-end infinite'
})