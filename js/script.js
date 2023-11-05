console.log("Witam serdecznie!");

let button = document.querySelector(".header__button");
let title = document.querySelector(".header__title");
let themeName = document.querySelector(".js-header__button");

button.addEventListener("click", () => {
    if (title.innerText === "Witam serdecznie na mojej stronie!") {
      themeName.innerText = "powitanie";
      title.innerText = "Marysia Karowska-Antkowiak";
    } else {
      themeName.innerText = "nazwisko";
      title.innerText = "Witam serdecznie na mojej stronie!";
    }
  });
