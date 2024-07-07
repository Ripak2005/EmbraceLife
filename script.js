let decorate = document.querySelector(".learn2")

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            decorate.classList.remove('learn2')
            decorate.classList.add("showslide")
        }
        console.log(entry.isIntersecting)
    })
}, {threshold:0.3})
observer.observe(decorate)


function navigateToPage() {
    window.location.href = "donation.html";
}
function navigateToPage1() {
    window.location.href = "join.html";
}

