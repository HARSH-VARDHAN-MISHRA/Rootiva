document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector("header .hamburger");
    const navbarNav = document.querySelector("header nav");
    // console.log(toggleBtn)
    toggleBtn.addEventListener("click", () => {
        // console.log("clicked");
        if (navbarNav.classList.contains("active")) {
            navbarNav.classList.remove("active");
            toggleBtn.innerHTML = `<i class="fas fa-bars"></i>`;
        } else {
            navbarNav.classList.add("active");
            toggleBtn.innerHTML = `<i class="fas fa-times"></i>`;
        }
    });

    
});
