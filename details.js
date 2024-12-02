document.addEventListener("DOMContentLoaded", () => {
  const thumbnailsWrapper = document.getElementById("thumbnailsWrapper");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const selectedTitle = document.getElementById("selectedTitle");
  const selectedImage = document.getElementById("selectedImage");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  const itemsPerView = 3;
  let currentIndex = 0;

  // Update the selected item
  function updateSelected(thumbnail) {
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    thumbnail.classList.add("active");
    selectedTitle.textContent = thumbnail.dataset.itemTitle;
    selectedImage.src = thumbnail.src;
    selectedImage.alt = thumbnail.alt;
  }

  // Navigation buttons
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      thumbnailsWrapper.style.transform = `translateX(-${currentIndex * 80}px)`;
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < thumbnails.length - itemsPerView) {
      currentIndex++;
      thumbnailsWrapper.style.transform = `translateX(-${currentIndex * 80}px)`;
    }
  });

  // Add click event to each thumbnail
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      updateSelected(thumbnail);
    });
    // Default select the first thumbnail
    if (index === 0) updateSelected(thumbnail);
  });
});
