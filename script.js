const burgerBar = document.querySelector(".burger-bar");
const listNameAndroid = document.querySelector(".list-name-android");
const navBar = document.querySelector("nav");
const toolsNavbar = document.querySelectorAll(".tool-navbar");

let openBurgerBar = false;

burgerBar.addEventListener("click", () => {
  openBurgerBar = !openBurgerBar;
  if (openBurgerBar) {
    listNameAndroid.style.display = "block";
    navBar.style.backgroundColor = "#f6f6f6";
    navBar.style.color = "rgb(40, 40, 40)";
  } else {
    listNameAndroid.style.display = "none";
    navBar.style.backgroundColor = "transparent";
    navBar.style.color = "white";
  }
});

document.addEventListener("scroll", () => {
  if (window.scrollY >= 667) {
    navBar.style.backgroundColor = "#f6f6f6";
    navBar.style.color = "rgb(40, 40, 40)";
    navBar.style.transition = "all 0.5s ease-in-out";
    navBar.style.padding = "9px 25px 4px";
    listNameAndroid.style.top = "54px";
  } else {
    navBar.style.backgroundColor = "transparent";
    navBar.style.color = "white";
    navBar.style.padding = "20px 25px 20px";
    listNameAndroid.style.top = "80px";
  }
});

const contentClick = (value) => {
  const component = document.getElementById(`content${value}`);
  component.scrollIntoView({
    behavior: "smooth",
  });
  listNameAndroid.style.display = "none";
};

const scroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

scroll().then(
  window.scrollTo({
    top: 1,
    behavior: "smooth",
  })
);
