console.log("Hello world!");

// Create cat objects
var mittens = {};
mittens.name = "Mittens";
mittens.img = "img/mittens.jpg";
mittens.count = 0;
mittens.uid = 1;

var sylvester = {};
sylvester.name = "Sylvester";
sylvester.img = "img/sylvester.jpg";
sylvester.count = 0;
sylvester.uid = 2;

// Store cat objects in array
let catArray = [mittens, sylvester];


// Select parent element
var parent = document.getElementById("cat-container");

// increaseCount parameters are the cat that was clicked and the paragraph
// countaining its count
function increaseCount(cat, p) {
    cat.count++;
    p.innerText = "Count: " + cat.count;
}


// Insert inital cat info in page

 for (var i=0; i < catArray.length; i++) {

    (function(i) {
        var currentCat = catArray[i];

        //create container div with required class and append to parent
        var container = document.createElement('div');
        container.className = "cat-counter";
        container.setAttribute("id", "cat" + currentCat.uid);
        parent.appendChild(container);

        // Create nested object elements -- heading
        var h = document.createElement("H2");
        var hText = document.createTextNode(currentCat.name);
        h.appendChild(hText);
        h.className = "cat-name";
        container.appendChild(h);

        // Image
        var image = document.createElement("IMG");
        image.className = "cat-pic";
        image.src = currentCat.img;
        image.setAttribute("id", "cat-pic" + currentCat.uid);
        container.appendChild(image);

        // Count
        var numClicks = document.createElement("P");
        numClicks.innerText = "Count: " + currentCat.count;
        numClicks.setAttribute("id", currentCat.name + "-count");
        container.appendChild(numClicks);

        // ID (Just for testing, to be removed later)
        var catID = document.createElement("P");
        catID.innerText = "ID: " + currentCat.uid;
        container.appendChild(catID);

        // Send current count and the paragraph containing its count
        // to increaseCount
        image.addEventListener('click', function(){
            increaseCount(currentCat, numClicks);
        }, false);

    }(i));

}

    

    

    