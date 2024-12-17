document.querySelectorAll(".swap-content").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(el.getAttribute("data-visible")).style.display =
      "none";
    document.querySelector(el.getAttribute("data-hidden")).style.display =
      "block";

    el.style.display = "none";
  });
});
