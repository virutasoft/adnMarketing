let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
};




// menu bar
window.onscroll = () =>{
  navbar.classList.remove('.active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }
};

window.onload = () =>{
  
  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }
};
// menu bar

//  SCROLL TO TOP BUTTON
if (window.scrollY > 30) {
  document.querySelector('#scroll-top').classList.add('active');

}else{
  document.querySelector('#scroll-top').classList.remove('active');
}
//  SCROLL TO TOP BUTTON

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




// SCROLL REVEAL
const sr = ScrollReveal({
  origin: 'top',
  distance: '0px',
  duration: 1500,
  delay: 300,
  reset: true,

});

sr.reveal('.home');
sr.reveal('.row, .image', {delay: 300, origin:'right'});
sr.reveal('.headText, .buttonContainer', {delay: 100, origin:'bottom'});
sr.reveal('.card', {delay: 200, origin:'left'});
// sr.reveal('.contact', {delay: 150});
// sr.reveal('.footer', {delay: 700, origin: 'bottom'});
// SCROLL REVEAL


function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');

}
function fadeOut() {
    setInterval(loader, 3000);
}
window.onload = fadeOut();




//PORTFOLIO
//selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}

//fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
  //once user click on any image then remove the scroll bar of the body, so user can't scroll up or down
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
  let selectedImgCategory = element.getAttribute("data-name"); //getting user clicked image data-name value
  previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
  categoryName.textContent = selectedImgCategory; //passing user clicked data-name value in category name
  previewBox.classList.add("show"); //show the preview image box
  shadow.classList.add("show"); //show the light grey background
  closeIcon.onclick = ()=>{ //if user click on close icon of preview box
    previewBox.classList.remove("show"); //hide the preview box
    shadow.classList.remove("show"); //hide the light grey background
    document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
  }
}

 //PORTFOLIO