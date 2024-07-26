const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* Scrolling Images */
const images = document.querySelectorAll(".scrollingImage");

images.forEach((image) => {
  image.onload = () => {
    const wrapper = image.parentElement;

    image.addEventListener("mouseenter", () => {
      image.style.transform = `translateY(-${
        image.scrollHeight - wrapper.clientHeight
      }px)`;
    });

    image.addEventListener("mouseleave", () => {
      image.style.transform = "translateY(0)";
    });
  };

  if (image.complete) {
    image.onload();
  }
});

/* Navigate to Projects Page */
const navigateButton = document.getElementById("navigateButton");

navigateButton.addEventListener("click", function () {
  window.location.href = "projects.html";
});

/*  */
const scrollBtn = document.querySelectorAll(".sbtn");
const sectionScrolled = document.getElementById("contact");

scrollBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    sectionScrolled.scrollIntoView({ behavior: "smooth" });
  })
);
