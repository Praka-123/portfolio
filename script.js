// Dark Mode
document.getElementById("darkToggle").onclick = () => {
    document.body.classList.toggle("bg-dark");
    document.body.classList.add("white");
};

// Typing Effect
const text = ["Frontend Developer", "CSE Student", "Future Full Stack Dev"];
let i = 0,
    j = 0,
    current = "",
    isDeleting = false;

function type() {
    current = text[i];

    if (!isDeleting) {
        document.getElementById("typing").textContent = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById("typing").textContent = current.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Scroll Reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach((el) => {
        let top = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Scroll to Projects
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name");
        e.preventDefault();
    }
});