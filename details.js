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

// video control
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtubePlayer");
}

function toggleYouTubePlay() {
  const playIcon = document.getElementById("playIcon");

  if (player.getPlayerState() === YT.PlayerState.PLAYING) {
    player.pauseVideo();
    playIcon.className = "bi bi-play-circle-fill"; // Change to play icon
  } else {
    player.playVideo();
    playIcon.className = "bi bi-pause-circle-fill"; // Change to pause icon
  }
}
