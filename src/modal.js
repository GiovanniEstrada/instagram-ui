const input = document.getElementById("find");
const modal = document.querySelector(".search-modal");
const triangle = document.querySelector(".triangle");
const box = document.querySelector(".box");
const result = document.getElementsByClassName("result");
const btn = document.getElementById("prueba");
const app = document.querySelector(".app");

app.addEventListener("click", () => {
  triangle.classList.remove("active");
  box.classList.remove("active");
  app.classList.remove("active");
  modal.classList.remove("active");

  for (i = 0; i < result.length; i++) {
    result[i].classList.remove("active");
  }
});

input.addEventListener("focus", () => {
  triangle.classList.add("active");
  box.classList.add("active");
  app.classList.add("active");
  modal.classList.add("active");

  for (i = 0; i < result.length; i++) {
    result[i].classList.add("active");
  }
});
