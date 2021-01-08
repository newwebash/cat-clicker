// Create cat objects

function ACat(name, uid) {
    this.name = name;
    this.img = "img/" + this.name + ".jpg";
    this.count = 0;
    this.uid = uid;
    // (function () {
    //     this.uid += 1;
    // })();
}

// function idCounter() {

// }


var mittens = new ACat('mittens', 1);
var sylvester = new ACat('sylvester', 2);
var bilbo = new ACat('bilbo', 3);
var jazzy = new ACat('jazzy', 4);
var ometto = new ACat('ometto', 5);


// Store cat objects in array
let catArray = [mittens, sylvester, bilbo, jazzy, ometto];
