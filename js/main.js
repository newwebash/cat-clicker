
console.log("Hello world!");

document.addEventListener("DOMContentLoaded", function(event) {

  var model = {    

    init: function() {    
      this.activeCat = catArray[0]; // Intialize active cat to first cat in array
    },
    getAllCats: function () {
      return catArray;
    },
    updateActiveCat: function (cat) {
      this.activeCat = cat;
    },
    getActiveStatus: function() {
      return this.activeCat;
    },
    updateCatCount: function(cat) {
      cat.count++;
    }    
  };


  var controller = {
    getCats: function () {
      return model.getAllCats();
    },
    setActiveCat: function(cat) {
      model.updateActiveCat(cat);
      view.render();
    },
    getActiveCat: function() {
      return model.getActiveStatus();
    },
    // setAdminMode: function() { // Change active mode from true to false, or from false to true
    //   console.log("hi from controller setAdminMode!");
    //   if (this.activeMode == true) {
    //     this.activeMode = false;
    //   } else {       
    //     this.activeMode = true;
    //   }         
    // },
    // getAdminMode: function() {
    //   return this.activeMode;
    // },
    increaseCount: function(cat) {
      model.updateCatCount(cat);
      view.render();
    },
    init: function() {
      model.init();
      view.init();      
      adminView.init();
    }
  };

  var adminView = {
    init: function() {
      console.log("hi from AdminView init!");
      this.adminButton = document.getElementById("admin-button");
      this.adminButton.addEventListener('click', function(){
        //controller.setAdminMode();
        adminView.render();
      }, false);
      adminView.render();
    },

    render: function() {
      console.log("hi from AdminView render!");
      this.adminArea = document.getElementById('admin-form');
      this.adminArea.classList.toggle("hidden");
      // if (controller.getAdminMode() == true) {
      //   console.log("true");
      //   this.adminArea.classList.toggle("hidden");
      // } else {
      //   console.log("false");
      //   this.adminArea.classList.toggle("hidden");
      // }
    }
  };

  var view = {
    makeCatPicker: function(cat) {
      var catThumbnail = document.createElement("LI");      
      var catThumbnailText = document.createTextNode(cat.name);
      catThumbnail.className = "clickable picker-item";
      catThumbnail.appendChild(catThumbnailText);

      // Insert in picker container div
      this.pickerContainer.appendChild(catThumbnail);

      // Set active cat on click
      catThumbnail.addEventListener('click', function(){
        controller.setActiveCat(cat);
      }, false);
    },

    init: function() {      
      this.parent = document.getElementById("cat-container");  // Select section element      
      this.pickerContainer = document.getElementById("cat-picker-container");    // Select aside element     
      // Populate cat picker list
      var catList = controller.getCats();  // Get cats from controller   
         
      for (var i=0; i < catList.length; i++) {  
        var currentCat = catList[i];        
        this.makeCatPicker(currentCat);  
      }

      // Enable scrolling animation on site title
      window.addEventListener(
        "scroll",
        () => {
          document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
          );
        },
        false
      );

      view.render();  // Render or re-render view
    },

    
    render: function() {
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
      h.className = "cat-info background-gradient";
      container.appendChild(h);

      // Image
      var image = document.createElement("IMG");
      image.className = "cat-pic clickable";
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

      // Send current count and the paragraph containing its count
      // to increaseCount
      image.addEventListener('click', function(){
      controller.increaseCount(activeCat);
      }, false);
    }   

  };

  controller.init();  // Initialize controller -> initialize both the model and view
});

    








