const getUser = document.querySelector(".get-user");
const getID = document.querySelector(".get-id");

getUser.addEventListener("click", () => {
  console.log(getID.value);
  data.forEach((db) => {
    if (db.id == getID.value) {
      alert("Tu usuario es: " + db.user + " y contraseña es: " + db.pass);
      window.location.replace("../HTML/login.html");
    }
  });
});
