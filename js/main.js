console.log("Hello world!");

// Create cat objects

// Store cat objects in array

let catArray = [cat1 = {
                    "name": "Mittens",
                    "img": "img/mittens.jpg",
                    "count": 0
                },
                cat2 = {
                    "name": "Sylvester",
                    "img": "img/sylvester.jpg",
                    "count": 0
                }
            ]


// Store reusable page elements in vars

let catDiv = [catDiv1 = {
                "name": document.getElementById('cat-1-name'),
                "img" : document.getElementById('cat-1-pic'),
                "count": document.getElementById('cat-1-count')
            },
            catDiv2 = {
                "name": document.getElementById('cat-2-name'),
                "img" : document.getElementById('cat-2-pic'),
                "count": document.getElementById('cat-2-count')
            }
        ]  


// Insert inital cat info in page

 for (var i=0; i < catArray.length; i++) {
    catDiv[i].name.innerHTML = catArray[i].name;
    catDiv[i].img.src = catArray[i].img;
    catDiv[i].count.innerHTML = catArray[i].count;
}



catDiv1.img.addEventListener('click', function() {

    console.log("cat1.count before: " + cat1.count);
    cat1.count++;

    catDiv1.count.innerHTML = cat1.count;
    
    console.log("cat1.count before: " + cat1.count);
}, false);

catDiv2.img.addEventListener('click', function() {

    console.log("cat2.count before: " + cat2.count);
    cat2.count++;

    catDiv2.count.innerHTML = cat2.count;
    
    console.log("cat2.count before: " + cat2.count);
}, false);





// Experimental loop, not currently functional

// Update count

// For each div in catDiv
// for (var i = 0; i < catDiv.length-1; i++) {
//     // set local counter to corresponding cat object count
//     var privateCount = catArray[i].count;
//     console.log("privateCount before" + privateCount);
//     // when div img is clicked
//     catDiv[i].img.addEventListener('click', function() {
//         // increment local counter
//         privateCount++;
//         console.log("privateCount before" + privateCount);
//         // Set update count in div
        
//         catDiv[i].count.innerHTML = privateCount;
//     })
// }

// Experimental function -- not currently functional
// function countUp(counterName) {
//     // Set local counter var
//     let privateCount = 0;

//     console.log("privateCount before" + privateCount);

//     // Increment local count
//     privateCount++;
//     // Get count
//     counterName
//     catDiv.count.innerHTML = privateCount;
//     console.log("privateCount after" + privateCount);

// }