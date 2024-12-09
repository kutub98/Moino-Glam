document.addEventListener("DOMContentLoaded", () => {
  // Dynamically load Navbar
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;

      // Toggle Buttons for Categories and Menu
      const categoriesButton = document.getElementById("categories");
      const menuButton = document.getElementById("menu");
      const categoriesMenu = document.getElementById("categoriesMenu");
      const menusItem = document.getElementById("menusItem");

      // Toggle between Categories and Menu
      if (categoriesButton && menuButton && categoriesMenu && menusItem) {
        categoriesButton.addEventListener("click", () => {
          // Show Categories and hide Menu
          categoriesMenu.classList.remove("d-none");
          categoriesMenu.classList.add("d-block");
          menusItem.classList.remove("d-block");
          menusItem.classList.add("d-none");

          // Set active tab style
          categoriesButton.classList.add("active-tab");
          menuButton.classList.remove("active-tab");
        });

        menuButton.addEventListener("click", () => {
          // Show Menu and hide Categories
          menusItem.classList.remove("d-none");
          menusItem.classList.add("d-block");
          categoriesMenu.classList.remove("d-block");
          categoriesMenu.classList.add("d-none");

          // Set active tab style
          menuButton.classList.add("active-tab");
          categoriesButton.classList.remove("active-tab");
        });
      } else {
        console.error("Menu or Categories elements not found.");
      }

      // Active color for menu items
      const menuItems = document.querySelectorAll(".menuItems-large li");
      menuItems.forEach((item) => {
        item.addEventListener("click", () => {
          menuItems.forEach((otherItem) =>
            otherItem.classList.remove("clicked")
          );
          item.classList.add("clicked");
        });
      });
    })
    .catch((error) => {
      console.error("Error loading navbar.html:", error);
    });

  // Dynamically load Footer
  fetch("footer.html")
    .then((response) => response.text())

    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading footer.html:", error);
    });

  // Dynamically load Best Selling
  fetch("bestSelling.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("best-selling").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading bestSelling.html:", error);
    });

  // Dynamically load Products
  fetch("products.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("products-container").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading products.html:", error);
    });

  // Initialize Slick Carousel for .carousel elements
  $(document).ready(function () {
    $(".carousel").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  // Initialize Slick Carousel for .combo elements
  $(document).ready(function () {
    $(".combo").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  // Get references to elements
  const searchContainer = document.getElementById("searchContainer");
  const searchButton = document.getElementById("search");

  // Function to show the search container
  const showSearchContainer = () => {
    searchContainer.classList.remove("d-none");
  };

  // Function to hide the search container
  const hideSearchContainer = () => {
    searchContainer.classList.add("d-none");
  };

  // Toggle visibility when the Search button is clicked
  searchButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the event from propagating to the document click handler
    if (searchContainer.classList.contains("d-none")) {
      showSearchContainer();
    } else {
      hideSearchContainer();
    }
  });

  // Hide the search container when clicking outside it
  document.addEventListener("click", (event) => {
    if (
      !searchContainer.contains(event.target) && // Click is not inside search container
      event.target !== searchButton // Click is not on the Search button
    ) {
      hideSearchContainer();
    }
  });
});
