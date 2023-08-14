var preloaderText = "Welcome to USC 2023";

let i=0;
function typing(){
    if(i<preloaderText.length){
        document.querySelector(".preloader-text").innerHTML += preloaderText.charAt(i);
        i=i+1;
        setTimeout(typing,60)
    }

}
typing();


setTimeout(function(){
    this.document.querySelector(".preloader").style.display = "none";
},4500)



window.addEventListener("click",function(){
    this.document.querySelector(".preloader").style.display = "none";
})



window.addEventListener("scroll",function(){
    if (window.scrollY>30){
        document.querySelector(".navbar").classList.add("sticky");
    }
    else{
        document.querySelector(".navbar").classList.remove("sticky");
    }
})

const togglebtn = document.querySelector(".toggle-btn");
const togglebtnic = document.querySelector(".togle-btn i")

togglebtn.addEventListener("click", function(){
    document.querySelector(".dropdown").classList.toggle("click");
})



//popup image
const popupButton = document.getElementById("popupButton");
  const imageContainer = document.getElementById("imageContainer");
  
  popupButton.addEventListener("click", () => {
    imageContainer.style.display = "flex";
});
  
  imageContainer.addEventListener("click", () => {
    imageContainer.style.display = "none";
});

//facebook api

// window.fbAsyncInit = function() {
//     FB.init({
//       appId: 'YOUR_APP_ID',
//       autoLogAppEvents: true,
//       xfbml: true,
//       version: 'v12.0'
// });
// };
  
// (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));


//scroll animation

const hidden = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});

hidden.forEach((element)=>{
    observer.observe(element);
});

// Scroll Progress Bar
window.onscroll = function() { scrollProgress() };

function scrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    if (scrolled > 80) {
        document.getElementById("goUp").style.display = "block";
    } else {
        document.getElementById("goUp").style.display = "none";
    }
}
