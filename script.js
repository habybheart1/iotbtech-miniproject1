document.addEventListener("DOMContentLoaded", function () {
  // ========== MOBILE MENU TOGGLE ==========
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIconOpen = document.getElementById("menu-icon-open");
  const menuIconClose = document.getElementById("menu-icon-close");

  if (menuToggle && mobileMenu && menuIconOpen && menuIconClose) {
    menuToggle.addEventListener("click", function () {
      // Toggle mobile menu visibility
      mobileMenu.classList.toggle("hidden");

      // Toggle between hamburger and X icons
      menuIconOpen.classList.toggle("hidden");
      menuIconClose.classList.toggle("hidden");
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        menuIconOpen.classList.remove("hidden");
        menuIconClose.classList.add("hidden");
      });
    });
  }

  // ========== FELLOWS DATA ==========
  // Full list of fellows extracted from the designs folder structure
  /*
  
  Desktop: , Harry Oluwaseyi, desktop, , Mubarohkah Ashiru,  
Tablet: Abdulmajid Isah
Mobile: AbdulAzeez Mueez, , 
  */
  const allFellows = [
    {
      name: "Abibat Akintobi",
      role: "Project Lead",
      task: "Project coordination and repo management",
    },
    {
      name: "Abdulmajid Isah",
      role: "Desktop View",
      task: "Product launch landing page",
    },
    {
      name: "Adisa Kabiru Olaitan",
      role: "Desktop View",
      task: "Testimonial grid section",
    },
    {
      name: "Olayemi Motin",
      role: "Desktop View",
      task: "Product review",
    },
    {
      name: "Muhammad Sofiyah",
      role: "Desktop View",
      task: "Social proof",
    },
    {
      name: "Sodiq Mubarak",
      role: "Desktop View",
      task: "Classic dance studio landing page.",
    },
    {
      name: "Harry Oluwaseyi Williams",
      role: "Tablet View",
      task: "NFT preview card component.",
    },
    {
      name: "Henny Abdulazeez Muiz",
      role: "Mobile View",
      task: "Testimonial grid section.",
    },
    {
      name: "Mahmud Monsurat",
      role: "Mobile View",
      task: "NFT preview card component.",
    },
    {
      name: "Popoola Mubarak",
      role: "Desktop View",
      task: "Fylo data storage component",
    },
    {
      name: "Ibrahim Ibrahim",
      role: "Desktop & Mobile View",
      task: "landing page and Repo coordination.",
    },
  ];

  const fellowsGrid = document.getElementById("fellows-grid");
  const viewAllBtn = document.getElementById("view-all-fellows-btn");

  const INITIAL_VISIBLE_FELLOWS = 4;
  let showingAll = false;

  // Function to create a fellow card HTML
  function createFellowCard(fellow, isHidden = false) {
    const card = document.createElement("div");
    card.className = `bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition ${isHidden ? "hidden-fellow hidden" : ""}`;

    // Random gradient for avatar placeholder
    const gradients = [
      "from-emerald-400 to-emerald-600",
      "from-green-400 to-green-600",
      "from-lime-400 to-lime-600",
      "from-green-600 to-emerald-800",
      "from-amber-400 to-amber-600",
      "from-yellow-400 to-amber-500",
      "from-yellow-500 to-yellow-700",
      "from-amber-600 to-orange-800",
      "from-yellow-600 to-stone-700",
      "from-amber-700 to-stone-800",
    ];
    const randomGradient =
      gradients[Math.floor(Math.random() * gradients.length)];

    // Get initials for avatar
    const initials = fellow.name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);

    card.innerHTML = `
      <div class="w-20 h-20 bg-gradient-to-br ${randomGradient} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5 shadow-md">
        ${initials}
      </div>
      <h3 class="text-xl font-semibold text-slate-900 mb-1">${fellow.name}</h3>
      <p class="text-blue-900 font-medium mb-3">${fellow.role}</p>
      <p class="text-gray-500 italic">Task Assigned: <br />"${fellow.task}"</p>
    `;

    return card;
  }

  if (fellowsGrid) {
    fellowsGrid.innerHTML = "";

    // Add all fellows to the grid
    allFellows.forEach((fellow, index) => {
      const isHidden = index >= INITIAL_VISIBLE_FELLOWS;
      const card = createFellowCard(fellow, isHidden);
      fellowsGrid.appendChild(card);
    });

    // If there are 4 or fewer fellows, hide the "View All" button
    if (allFellows.length <= INITIAL_VISIBLE_FELLOWS && viewAllBtn) {
      viewAllBtn.style.display = "none";
    }
  }

  // ========== VIEW ALL FELLOWS BUTTON ==========
  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", function () {
      const hiddenFellows = fellowsGrid.querySelectorAll(".hidden-fellow");

      if (!showingAll) {
        // Show all hidden fellows
        hiddenFellows.forEach((fellow) => {
          fellow.classList.remove("hidden");
        });
        viewAllBtn.textContent = "Show Less";
        showingAll = true;
      } else {
        // Hide fellows beyond the initial visible count
        hiddenFellows.forEach((fellow) => {
          fellow.classList.add("hidden");
        });
        viewAllBtn.textContent = "View All Fellows";
        showingAll = false;

        // Smooth scroll back to the fellows section top
        const fellowsSection = document
          .getElementById("fellows-grid")
          .closest("section");
        if (fellowsSection) {
          fellowsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  }

  // console.log("Web Dev Fellows - Script loaded successfully!");
  // console.log(`Total fellows loaded: ${allFellows.length}`);
});
