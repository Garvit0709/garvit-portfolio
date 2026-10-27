
document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio JavaScript loaded successfully!");

    // =====================================
    // 1. TECHNICAL SKILLS FILTER
    // =====================================

    const skillButtons = document.querySelectorAll(".skill-tab");
    const skillCards = document.querySelectorAll(".skill-chip");

    skillButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedCategory = button.dataset.category;

            skillButtons.forEach(function (btn) {
                btn.classList.remove("active");
                btn.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            skillCards.forEach(function (card) {

                const cardCategory = card.dataset.category;

                if (
                    selectedCategory === "all" ||
                    selectedCategory === cardCategory
                ) {
                    card.classList.remove("is-hidden");
                } else {
                    card.classList.add("is-hidden");
                }

            });

        });

    });


    // =====================================
    // 2. PROFESSIONAL EXPERIENCE SWITCHER
    // =====================================

    const experienceData = {

        synvera: {
            date: "SEP 2026 - PRESENT",
            role: "AI-Assisted Transcription & Data Quality Freelancer",
            company: "Synvera Services Pvt. Ltd.",
            description:
                "Produce structured multilingual text data " +
                "using AI-assisted workflows. Perform quality " +
                "assurance, correct AI-generated errors, and " +
                "maintain accuracy and documentation standards."
        },

        cadence: {
            date: "JUN 2026 - JUL 2026",
            role: "Software Intern",
            company: "Cadence Design Systems",
            description:
                "Contributed to software development and R&D " +
                "activities supporting electronic design automation " +
                "solutions. Analyzed and debugged software issues " +
                "and supported application reliability workflows."
        },

        optasia: {
            date: "JUN 2025 - JUL 2025",
            role: "Design and Proposal Engineer",
            company: "Optasia Foundation",
            description:
                "Created technical design proposals, researched " +
                "implementation approaches, and collaborated " +
                "on project specifications to translate requirements " +
                "into practical solutions."
        }

    };

    const experienceButtons =
        document.querySelectorAll(".experience-tab");

    const experienceDetails =
        document.getElementById("experience-detail");

    experienceButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedJob = button.dataset.job;
            const job = experienceData[selectedJob];

            if (!job || !experienceDetails) {
                return;
            }

            experienceButtons.forEach(function (btn) {
                btn.classList.remove("active");
                btn.setAttribute("aria-pressed", "false");
            });

            button.classList.add("active");
            button.setAttribute("aria-pressed", "true");

            experienceDetails.innerHTML = `
                <p class="experience-date">${job.date}</p>
                <h3>${job.role}</h3>
                <p class="company">${job.company}</p>
                <p>${job.description}</p>
            `;

        });

    });


    // =====================================
    // 3. SCROLL REVEAL ANIMATION
    // =====================================

    const revealElements = document.querySelectorAll(".reveal");

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    } else {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.08
        });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    }

});

// ===== MOBILE NAVIGATION =====

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (!menuButton || !navigation) return;

    menuButton.addEventListener("click", function () {

        const isOpen =
            navigation.classList.toggle("menu-open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });

    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {

            navigation.classList.remove("menu-open");

            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {

            navigation.classList.remove("menu-open");

            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }
    });

});
