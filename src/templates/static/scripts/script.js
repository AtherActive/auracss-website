let toggleMobileMenu = function() {
    let nav = document.querySelector("nav");
    let navBtn = document.querySelector("#mobile")
    let list = document.querySelector("ul")

    nav.toggleAttribute("open");
    list.toggleAttribute("open");
    navBtn.toggleAttribute("pressed");
    return false
}