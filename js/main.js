(function ($) {
  "use strict";

  // 1. Full Height Adjustment
  const setFullHeight = () => {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(() => {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  setFullHeight();

  // 2. Loader Removal
  const removeLoader = () => {
    setTimeout(() => {
      $("#ftco-loader").length && $("#ftco-loader").removeClass("show");
    }, 1);
  };
  removeLoader();

  // 3. Stellar Parallax
  $.stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  // 4. Owl Carousel Initialization
  const initCarousel = () => {
    $(".carousel-testimony").owlCarousel({
      center: false,
      loop: true,
      margin: 30,
      items: 1,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 4 },
      },
    });
  };
  initCarousel();

  // 5. Navbar Dropdown Hover Effect
  $("nav .dropdown").hover(
    function () {
      $(this).addClass("show").find("> a").attr("aria-expanded", true);
      $(this).find(".dropdown-menu").addClass("show");
    },
    function () {
      $(this).removeClass("show").find("> a").attr("aria-expanded", false);
      $(this).find(".dropdown-menu").removeClass("show");
    }
  );

  // 6. Scroll-triggered Navbar Effects
  const handleScrollEffects = () => {
    const navbar = $(".ftco_navbar"),
      scrollWrap = $(".js-scroll-wrap");

    $(window).scroll(function () {
      const st = $(this).scrollTop();
      if (st > 150) {
        navbar.addClass("scrolled");
      } else {
        navbar.removeClass("scrolled sleep");
      }
      if (st > 350) {
        navbar.addClass("awake");
        scrollWrap.length && scrollWrap.addClass("sleep");
      } else {
        navbar.removeClass("awake").addClass("sleep");
        scrollWrap.length && scrollWrap.removeClass("sleep");
      }
    });
  };
  handleScrollEffects();

  // 7. Device Detection
  const isMobile = {
    Android: () => navigator.userAgent.match(/Android/i),
    BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
    iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
    Opera: () => navigator.userAgent.match(/Opera Mini/i),
    Windows: () => navigator.userAgent.match(/IEMobile/i),
    any: function () {
      return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows();
    },
  };

  // 8. Counter Animation (Triggered by Waypoints)
  const initCounter = () => {
    const animateNumberStep = $.animateNumber.numberStepFactories.separator(",");

    $("#section-counter, .hero-wrap, .ftco-counter").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
          $(".number").each(function () {
            $(this).animateNumber({ number: $(this).data("number"), numberStep: animateNumberStep }, 7000);
          });
        }
      },
      { offset: "95%" }
    );
  };
  initCounter();

  // 9. Content Animation (Triggered by Waypoints)
  const initContentAnimation = () => {
    $(".ftco-animate").waypoint(
      function (direction) {
        if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {
          $(this.element).addClass("item-animate");
          setTimeout(() => {
            $(".item-animate").each(function (k) {
              const el = $(this);
              const effect = el.data("animate-effect");
              el.addClass(`${effect || "fadeInUp"} ftco-animated`).removeClass("item-animate");
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  initContentAnimation();

  // 10. Magnific Popup (Image, YouTube, Vimeo, Google Maps)
  const initMagnificPopup = () => {
    $(".image-popup").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      fixedContentPos: true,
      mainClass: "mfp-no-margins mfp-with-zoom",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
      zoom: { enabled: true, duration: 300 },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  };
  initMagnificPopup();

  // 11. Google Maps Initialization
  const initMap = () => {
    const mapDiv = document.getElementById("map");
    if (mapDiv) {
      const map = new google.maps.Map(mapDiv, {
        center: { lat: 24.7136, lng: 46.6753 },
        zoom: 15,
      });

      // Adding an indicator
      const marker = new google.maps.Marker({
        position: { lat: 24.7136, lng: 46.6753 },
        map: map,
        title: "Infinity University",
      });
    } else {
      console.error("Map div not found!");
    }
  };

  // 12. Modal for Login Form
  const handleModal = () => {
    const loginModal = document.getElementById("loginModal");
    const openLoginModalBtn = document.getElementById("openLoginModal");
    const closeModalBtn = document.querySelector(".close");

    openLoginModalBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      loginModal.style.display = "flex";
    });

    closeModalBtn?.addEventListener("click", () => {
      loginModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === loginModal) {
        loginModal.style.display = "none";
      }
    });
  };
  handleModal();

  // 13. Toggle Between Registration and Login Form
  const toggleForm = () => {
    const toggleLogin = document.getElementById("toggleLogin");
    const toggleRegister = document.getElementById("toggleRegister");
    const registerFields = document.getElementById("registerFields");
    const loginFields = document.getElementById("loginFields");
    const formTitle = document.getElementById("formTitle");
    const submitButton = document.getElementById("submitButton");

    toggleLogin?.addEventListener("click", (e) => {
      e.preventDefault();
      registerFields.style.display = "none";
      loginFields.style.display = "block";
      formTitle.textContent = "Sign In";
      submitButton.textContent = "Login";
      toggleRegister.style.display = "block";
      toggleLogin.style.display = "none";
    });

    toggleRegister?.addEventListener("click", (e) => {
      e.preventDefault();
      registerFields.style.display = "block";
      loginFields.style.display = "none";
      formTitle.textContent = "Register Now";
      submitButton.textContent = "Register";
      toggleRegister.style.display = "none";
      toggleLogin.style.display = "block";
    });
  };
  toggleForm();

  // 14. Form Validation
  const validateForm = () => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) return alert("Please enter your full name."), false;
    if (!email) return alert("Please enter your email address."), false;
    if (!emailRegex.test(email)) return alert("Please enter a valid email address."), false;
    if (!password) return alert("Please enter a password."), false;
    if (password.length < 6) return alert("Password must be at least 6 characters long."), false;
    if (!confirmPassword) return alert("Please confirm your password."), false;
    if (password !== confirmPassword) return alert("Passwords do not match."), false;

    return true;
  };
  document.getElementById("userForm").onsubmit = validateForm;

  // 15. Search Courses by Name
  document.getElementById("search")?.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll("#course-list .course").forEach((course) => {
      course.textContent.toLowerCase().includes(query)
        ? course.classList.remove("hidden")
        : course.classList.add("hidden");
    });
  });

  // 16. Notifications
  const showNotification = () => {
    const notification = document.getElementById("notification");
    setTimeout(() => notification.classList.add("show"), 1000);
    setTimeout(() => notification.classList.remove("show"), 5000);
  };
  window.addEventListener("load", showNotification);
})(jQuery);

document.querySelectorAll('a[href^="#certVerifiForm"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
