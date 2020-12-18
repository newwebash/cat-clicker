console.log("Hello world!");

// Create cat objects

// Store cat objects in array

let catArray = [cat1 = {
                    "name": "Mittens",
                    "img": "img/mittens.jpg",
                    "count": 0,
                    "uid": 1
                },
                cat2 = {
                    "name": "Sylvester",
                    "img": "img/sylvester.jpg",
                    "count": 0,
                    "uid": 2
                }
            ]


// Select parent element
var parent = document.getElementById("cat-container");

function increaseCount(cat, p) {
    cat.count++;
    p.innerText = "Count: " + cat.count;
}


 for (var i=0; i < catArray.length; i++) {

    (function(i) {
        var currentCat = catArray[i];

        // Insert inital cat info in page

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

        image.addEventListener('click', function(){
            increaseCount(currentCat, numClicks);
        }, false);

    }(i));
