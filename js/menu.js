(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const menuCloseBtnRef = document.querySelector("[data-menu-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
   mobileMenuRef.classList.toggle("is-open-burger-menu");
  });
  menuCloseBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open-burger-menu");
  });
})();