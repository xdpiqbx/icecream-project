(() => {
    /* Burger script */
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelectorAll("[data-menu]");
 
    menuBtnRef.addEventListener("click", () => {

      for (let item of mobileMenuRef){
        item.classList.toggle("is-close");
      }
      const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || "false";
      menuBtnRef.classList.toggle("is-close");
      menuBtnRef.setAttribute("aria-expanded", expanded);
    });
  })();