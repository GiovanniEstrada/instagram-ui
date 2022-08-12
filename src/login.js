const titlePass = document.getElementById("title-pass");
const titleUser = document.getElementById("title-user");
const login = document.querySelector(".btn-submit");
const register = document.querySelector(".btn-redirect");
const forgot = document.querySelector(".forgot");

login.addEventListener("click", () => {
  const user = document.querySelector(".user").value;
  const password = document.querySelector(".password").value;

  console.log(data.length);

  data.forEach((db) => {
    if (user == db.user && password == db.pass) {
      console.log("match");
      window.location.replace("../HTML/home.html");
    } else {
    }
  });
});

register.addEventListener("click", () =>
  window.location.replace("../HTML/register.html")
);

forgot.addEventListener("click", () =>
  window.location.replace("../HTML/forgot.html")
);
