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

/* Navigate to Home Page*/
const navigateButton = document.getElementById("backBtn");

navigateButton.addEventListener("click", function () {
  window.location.href = "index.html";
});
