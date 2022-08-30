// console.log("75 из 75\n",
//   "Вёрстка соответствует макету. Ширина экрана 390px +48\n",
//   "блок <header> +6\n",
//   "секция preview +9\n",
//   "секция steps +9\n",
//   "секция destinations +9\n",
//   "секция stories +9\n",
//   "блок <footer> +6\n",
//   "Ни на одном из разрешений до 320px включительно не появляетгоризонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n",
//   "нет полосы прокрутки при ширине страницы от 1440рх до 390px +7\n",
//   "нет полосы прокрутки при ширине страницы от 390px до 320рх +8\n",
//   "На ширине экрана 390рх и меньше реализовано адаптивное меню +22\n",
//   "при ширине страницы 390рх панель навигации скрывается, появляется бургер-иконка +2\n",
//   "при нажатии на бургер-иконку плавно появляется адаптивное меню +4\n",
//   "адаптивное меню соответствует макету +4\n",
//   "при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4\n",
//   "ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4 (все кроме Account, она пока что просто закрывает меню)\n",
//   "при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4\n",
// );

//Burger menu
const navigation = document.querySelector('.navigation'),
  navigationItem = document.querySelectorAll('.navigation__item'),
  hamburger = document.querySelector('.hamburger'),
  span = document.querySelectorAll('.span'),
  logo = document.querySelector('.logo'),
  body = document.querySelector('body');

// open-close menu function      
const toggleMenu = function () {
  body.classList.toggle('overflow-hidden');
  navigation.classList.toggle('navigation_active');
  logo.classList.toggle('logo_active');
  hamburger.classList.toggle('hamburger_active');
  // span.classList.toggle('span_active');
};

// click to hamburger icon
hamburger.addEventListener('click', () => {
  toggleMenu();
});

// click to menu items
navigationItem.forEach(item => {
  item.addEventListener('click', () => {
    toggleMenu();
  });
});

// close menu if pressed Esc key
document.addEventListener('keydown', function (e) {
  if (e.keyCode == 27 && navigation.classList.contains('navigation_active')) { // код клавиши Escape, но можно использовать e.key
    //navigation.style.display = 'none';
    toggleMenu();
  }
});

// close menu if click was out of menu & hamburger
document.addEventListener('click', (e) => {
  const withinBoundariesNav = e.composedPath().includes(navigation),
    withinBoundariesHamburger = e.composedPath().includes(hamburger);

  if (!withinBoundariesNav && !withinBoundariesHamburger && navigation.classList.contains('navigation_active')) {
    toggleMenu();
  }
});

//Slider
const slider = document.querySelector(".slideshow-container");
const slide = document.querySelectorAll(".mySlides");
const slidePagination = document.querySelectorAll(".dot");
const arrowLeft = document.querySelector(".prev");
const arrowRight = document.querySelector(".next");

slide[0].addEventListener("click", function () {
    slider.classList.add("left");
    slider.classList.remove("center", "right");
    slide[1].style.cursor = "pointer";
    slide[0].style.cursor = "default";
    slidePagination[0].style.opacity = "1";
    slidePagination[1].style.opacity = ".5";
    slidePagination[2].style.opacity = ".5";
  }
);

slide[1].addEventListener("click", function () {
    slider.classList.add("center");
    slider.classList.remove("left", "right");
    slide[0].style.cursor = "pointer";
    slide[1].style.cursor = "";
    slide[2].style.cursor = "pointer";
    slidePagination[0].style.opacity = ".5";
    slidePagination[1].style.opacity = "1";
    slidePagination[2].style.opacity = ".5";
  }
);

slide[2].addEventListener("click", function () {
    slider.classList.add("right");
    slider.classList.remove("left", "center");
    slide[1].style.cursor = "pointer";
    slide[2].style.cursor = "default";
    slidePagination[0].style.opacity = ".5";
    slidePagination[1].style.opacity = ".5";
    slidePagination[2].style.opacity = "1";
  }
);

arrowLeft.addEventListener("click", function () {
    if (slider.classList.contains("right")) {
      slider.classList.add("center");
      slider.classList.remove("right");
      slidePagination[0].style.opacity = ".5";
      slidePagination[1].style.opacity = "1";
      slidePagination[2].style.opacity = ".5";
      arrowRight.style.opacity = "1";
    } else {
      slider.classList.add("left");
      slider.classList.remove("center", "right");
      slidePagination[0].style.opacity = "1";
      slidePagination[1].style.opacity = ".5";
      slidePagination[2].style.opacity = ".5";
      arrowLeft.style.opacity = ".5";
    }
  }
);

arrowRight.addEventListener("click", function () {
    if (slider.classList.contains("left")) {
      slider.classList.add("center");
      slider.classList.remove("left");
      slidePagination[0].style.opacity = ".5";
      slidePagination[1].style.opacity = "1";
      slidePagination[2].style.opacity = ".5";
      arrowLeft.style.opacity = "1";      
    } else {
      slider.classList.add("right");
      slider.classList.remove("left", "center");
      slidePagination[0].style.opacity = ".5";
      slidePagination[1].style.opacity = ".5";
      slidePagination[2].style.opacity = "1";
      arrowRight.style.opacity = ".5";
    }
  }
);

// Modal

const popupLinks = document.querySelectorAll('.popup-link');
const register = document.querySelector('.register');
const login = document.querySelector('.login');
const popup = document.getElementById('popup');
const popupRegister = document.getElementById('popup_2');

popupLinks.forEach(item => {
  item.addEventListener("click", function (e) {
    
    popupOpen();
    e.preventDefault();
  });
});

function popupOpen() {
  if (popup) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } 
    popup.classList.add('open');
    popup.addEventListener("click", function(e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive) {
  popupActive.classList.remove('open');
  
}

register.addEventListener("click", function (e) {
  popupRegisterOpen();
  e.preventDefault();
});

login.addEventListener("click", function(e) {
  popupLoginOpen();
  e.preventDefault();
});

const popupTitleFirst = document.querySelector('.popup__title'),
      btnGoogle = document.querySelector('.btn-google'),
      btnFacebook = document.querySelector('.btn-facebook'),
      popupDivider = document.querySelector('.popup__divider'),
      popupLink = document.querySelector('.popup__link'),
      popupTitle = document.querySelector('.popup__title-register'),
      registerTitleFirst = document.querySelector('.popup__register'),
      registerTitle = document.querySelector('.popup__register-register'),
      signIn = document.querySelector('.signin'),
      signUp = document.querySelector('.signup');

function popupRegisterOpen() {
  popupTitleFirst.classList.add('hide');
  btnGoogle.classList.add('hide');
  btnFacebook.classList.add('hide');
  popupDivider.classList.add('hide');
  popupLink.classList.add('hide');
  registerTitleFirst.classList.add('hide');
  signIn.classList.add('hide');
  signUp.classList.add('show');
  registerTitle.classList.add('show');
  popupTitle.classList.add('show');
}

function popupLoginOpen() {
  popupTitleFirst.classList.remove('hide');
  btnGoogle.classList.remove('hide');
  btnFacebook.classList.remove('hide');
  popupDivider.classList.remove('hide');
  popupLink.classList.remove('hide');
  registerTitleFirst.classList.remove('hide');
  signIn.classList.remove('hide');
  signUp.classList.remove('show');
  registerTitle.classList.remove('show');
  popupTitle.classList.remove('show');
}

function dataAlert() {
  let email = document.getElementById('email');
  let password = document.getElementById('password');

  if (!email.value || !password.value) {
    alert('Заполните все поля');
  } else {
    alert(`Email: ${email.value}\nPassword: ${password.value}`);
  } 
}

