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



