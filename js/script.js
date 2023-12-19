{
  const welcome = () => {
    console.log("Witam serdecznie!");
  };
  
  let onChangeHeaderClick = () => {

    const title = document.querySelector(".header__title");
    const themeName = document.querySelector(".js-header__button");

    if (title.innerText === "Witam serdecznie na mojej stronie!") {
      themeName.innerText = "powitanie";
      title.innerText = "Marysia Karowska-Antkowiak";
    } else {
      themeName.innerText = "nazwisko";
      title.innerText = "Witam serdecznie na mojej stronie!";
    }
  };
  
  const init = () => {
  const button = document.querySelector(".header__button");

  
  button.addEventListener("click", onChangeHeaderClick);

  welcome();
  };

  init();
}