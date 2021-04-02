document.addEventListener(
  "DOMContentLoaded",
  function () {
    const ENDPOINT_PATH = "http://localhost:3000/usuario/";

    const form = document.querySelector("form");
    console.log(form);

    const register = form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.querySelector("#name").value;
      const mail = document.querySelector("#mail").value;
      const password = document.querySelector("#password").value;
      const assistance = document.getElementsByName("assistance")[0].value;
      const usuario = {
        name: name,
        mail: mail,
        password: password,
        assistance: assistance,
      };
      createUser(usuario);
    });

    const createUser = (usuario) => {
      fetch("http://localhost:3000/usuario", {
        method: "POST",
        //mode: "no-cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          Accept: "application/x-www-form-urlencoded",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(usuario),
      })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            window.location.href = "home.html";
          }
        })
        .catch((error) => console.error(error));
    };
  },
  false
);
