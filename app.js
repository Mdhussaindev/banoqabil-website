const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = parseInt(counter.innerText);

        const current = +counter.innerText.replace("+","");

        const increment = target / 80;

        if(current < target){

            counter.innerText = `${Math.ceil(current + increment)}+`;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});