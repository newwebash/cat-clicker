
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
    },
    updateCatData: function(name, url, count) {
      console.log("Hi from model updateCatData!");
      this.activeCat = this.getActiveStatus();
      console.log("catArray[0].name: " + catArray[0].name);
      for (var i = 0; i < catArray.length; i++) {
        console.log("Loop - i = " + i);
        var currentCat = catArray[i];
        if (this.activeCat.name == currentCat.name) {
          currentCat.name = name;
          currentCat.img = url;
          currentCat.count = count;
        }
      }
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
      console.log("Hi from controller getActiveCat!");
      console.log("model.getActiveStatus().name = " + model.getActiveStatus().name);
      return model.getActiveStatus();
    },
    increaseCount: function(cat) {
      model.updateCatCount(cat);
      view.render();      
    },
    updateCatInfo: function(name, url, count) {
      model.updateCatData(name, url, count);
      view.render();
      adminView.render();
    },
    isAdminViewActive: function() {
      this.adminArea = document.getElementById('admin-form');
      if (this.adminArea.classList.contains("hidden")) {
        return false;
      } else {
        return true;
      }
    },
    init: function() {
      model.init();
      view.init();      
      adminView.init();
    }
  };






  var adminView = {
    init: function() {
      this.adminButton = document.getElementById("admin-button");
      this.adminButton.addEventListener('click', function(){
        adminView.render();
      }, false);
      adminView.render();
    },

    render: function() {
      console.log("hi from AdminView render!");
      this.adminArea = document.getElementById('admin-form');
      this.adminArea.classList.toggle("hidden");

      // Clear the form
      this.adminArea.reset();
      
      // Set default input values
      document.getElementById("form-name-field").defaultValue = controller.getActiveCat().name;
      document.getElementById("form-url-field").defaultValue = controller.getActiveCat().img;
      document.getElementById("form-clicks-field").defaultValue = controller.getActiveCat().count;
      // Save new input values   
      document.getElementById("save-button").addEventListener('click', function(event){
        event.preventDefault();
        this.nameField = document.getElementById("form-name-field").value;        
        this.urlField = document.getElementById("form-url-field").value;
        this.numClicksField = document.getElementById("form-clicks-field").value;
        console.log("new name value = " + this.nameField);
        console.log("new url value = " + this.urlField);
        console.log("new numclicks value = " + this.numClicksField);
        controller.updateCatInfo(this.nameField, this.urlField, this.numClicksField);        
        catPickerView.render();
      }, false);
    }
  };

  var catPickerView = {   
    render: function() {
      // empty the picker
      this.pickerContainer = document.getElementById("cat-picker-container");
      this.pickerContainer.innerHTML = '';

      var catList = controller.getCats();  // Get cats from controller   
         
      for (var i=0; i < catList.length; i++) {  
        var currentCat = catList[i];        
        // create the list
        var catThumbnail = document.createElement("LI");      
        var catThumbnailText = document.createTextNode(currentCat.name);
        catThumbnail.className = "clickable picker-item";
        catThumbnail.appendChild(catThumbnailText);        

        catThumbnail.addEventListener('click', (function(catCopy) {
          return function() {
            controller.setActiveCat(catCopy);    
            if (controller.isAdminViewActive() == true) {
                adminView.render();
              }
            }; 
          })(currentCat));
          
          // Insert in picker container div
        this.pickerContainer.appendChild(catThumbnail);
      }
    }
  };

  var view = {
    init: function() {      
      this.parent = document.getElementById("cat-container");  // Select section element      
      
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
      catPickerView.render();
      view.render();  // Render or re-render view
    },

    
    render: function() {
      // Get active cat
      var activeCat = controller.getActiveCat();

      //check to see if there's already a cat displayed and if so, remove it      
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

    








