//Create interactive lightbox
let galleryImg = document.querySelectorAll(".gallery-img")
let getLatestOpenedImg
let windowWidth = window.innerWidth

if(galleryImg) {
    galleryImg.forEach((img, index) => {
        img.addEventListener("click", e => {
            let getElementCss = window.getComputedStyle(img)
            let getFullImgUrl = getElementCss.getPropertyValue("background-image")
            let getImgUrlPos = getFullImgUrl.split("/media/thumbnails/")
            let setNewImgUrl = getImgUrlPos[1].replace('")', "")


            getLatestOpenedImg = index + 1

            //Create lightbox background
            let container = document.body
            let newImgWindow = document.createElement("div")
            container.appendChild(newImgWindow)
            newImgWindow.setAttribute("class", "img-window")
            newImgWindow.setAttribute("onclick", "closeImg()")

            //Create and append lightbot img
            let newImg = document.createElement("img")
            newImgWindow.appendChild(newImg)
            newImg.src = `../media/${setNewImgUrl}`
            newImg.setAttribute("id", "current-img")

            //Adjust next and prev button locations according to image size
            newImg.onload = function () {
                let imgWidth = this.width
                let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80

                //Next Btn
                let newNextBtn = document.createElement("a")
                let btnNextText = document.createTextNode("Next")
                newNextBtn.appendChild(btnNextText)
                container.appendChild(newNextBtn)
                newNextBtn.setAttribute("class", "img-btn")
                newNextBtn.id = "img-btn-next"
                newNextBtn.setAttribute("onclick", "changeImg(1)")
                newNextBtn.style.cssText = `right: ${calcImgToEdge}px`

                //Prev Btn
                let newPrevBtn = document.createElement("a")
                let btnPrevText = document.createTextNode("Prev")
                newPrevBtn.appendChild(btnPrevText)
                container.appendChild(newPrevBtn)
                newPrevBtn.setAttribute("class", "img-btn")
                newPrevBtn.id = "img-btn-prev"
                newPrevBtn.setAttribute("onclick", "changeImg(0)")
                newPrevBtn.style.cssText = `left: ${calcImgToEdge}px`
            }
            
        })
    })
}

//Close lightbox
closeImg = () => {
    document.querySelector(".img-window").remove()
    document.querySelector("#img-btn-next").remove()
    document.querySelector("#img-btn-prev").remove()
}

//Change imgs
changeImg = (changeDirection) => {
    //delete current img
    document.querySelector("#current-img").remove()
    //get new img
    let getImgWindow = document.querySelector(".img-window")
    let newImg = document.createElement("img")
    getImgWindow.appendChild(newImg)

    let calcNewImg
    if(changeDirection === 1) {
        calcNewImg = getLatestOpenedImg + 1
        if(calcNewImg > galleryImg.length) {
            calcNewImg = 1
        }
    } else if(changeDirection === 0) {
        calcNewImg = getLatestOpenedImg - 1 
        if(calcNewImg < 1) {
            calcNewImg = galleryImg.length
        }
    }

    newImg.setAttribute("src", `../media/img-${calcNewImg}.JPG`)
    newImg.setAttribute("id", "current-img")

    getLatestOpenedImg = calcNewImg

    newImg.onload = function () {
        let imgWidth = this.width
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 100

        let nextBtn = document.querySelector("#img-btn-next")
        nextBtn.style.cssText = `right: ${calcImgToEdge}px`

        let prevBtn = document.querySelector("#img-btn-prev")
        prevBtn.style.cssText = `left: ${calcImgToEdge}px`
    }

}

// Toggle navbar 
const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-ul")
const links = document.querySelectorAll(".nav-ul li")

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open")
    links.forEach(link => {
        link.classList.toggle("fade")
    })
})



// //Drag images on homepage
// document.addEventListener('DOMContentLoaded', () => {
//     const previewSlider = document.getElementById("preview-slider");
//     previewSlider.scrollTop = 100;
//     previewSlider.scrollLeft = 0;

//     let pos = { top: 0, left: 0, x: 0, y: 0 };

//     const mouseDownHandler = (e) => {
//         pos = {
//             // The current scroll 
//             left: previewSlider.scrollLeft,
//             top: previewSlider.scrollTop,
//             // Get the current mouse position
//             x: e.clientX,
//             y: e.clientY,
//         };

//         // Change the cursor and prevent user from selecting the text
//         previewSlider.style.cursor = 'grabbing';
//         previewSlider.style.userSelect = 'none';

//         document.addEventListener('mousemove', mouseMoveHandler);
//         document.addEventListener('mouseup', mouseUpHandler);
//     };

//     const mouseMoveHandler = (e) => {
//         // How far the mouse has been moved
//         const dx = e.clientX - pos.x;
//         const dy = e.clientY - pos.y;

//         // Scroll the element
//         previewSlider.scrollTop = pos.top - dy;
//         previewSlider.scrollLeft = pos.left - dx;
//     };

//     const mouseUpHandler = () => {
//         previewSlider.style.cursor = 'grab';
//         previewSlider.style.removeProperty('user-select');

//         document.removeEventListener('mousemove', mouseMoveHandler);
//         document.removeEventListener('mouseup', mouseUpHandler);
//     };

//     previewSlider.addEventListener('mousedown', mouseDownHandler);
// });