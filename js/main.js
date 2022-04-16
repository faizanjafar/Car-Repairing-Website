const header = document.querySelector(".navbar");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 25) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})



