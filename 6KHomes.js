function scrolltohome(){
    var first=document.getElementById('homediv');
    first.style.display='block';
    var buy=document.getElementById('viewbuy');
    buy.style.display='none';
    var rent=document.getElementById('viewrent');
    rent.style.display='none';
    first.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"});
    window.scrollBy(0,offset)
}
function scrolltoflatrecommendations(){
    var first1=document.getElementById('homediv');
    first1.style.display='block';
    var buy=document.getElementById('viewbuy');
    buy.style.display='none';
    var rent=document.getElementById('viewrent');
    rent.style.display='none';
    var first=document.getElementById('flatrecommendations');
    first.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"});
    window.scrollBy(0,offset)
}
function scrolltoservices(){
    var first1=document.getElementById('homediv');
    first1.style.display='block';
    var buy=document.getElementById('viewbuy');
    buy.style.display='none';
    var rent=document.getElementById('viewrent');
    rent.style.display='none';
    var first=document.getElementById('platformservices');
    first.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"});
    window.scrollBy(0,offset)
}
function scrolltoadvertise(){
    var first1=document.getElementById('homediv');
    first1.style.display='block';
    var buy=document.getElementById('viewbuy');
    buy.style.display='none';
    var rent=document.getElementById('viewrent');
    rent.style.display='none';
    var first=document.getElementById('partners');
    first.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"});
    window.scrollBy(0,offset)
}
function scrolltoabout(){
    var first1=document.getElementById('homediv');
    first1.style.display='block';
    var buy=document.getElementById('viewbuy');
    buy.style.display='none';
    var rent=document.getElementById('viewrent');
    rent.style.display='none';
    var first=document.getElementById('about');
    first.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"});
    window.scrollBy(0,offset)
}

function viewbuy(){
    var div1 = document.getElementById('homediv');
    var div2 = document.getElementById('viewbuy');
        div1.style.display = 'none';
        div2.style.display = 'block';
        initializeMap('map1', 20.5937, 78.9629, 5);
}
function viewrent(){
    var div1 = document.getElementById('homediv');
    var div2 = document.getElementById('viewrent');
        div1.style.display = 'none';
        div2.style.display = 'block';
        initializeMap('map2', 20.5937, 78.9629, 5);
}
function initializeMap(divId, lat, lng, zoom) {
    var map1 = L.map(divId).setView([lat, lng], zoom);

    L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map1);
}
// fucntion viewsell(){

// }

function validateForm() {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    if (password != confirm_password) 
    {
        alert("Passwords do not match");
        return false;
    }
    return true;
}
function profile(){
    var div1=document.getElementById('profilediv');
    if(div1.style.display==='none'){
        div1.style.display='block';
    }
    else{
        div1.style.display='none';
    }
}

function logout(){
    alert('Logout successful');
    profile();
}
window.addEventListener('load', function() {
    shuffleDivs();
});
function shuffleDivs() {
    var container = document.getElementById('shuffle-div');
    var container1 = document.getElementById('shuffle-div1');
    var divs = Array.from(container.children);
    divs.sort(function() { return 0.5 - Math.random() });
    divs.forEach(function(div) {
        container.appendChild(div);
    });

    var divs1 = Array.from(container1.children);
    divs1.sort(function() { return 0.5 - Math.random() });
    divs1.forEach(function(div) {
        container1.appendChild(div);
    });
}
function showhomediv(divid){
    var div1=document.getElementById(divid);
    if(div1.style.display==='none'){
        div1.style.display='block';
    }
    else{
        div1.style.display='none';
    }
}

var currentSlide1 = 0;
var currentSlide2 = 0;
var currentSlide3 = 0;
var currentSlide4 = 0;
var currentSlide5 = 0;
var currentSlide6 = 0;
var currentSlide7 = 0;
var currentSlide8 = 0;
var currentSlide9 = 0;
var currentSlide10 = 0;
var images1 = ['home1.jpg','h1.jpg','h2.jpg','h3.jpg','h4.jpg','h5.jpg','h6.jpg'];
var images2 = ['home2.jpg','h21.jpg','h22.jpg','h23.jpg','h24.jpg','h25.jpg','h26.jpg'];
var images3 = ['home3.jpg','h31.jpg','h32.jpg','h33.jpg','h34.jpg','h35.jpg','h36.jpg'];
var images4 = ['home4.jpg','h41.jpg','h42.jpg','h43.jpg','h44.jpg','h45.jpg','h46.jpg'];
var images5 = ['home5.jpg','h51.jpg','h52.jpg','h53.jpg','h54.jpg','h55.jpg','h56.jpg'];
var images6 = ['home6.jpg','h61.jpg','h62.jpg','h63.jpg','h64.jpg','h65.jpg','h66.jpg'];
var images7 = ['home7.jpg','h71.jpg','h72.jpg','h73.jpg','h74.jpg','h75.jpg','h76.jpg'];
var images8 = ['home8.jpg','h81.jpg','h82.jpg','h83.jpg','h84.jpg','h85.jpg','h86.jpg'];
var images9 = ['home9.jpg','h91.jpg','h92.jpg','h93.jpg','h94.jpg','h95.jpg','h96.jpg'];
var images10 = ['home10.jpg','h101.jpg','h102.jpg','h103.jpg','h104.jpg','h105.jpg','h106.jpg'];
function showhomediv(subDivId) {
    var subDiv = document.getElementById(subDivId);
    if (subDiv.style.display === 'none') {
        subDiv.style.display = 'block';
        if (subDivId === 'homediv1') {
            showSlide(subDivId, currentSlide1);
        } 
        else if (subDivId === 'homediv2') {
            showSlide(subDivId, currentSlide2);
        }
    } 
    else {
        subDiv.style.display = 'none';
    }
}
function showSlide(subDivId, offset) {
    if (subDivId === 'homediv1') {
        currentSlide1 = (currentSlide1 + offset + images1.length) % images1.length;
        document.querySelector('#' + subDivId + ' .slideshow-image').src = images1[currentSlide1];
    } 
    else if (subDivId === 'homediv2') {
        currentSlide2 = (currentSlide2 + offset + images2.length) % images2.length;
        document.querySelector('#' + subDivId + ' .slideshow-image').src = images2[currentSlide2];
    }
    else if (subDivId === 'homediv3') {
        currentSlide3 = (currentSlide3 + offset + images3.length) % images3.length;
        document.querySelector('#' + subDivId + ' .slideshow-image').src = images3[currentSlide3];
    }
    else if (subDivId === 'homediv4') {
        currentSlide4 = (currentSlide4 + offset + images4.length) % images4.length;
        document.querySelector('#' + subDivId + ' .slideshow-image').src = images4[currentSlide4];
    }
    else if (subDivId === 'homediv5') {
        currentSlide5 = (currentSlide5 + offset + images5.length) % images5.length;
        document.querySelector('#' + subDivId + ' .slideshow-image').src = images5[currentSlide5];
    }
    else if (subDivId === 'homediv6') {
        currentSlide6 = (currentSlide6 + offset + images6.length) % images6.length;
        document.querySelector('#' + subDivId + ' .slideshow-image').src = images6[currentSlide6];
    }
    else if (subDivId === 'homediv7') {
        currentSlide7 = (currentSlide7 + offset + images7.length) % images7.length;
        document.querySelector('#' + subDivId + ' .slideshow-image').src = images7[currentSlide7];
    }
    else if (subDivId === 'homediv8') {
        currentSlide8 = (currentSlide8 + offset + images8.length) % images8.length;
        document.querySelector('#' + subDivId + ' .slideshow-image').src = images8[currentSlide8];
    }
    else if (subDivId === 'homediv9') {
        currentSlide9 = (currentSlide9 + offset + images9.length) % images9.length;
        document.querySelector('#' + subDivId + ' .slideshow-image').src = images9[currentSlide9];
    }
    else if (subDivId === 'homediv10') {
        currentSlide10 = (currentSlide10 + offset + images10.length) % images10.length;
        document.querySelector('#' + subDivId + ' .slideshow-image').src = images10[currentSlide10];
    }
}
function closediv(divid){
    document.getElementById(divid).style.display = 'none';
}

function initializeRating() {
    const stars = document.querySelectorAll(".star");
    
    stars.forEach(star => {
      star.addEventListener("click", function() {
        const value = parseInt(this.getAttribute("data-value"));
        const ratingContainer = this.parentElement;
        ratingContainer.setAttribute("data-rating", value);
        
        stars.forEach(star => {
          const starValue = parseInt(star.getAttribute("data-value"));
          star.classList.toggle("active", starValue <= value);
        });
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", initializeRating);