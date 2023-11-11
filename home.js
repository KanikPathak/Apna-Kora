
        const i3 = document.getElementById("i3");
        const text = "Inquire Interact Inspire";
        let temp = 0;

        function animateText() {
            // if (temp > text.length) {
            //     i3.innerHTML="";
            //     temp=0;
            // }
            i3.innerHTML += text.charAt(temp);
            temp++;
            setTimeout(animateText, 200);
        }

        animateText();
    