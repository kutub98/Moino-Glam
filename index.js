document.addEventListener("DOMContentLoaded", () => {
  // Dynamically load Navbar
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;

      // Add event listener to the Open Menu button after Navbar is loaded
      const openMenu = document.getElementById("openMenu");
      const categoriesContainer = document.getElementById(
        "categoriesContainer"
      );
      const categoriesAndMenuContainer = document.getElementById(
        "categoriesAndMenuContainer"
      );
      const closeButton = document.getElementById("closeButton");

      // Toggle Buttons for Categories and Menu
      const categoriesButton = document.getElementById("categories");
      const menuButton = document.getElementById("menu");
      const categoriesMenu = document.getElementById("categoriesMenu");
      const menusItem = document.getElementById("menusItem");

      // Function to open the menu with animations
      const openMenuFunction = () => {
        categoriesContainer.classList.remove("d-none");
        categoriesContainer.classList.add("show");

        categoriesAndMenuContainer.classList.remove("d-none");
        categoriesAndMenuContainer.classList.add("show");
      };

      // Function to close the menu with animations
      const closeMenuFunction = () => {
        categoriesContainer.classList.remove("show");
        categoriesAndMenuContainer.classList.remove("show");

        // Wait for the animation to complete before hiding
        setTimeout(() => {
          categoriesContainer.classList.add("d-none");
          categoriesAndMenuContainer.classList.add("d-none");
        }, 300); // Duration should match CSS transition duration
      };

      if (openMenu && categoriesContainer) {
        openMenu.addEventListener("click", () => {
          openMenuFunction();
        });
      } else {
        console.error("Open Menu button or Categories container not found.");
      }

      if (closeButton) {
        closeButton.addEventListener("click", () => {
          closeMenuFunction();
        });
      }

      // Close menu when clicking outside the menu content
      categoriesContainer.addEventListener("click", (e) => {
        if (e.target === categoriesContainer) {
          closeMenuFunction();
        }
      });

      // Toggle between Categories and Menu
      if (categoriesButton && menuButton && categoriesMenu && menusItem) {
        categoriesButton.addEventListener("click", () => {
          menusItem.classList.add("d-none");
          categoriesMenu.classList.remove("d-none");
          categoriesButton.classList.add("active-tab");
          menuButton.classList.remove("active-tab");
        });

        menuButton.addEventListener("click", () => {
          categoriesMenu.classList.add("d-none");
          menusItem.classList.remove("d-none");
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

      // openCart start
      const cart = document.getElementById("cart");
      const openCart = document.getElementById("openCart");
      const closeCart = document.getElementById("closeCart");

      const openCartFunction = () => {
        openCart.classList.remove("d-none");
        // Force reflow to allow transition
        void openCart.offsetWidth;
        openCart.classList.add("show");
      };

      // Function to close the cart modal with animation
      const closeCartFunction = () => {
        openCart.classList.remove("show");
        setTimeout(() => {
          openCart.classList.add("d-none");
        }, 300); // Match the CSS transition duration
      };

      if (cart && openCart && closeCart) {
        cart.addEventListener("click", () => {
          openCartFunction();
        });

        closeCart.addEventListener("click", () => {
          closeCartFunction();
        });

        openCart.addEventListener("click", (e) => {
          if (e.target === openCart) {
            closeCartFunction();
          }
        });
      } else {
        console.error("Cart elements not found.");
      }
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
});
