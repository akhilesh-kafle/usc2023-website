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

