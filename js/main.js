
console.log("Hello world!");

document.addEventListener("DOMContentLoaded", function(event) {

  var model = {    

    init: function() {    
      console.log("Hello from model init!");
      this.activeCat = catArray[0]; // Intialize active cat to first cat in array
    },

    getAllCats: function () {
      console.log("Hello from data getAllCats!");
      return catArray;
    },

    updateActiveCat: function (cat) {
      this.activeCat = cat;
    },

    getActiveStatus: function() {
      return this.activeCat;
    }
    
  };


  var controller = {
    getCats: function () {
      console.log("Hello from controller getCats!");
      return model.getAllCats();
    },
    setActiveCat: function(cat) {
      console.log("Hello from controller setActiveCat!");
      console.log("cat: " + cat.name);
      model.updateActiveCat(cat);
    },
    getActiveCat: function() {
      return model.getActiveStatus();
    },
    init: function() {
      console.log("Hello from controller init!");
      model.init();
      view.init();
    }
  };


  var view = {
    

    init: function() {      
      console.log("Hello from view init!");

      this.parent = document.getElementById("cat-container");  // Select section element      
      this.pickerContainer = document.getElementById("cat-picker-container");    // Select aside element      

      // Populate cat picker list
      var catList = controller.getCats();  // Get cats from controller      
      for (var i=0; i < catArray.length; i++) {  
        var currentCat = catList[i];  
        console.log(currentCat);
      
        // Insert inital cat info in picker
        var catThumbnail = document.createElement("LI");
        var catThumbnailText = document.createTextNode(currentCat.name);
        catThumbnail.appendChild(catThumbnailText);

        // Insert in picker container div
        this.pickerContainer.appendChild(catThumbnail);

        // Set active cat on click
        catThumbnail.addEventListener('click', function(){
          controller.setActiveCat(currentCat);
        }, false);
      }

      view.render();  // Render or re-render view
    },

    
    render: function() {
      console.log("Hello from view render!");
      
      // Get active cat
      var activeCat = controller.getActiveCat();

      //check to see if there's already a cat displayed and if so, remove it
      // REFACTOR LATER --- check to see if existing cat container matches new active cat
      if (this.parent.hasChildNodes()) {
        this.parent.removeChild(this.parent.firstChild);
      }

      //create container div with required class and append to parent
      var container = document.createElement('div');
      container.className = "cat-counter";
      container.setAttribute("id", "cat" + activeCat.uid);
      this.parent.appendChild(container);

      // Create nested object elements -- heading
      var h = document.createElement("H2");
      var hText = document.createTextNode(activeCat.name);
      h.appendChild(hText);
      h.className = "cat-name";
      h.className = "cat-info";
      container.appendChild(h);

      // Image
      var image = document.createElement("IMG");
      image.className = "cat-pic";
      image.src = activeCat.img;
      image.setAttribute("id", "cat-pic" + activeCat.uid);
      container.appendChild(image);

      // Count
      var numClicks = document.createElement("P");
      numClicks.innerText = "Count: " + activeCat.count;
      numClicks.setAttribute("id", activeCat.name + "-count");
      numClicks.className = "activeCat-info";
      container.appendChild(numClicks);

      // ID (Just for testing, to be removed later)
      var catID = document.createElement("P");
      catID.innerText = "ID: " + activeCat.uid;
      catID.className = "invisible";
      container.appendChild(catID);
    }

  };

  controller.init();  // Initialize controller -> initialize the model
});

    








