console.log("Hello world!");

let count = 0;

console.log("Count before" + count);

var pic = document.getElementById('cat-pic');
var picCounter = document.getElementById('count');
pic.addEventListener('click', function() {
    count++;
    picCounter.innerHTML = count;
    console.log("Count after" + count);
}, false);