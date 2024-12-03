document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const selectedImage = document.getElementById("selectedImage");
  const thumbnailContainer = document.getElementById("thumbnailContainer");
  // const arrowLeft = document.querySelector(".arrow-left");
  // const arrowRight = document.querySelector(".arrow-right");

  // Default selected thumbnail
  thumbnails[0].classList.add("active");
  selectedImage.src = thumbnails[0].src;

  // Arrow navigation

  // arrowLeft.addEventListener("click", () => {
  //   thumbnailContainer.scrollBy({ top: -80, behavior: "smooth" });
  //   setTimeout(updateArrowVisibility, 300);
  // });

  // arrowRight.addEventListener("click", () => {
  //   thumbnailContainer.scrollBy({ top: 80, behavior: "smooth" });
  //   setTimeout(updateArrowVisibility, 300);
  // });

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      thumbnails.forEach((thumb) => thumb.classList.remove("active"));
      thumbnail.classList.add("active");
      selectedImage.src = thumbnail.src;
    });
  });
});
