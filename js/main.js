// Get Slider Items | Array.from[ES6 Features]
var sliderImage = Array.from(document.querySelectorAll('.slider-container img'));

// Get number Of Tables
var slidesCount = sliderImage.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number String Element
var slideNumberElement = document.getElementById('slider-number');

// Previous And Next Buttons
var nextButton = document.getElementById('next');
var prevBurron = document.getElementById('prev');

// Handle Click On Previous And Next Button
nextButton.onclick = nextSlide;
prevBurron.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID on Created UL Element
paginationElement.setAttribute('id', 'pagination-ul');

//Create List Item Based On Slides Count
for(var i = 1; i <= slidesCount; i++){

    // Create The LI
    var paginationItem = document.createElement('li');

    // Set Custom Attribute
    paginationItem.setAttribute('data-index', i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items To The Main UL List
    paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element To The PAGE
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.from[ES6 Features]
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullet Item
for(var i = 0; i < paginationBullets.length; i++){
    paginationBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();

    }
}

// Triggle The Checker Function
theChecker();

// Next Slide Function 
function nextSlide(){
    if(nextButton.classList.contains('disabled')){
        // Do Nothing
        return false;
    }else{
        currentSlide++;
        theChecker();
    }

}
// Previous Slide Function 
function prevSlide(){
    if(prevBurron.classList.contains('disabled')){
        // Do Nothing
        return false;
    }else{
        currentSlide--;
        theChecker();
    }
}

// Created The Checker Function
function theChecker(){
    // Set The Slide Number
    slideNumberElement.textContent = (currentSlide) + '/' + (slidesCount);
    // Remove All Active
    removeAllActive();
    // Set Active Class On Cureent Slide 
    sliderImage[currentSlide - 1].classList.add('active');

    // Set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentSlide -1].classList.add('active');

    // Check If Current Slide Is The First
    if(currentSlide == 1){
        // Add Disable Class On Previous
        prevBurron.classList.add('disabled');
    }
    else{
        // Remove Disable Class On Previous
        prevBurron.classList.remove('disabled');
    }

    // Check If Current Slid Is The Last
    if(currentSlide == slidesCount){
        // Add Disable Class On Next
        nextButton.classList.add('disabled');
    }else{
        // Remove Disable Class On Next
        nextButton.classList.remove('disabled');
    }
}

 // Remove All Active From Image And Pagination Bullets
 function removeAllActive(){
 // Loop Through Image
 sliderImage.forEach(function(img){
     img.classList.remove('active');
  });

  // Loop Through Pagination Bullets
  paginationBullets.forEach(function(bullet){
    bullet.classList.remove('active');
  });
 }