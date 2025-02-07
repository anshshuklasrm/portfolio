let btn1=document.querySelector(".btn")
btn1.addEventListener("click",()=>{
    let tag=document.createElement("a")
    tag.href="Ansh Shukla Resume.pdf"
    
    tag.download="my_cv.pdf"
    document.body.appendChild(tag)
    tag.click()

})


let btn2=document.querySelector(".linkdin")
btn2.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/ansh-shukla-ab92ab260")

})

document.addEventListener('scroll', function() {
    const object = document.querySelector('.links');
    const rect = object.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        object.style.opacity = "1";
        object.style.transform = "scale(1)";
        object.style.transition = "all 5s cubic-bezier(0.4, 0, 0.2, 1)";
    } else {
        object.style.opacity = "0";
        object.style.transform = "scale(0.5)";
        object.style.transition = "all 0.3s ease-in-out";
    }
});
document.addEventListener('scroll', function() {
    const object = document.querySelector('.r2');
    const rect = object.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        object.style.opacity = "1";
        object.style.transform = "scale(1)";
        object.style.transition = "all 5s cubic-bezier(0.4, 0, 0.2, 1)";
    } else {
        object.style.opacity = "0";
        object.style.transform = "scale(0.5)";
        object.style.transition = "all 0.5s ease-in-out";
    }
});

document.addEventListener('scroll', function() {
    const object = document.querySelector('.skilslist');
    const rect = object.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        object.style.opacity = "1";
        object.style.transform = "scale(.9)";
        object.style.transition = "all 5s cubic-bezier(0.4, 0, 0.2, 1)";
    } else {
        object.style.opacity = "0";
        object.style.transform = "scale(0.7)";
        object.style.transition = "all 0.5s ease-in-out";
    }
});


    document.addEventListener('scroll', function() {
        const object = document.querySelector('.prolist');
        const rect = object.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            object.style.opacity = "1";
            object.style.transform = "scale(0.9)";
            object.style.transition = "all 3s ease-in-out";
        } else {
            object.style.opacity = "0";
            object.style.transform = "scale(0.7)";
            object.style.transition = "all 3s ease-in-out";
        }
    });
    



document.addEventListener('scroll', function() {
    const object = document.querySelector('.l2');
    const rect = object.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        object.style.opacity = "1";
        object.style.transform = "scale(1)";
        object.style.transition = "all 5s cubic-bezier(0.4, 0, 0.2, 1)";
    } else {
        object.style.opacity = "0";
        object.style.transform = "scale(0.5)";
        object.style.transition = "all 0.5s ease-in-out";
    }
});

document.addEventListener('scroll', function() {
    const object = document.querySelector('.links');
    const rect = object.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        object.style.opacity = "1";
        object.style.transform = "scale(1)";
        object.style.transition = "all 2s ease-in-out";
    } else {
        object.style.opacity = "0";
        object.style.transform = "scale(0.5)";
        object.style.transition = "all 0.5s ease-in-out";
    }
});
document.querySelector('.ab').addEventListener('click', function() {
    const targetElement = document.querySelector('.homecontent');
    
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Scrolls the target element into view
});

document.querySelector('.sk').addEventListener('click', function() {
    const targetElement = document.querySelector('.skilslist');
    
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Scrolls the target element into view
});
document.querySelector('.pr').addEventListener('click', function() {
    const targetElement = document.querySelector('.prolist');
    
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Scrolls the target element into view
});





















