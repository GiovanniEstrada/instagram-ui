const home = document.querySelector(".btn-home");
const messenger = document.querySelector(".btn-messenger");
const more = document.querySelector(".btn-more");
const explore = document.querySelector(".btn-explore");
const fav = document.querySelector(".btn-fav");
const profile = document.querySelector(".btn-profile");

home.addEventListener("click", () => {
  window.location.replace("../HTML/home.html");
});
messenger.addEventListener("click", () => {
  window.location.replace("../HTML/messenger.html");
});
more.addEventListener("click", () => {
  window.location.replace("../HTML/more.html");
});
explore.addEventListener("click", () => {
  window.location.replace("../HTML/explore.html");
});
fav.addEventListener("click", () => {
  window.location.replace("../HTML/fav.html");
});
profile.addEventListener("click", () => {
  window.location.replace("../HTML/profile.html");
});
