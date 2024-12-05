// Dynamically load Navbar
fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;

    // Add event listener to the Open Menu button after Navbar is loaded
    const openMenu = document.getElementById("openMenu");
    const categoriesContainer = document.getElementById("categoriesContainer");
    const categoriesAndMenuContainer = document.getElementById(
      "categoriesAndMenuContainer"
    );

    if (openMenu && categoriesContainer) {
      openMenu.addEventListener("click", () => {
        // Show the categoriesContainer
        categoriesContainer.classList.remove("d-none"); // Show container
        categoriesContainer.classList.add(
          "position-absolute",
          "fullscreen-overlay",
          "bg-black",
          "position-fixed",
          "h-100",
          "vh-100",
          "d-flex",
          "z-3",
          "bg-opacity-75",
          "top-0",
          "start-0"
        );

        categoriesAndMenuContainer.classList.add(
          "position-absolute",
          "w-75",
          "bg-white",
          "fullscreen-overlay",
          "text-black",
          "overflow-scroll",
          "h-100",
          "vh-100",
          "d-flex",
          "z-3",
          "top-0",
          "start-0"
        );

        // Add close button functionality (optional)
        const closeButton = document.getElementById("closeButton");
        if (closeButton) {
          closeButton.addEventListener("click", () => {
            categoriesContainer.classList.add("d-none"); // Hide container
          });
        }
      });
    } else {
      console.error("Open Menu button or Categories container not found.");
    }

    // menuItems Active Color

    const menuItems = document.querySelectorAll(".menuItems-large li");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        menuItems.forEach((otherItem) => otherItem.classList.remove("clicked"));
        item.classList.add("clicked");
      });
    });

    // openCart
    const cart = document.getElementById("cart");
    const openCart = document.getElementById("openCart");
    const closeCart = document.getElementById("closeCart");

    cart.addEventListener("click", () => {
      openCart.classList.remove("d-none");
    });

    closeCart.addEventListener("click", () => {
      openCart.classList.add("d-none");
    });

    openCart.addEventListener("click", (e) => {
      if (e.target === openCart) {
        openCart.classList.add("d-none");
      }
    });
  });

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  });
// Dynamically load Categories
fetch("Categories.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("categoriesAndMenuContainer").innerHTML = data;

    // Toggle between Categories and Menu
    const menuButton = document.getElementById("menu");
    const categoriesButton = document.getElementById("categories");
    const menusItem = document.getElementById("menusItem");
    const categoriesMenu = document.getElementById("categoriesMenu");

    if (menuButton && categoriesButton && menusItem && categoriesMenu) {
      // Show Menu items
      menuButton.addEventListener("click", () => {
        menusItem.classList.remove("d-none");
        menusItem.classList.add("d-block");
        categoriesMenu.classList.add("d-none");
        menuButton.classList.add("active-tab");
        categoriesButton.classList.remove("active-tab");
      });

      // Show Categories
      categoriesButton.addEventListener("click", () => {
        categoriesMenu.classList.remove("d-none");
        categoriesMenu.classList.add("d-block");
        menusItem.classList.add("d-none");
        menuButton.classList.remove("active-tab");
        categoriesButton.classList.add("active-tab");
      });
    } else {
      console.error("Menu or Categories elements not found.");
    }

    const menuItems = document.querySelectorAll(".categories-items");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        menuItems.forEach((otherItem) => otherItem.classList.remove("clicked"));
        item.classList.add("clicked");
      });
    });
  });

fetch("bestSelling.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("best-selling").innerHTML = data;
  });
// Dynamically load Footer

fetch("products.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("products-container").innerHTML = data;
  });

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
