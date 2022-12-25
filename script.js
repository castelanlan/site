Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

var synms = ['stylish', 'beautiful', 'chique', 'elegant', 'fash', 'classy', 'dapper', 'dressy', 'fashionable', 'sleek', 'sharp', 'urban']

var clicks = 0
var pageBottom = document.getElementById("header")
const title = document.getElementById('title')

// title.onclick = function () {
//     clicks++
//     title.innerHTML = synms.random()
//     if (clicks > 2) {
//         // window.scroll(0, window.innerHeight)
//     }
// }


title.addEventListener("click", function () {
    title.innerHTML = synms.random()
    clicks++    
    if (clicks == 3) {
        pageBottom.scrollIntoView()
    } 
})