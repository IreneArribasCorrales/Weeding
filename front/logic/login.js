document.addEventListener(
  "DOMContentLoaded",
  function () {
    const ENDPOINT_PATH = "http://localhost:3000/usuario/";

    const form = document.querySelector("form");
    console.log(form);

    const login = form.addEventListener("submit", (event) => {
      event.preventDefault();

      const mail = document.querySelector("#mail").value;
      const password = document.querySelector("#password").value;

      const usuario = { mail: mail, password: password };
      createUser(usuario);
    });

    const createUser = (usuario) => {
      fetch("http://localhost:3000/login", {
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
