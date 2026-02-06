window.addEventListener("scroll", function(){

    const bestFit = document.querySelector(".best-fit");

    const position = bestFit.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(position < screenHeight - 100){
        bestFit.classList.add("show");
    }

});
