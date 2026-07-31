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

const impactCounters = document.querySelectorAll(".impact-card h3");

const impactObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const original = counter.textContent.trim();

        const value = parseInt(original.replace(/[^0-9]/g, ""));
        const prefix = original.match(/^[^0-9]*/)[0];
        const suffix = original.replace(/^[^A-Za-z0-9]*/, "").replace(/[0-9,]/g, "");

        let current = 0;
        const increment = Math.max(1, Math.ceil(value / 80));

        function update() {

            current += increment;

            if (current < value) {

                counter.textContent = prefix + current.toLocaleString() + suffix;

                requestAnimationFrame(update);

            } else {

                counter.textContent = original;

            }

        }

        update();

        impactObserver.unobserve(counter);

    });

});

impactCounters.forEach(counter => impactObserver.observe(counter));