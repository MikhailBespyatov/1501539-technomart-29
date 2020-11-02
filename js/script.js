//Модальное окно логина
const popup = document.querySelector('.modal-login');
let openPopupButton = document.querySelector('.button-contacts');
const closePopupButton = popup.querySelector('.modal-close');
const loginForm = popup.querySelector('.modal-login-form');
const loginName = popup.querySelector('[name=login-name]');
const loginEmail = popup.querySelector('[name=login-email]');

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    if (storage) {
        loginName.value = storage;
        loginEmail.focus();
    } else {
        loginName.focus();
    }
});

closePopupButton.addEventListener('click', function () {
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
});
window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains('modal-show')) {
            evt.preventDefault();
            popup.classList.remove('modal-show');
            popup.classList.remove('modal-error')
        }
        
    };
});
loginForm.addEventListener("submit", function (evt) {
    if (!loginName.value || !loginEmail.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('modal-error');
    } else { 
        if (isStorageSupport) {
        localStorage.setItem('login', loginName.value);
       }    
    };
});


//Модальное окно карты
const mapPopup = document.querySelector('.modal-map');
const mapOpenPopupButton = document.querySelector('.map-button');
const mapClosePopupButton = mapPopup.querySelector('.modal-close');

mapOpenPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
});
mapClosePopupButton.addEventListener('click', function () {
    mapPopup.classList.remove('modal-show');
});
window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains('modal-show')) {
            mapPopup.classList.remove('modal-show');
        }
    };
});

//Модальное окно корзины 
const cartPopup = document.querySelector('.modal-cart');

const openCartPopupButton = document.querySelectorAll('.prise-button');
 
let openCartPopup = function (button, cartPopup) {
    button.addEventListener('click', function () {
        cartPopup.classList.add('modal-show');
    });
};

for (var i = 0; i < openCartPopupButton.length; i++ ) {
    openCartPopup(openCartPopupButton[i], cartPopup);
};
