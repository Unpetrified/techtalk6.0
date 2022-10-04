var carouselSlide = document.querySelector(".carousel-slide"),
    carouselImages = carouselSlide.children,
    counter = 1, size = carouselImages[0].clientWidth,
    prevBtn = document.querySelectorAll(".carousel-container svg")[0],
    nextBtn = document.querySelectorAll(".carousel-container svg")[1];

carouselSlide.style.transform = "translateX(" +  -size*counter +"px)";

carouselImages[0].addEventListener("load", () => {
    size = carouselImages[0].clientWidth;
    console.log(size, "yes")
    carouselSlide.style.transform = "translateX(" +  -size*counter +"px)";
})

nextBtn.addEventListener("click", function() {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.setAttribute("class","carousel-slide transition");
    counter++;
    carouselSlide.style.transform = "translateX(" +  -size*counter +"px)"
})

prevBtn.addEventListener("click", function() {
    if (counter <= 0) return;
    carouselSlide.setAttribute("class","carousel-slide transition");
    counter--;
    carouselSlide.style.transform = "translateX(" +  -size*counter +"px)";
})

carouselSlide.addEventListener("transitionend", () =>{
    if (carouselImages[counter].getAttribute("id") == "last_clone") {
        counter = carouselImages.length - 2;
    }
    if (carouselImages[counter].getAttribute("id") == "first_clone") {
        counter = carouselImages.length - counter;
    }
    carouselSlide.setAttribute("class", "carousel-slide");
    carouselSlide.style.transform = "translateX(" +  -size*counter +"px)";
})

window.addEventListener("resize", () => {
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = "translateX(" +  -size*counter +"px)";
    console.log("resized");
})