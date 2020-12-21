//import {catArray} from 'js/cats.js'

console.log("Hello world!");

// $(function() {

//   var model = {
//     init: function() {

//     }
//   };


//   var controller = {

//   };


//   var view = {

//   };

// });

    




// Select section element
const parent = document.getElementById("cat-container");

// Select aside element
var pickerContainer = document.getElementById("cat-picker-container");


// increaseCount: function parameters = the cat that was clicked and the paragraph
// countaining its count
function increaseCount(cat, p) {
    cat.count++;
    p.innerText = "Count: " + cat.count;
}

// displayCat(cat): function parameter = the cat that was picked from the list

function displayCat(cat) {
  //check to see if there's already a cat displayed and if so, remove it
  if (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }

  //create container div with required class and append to parent
  var container = document.createElement('div');
  container.className = "cat-counter";
  container.setAttribute("id", "cat" + cat.uid);
  parent.appendChild(container);

  // Create nested object elements -- heading
  var h = document.createElement("H2");
  var hText = document.createTextNode(cat.name);
  h.appendChild(hText);
  h.className = "cat-name";
  h.className = "cat-info";
  container.appendChild(h);

  // Image
  var image = document.createElement("IMG");
  image.className = "cat-pic";
  image.src = cat.img;
  image.setAttribute("id", "cat-pic" + cat.uid);
  container.appendChild(image);

  // Count
  var numClicks = document.createElement("P");
  numClicks.innerText = "Count: " + cat.count;
  numClicks.setAttribute("id", cat.name + "-count");
  numClicks.className = "cat-info";
  container.appendChild(numClicks);

  // ID (Just for testing, to be removed later)
  var catID = document.createElement("P");
  catID.innerText = "ID: " + cat.uid;
  catID.className = "invisible";
  container.appendChild(catID);


  // Send current count and the paragraph containing its count
  // to increaseCount
  image.addEventListener('click', function(){
      increaseCount(cat, numClicks);
  }, false);
}

// Populate cat picker list
function makeCatPicker(cat) {
  var catThumbnail = document.createElement("LI");
  var catThumbnailText = document.createTextNode(cat.name);
  catThumbnail.appendChild(catThumbnailText);

  // Insert in parent div
  pickerContainer.appendChild(catThumbnail);

  // Send cat to displayCat on click
  catThumbnail.addEventListener('click', function(){
    displayCat(cat);
  }, false);
}


// Insert inital cat info in picker

 for (var i=0; i < catArray.length; i++) {

  makeCatPicker(catArray[i]);  

}
