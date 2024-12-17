document.querySelectorAll(".swap-content").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(el.getAttribute("data-visible")).style.display =
      "none";
    document
      .querySelector(el.getAttribute("data-hidden"))
      .classList.remove("visually-hidden");

    el.style.display = "none";
  });
});
