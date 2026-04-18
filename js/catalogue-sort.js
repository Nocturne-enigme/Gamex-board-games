const container = document.getElementById("dropdown-container");
const dropdown = document.querySelector(".catalogue-section__sort");
// button.addEventListener("hover", () => {
//   dropdown.classList.toggle("sort-open");
// });

container.addEventListener("mouseover", () => {
  dropdown.classList.add("sort-open");
});

container.addEventListener("mouseleave", () => {
  dropdown.classList.remove("sort-open");
});
