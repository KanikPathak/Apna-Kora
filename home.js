// heading reveal
const i3 = document.getElementById("i3");
        const text = "Inquire Interact Inspire";
        let temp = 0;

        function animateText() {
            i3.innerHTML += text.charAt(temp);
            temp++;
            setTimeout(animateText, 200);
        }

        animateText();



// cursor effect:
const shadow = document.querySelector(".cursor-shadow");
window.addEventListener('mousemove', function(event){

    const horizontal = gsap.utils.mapRange(0,window.outerWidth, 100, window.outerWidth-100, event.clientX);
    
    const vertical = gsap.utils.mapRange(0,window.outerHeight, 100, window.outerHeight-100, event.clientY);

    gsap.to(".cursor-shadow", {
        left: horizontal,
        top:vertical,
        
    })
})