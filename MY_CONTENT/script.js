
  // Function to update the active navigation item based on section IDs
  function updateActiveNavItem() {
    var sections = document.querySelectorAll("section");
    var navItems = document.querySelectorAll(".nav-link");
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(function (section, index) {
      var sectionId = section.getAttribute("id");
      var rect = section.getBoundingClientRect();

      if (rect.top <= 50 && rect.bottom >= 50) {
        // This section is in view
        navItems.forEach(function (navItem) {
          navItem.classList.remove("nav-active");
        });
        document.querySelector(`a[href="#${sectionId}"]`).classList.add("nav-active");
      }
    });
  }

  // Add scroll event listener to update active navigation item on scroll
  window.addEventListener("scroll", updateActiveNavItem);

  // Initial call to set the initial active item
  updateActiveNavItem();
  var myVar;

  function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }

  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").style.display = "block";
  }
