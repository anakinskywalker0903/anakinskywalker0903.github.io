document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel, index) => {
    panel.style.opacity = "0";
    panel.style.transform = "translateY(20px)";

    setTimeout(() => {
      panel.style.transition = "all 400ms ease";
      panel.style.opacity = "1";
      panel.style.transform = "translateY(0)";
    }, index * 150);
  });
});
document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isOpen = details.classList.contains("open");

    if (isOpen) {
      details.style.maxHeight = "0";
      details.style.opacity = "0";
      details.classList.remove("open");
      button.textContent = "Expand";
    } else {
      details.style.maxHeight = details.scrollHeight + "px";
      details.style.opacity = "1";
      details.classList.add("open");
      button.textContent = "Collapse";
    }
  });
});