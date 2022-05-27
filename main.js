
function collapse(e) {
    e.classList.toggle("collapse-Show");
}

// var navbarMenu = document.getElementById("navbar")
// // var showNavbar = document.querySelector("#header show")
// console.log(navbarMenu)

var aItems = document.querySelectorAll('#header ul li a')


for (var i = 0; i < aItems.length; i++) {
    var aItem = aItems[i];
    aItem.onclick = function () {
        console.log(this)
        navbarMenu.style.display = null;
    }
}


