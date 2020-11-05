//Модальное окно логина
const popup = document.querySelector('.modal-login');

if (popup) {

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

//Слайдер с перфораторами

const sliderControlLeft = document.querySelector('.slider-button-left');
const sliderControlRight = document.querySelector('.slider-button-right');
const slidePerforators = document.querySelector('.slide-perforators');
const slideDrill = document.querySelector('.slide-drill');
const sliderLeftCircle = document.querySelector('.controls-circle-left');
const sliderRightCircle = document.querySelector('.controls-circle-right');

sliderControlLeft.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (slidePerforators.classList.contains('slide-current')) {
        slidePerforators.classList.remove('slide-current');
        slidePerforators.offsetWidth = slidePerforators.offsetWidth;
        slideDrill.classList.add('slide-current');
        sliderRightCircle.classList.remove('current');
        sliderRightCircle.offsetWidth = sliderRightCircle.offsetWidth;
        sliderLeftCircle.classList.add('current');
    } else {
        slideDrill.classList.remove('slide-current');
        slideDrill.offsetWidth = slideDrill.offsetWidth;
        slidePerforators.classList.add('slide-current');
        sliderLeftCircle.classList.remove('current');
        sliderLeftCircle.offsetWidth = sliderLeftCircle.offsetWidth;
        sliderRightCircle.classList.add('current');
    }
}); 

sliderControlRight.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (slidePerforators.classList.contains('slide-current')) {
        slidePerforators.classList.remove('slide-current');
        slidePerforators.offsetWidth = slidePerforators.offsetWidth;
        slideDrill.classList.add('slide-current');
        sliderRightCircle.classList.remove('current');
        sliderRightCircle.offsetWidth = sliderRightCircle.offsetWidth;
        sliderLeftCircle.classList.add('current');
    } else {
        slideDrill.classList.remove('slide-current');
        slideDrill.offsetWidth = slideDrill.offsetWidth;
        slidePerforators.classList.add('slide-current');
        sliderLeftCircle.classList.remove('current');
        sliderLeftCircle.offsetWidth = sliderLeftCircle.offsetWidth;
        sliderRightCircle.classList.add('current');
    }
}); 

//Список сервисов
const serviseItemButtons = document.querySelectorAll('.services-item-button');
const serviceDescriptions = document.querySelectorAll('.service-description');

const removeActive = function (array, className) {
    array.forEach(function (it) {
        it.classList.remove(className);
    })
}

serviseItemButtons.forEach(function (button, index) {
    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        removeActive(serviseItemButtons, 'services-menu-current');
        removeActive(serviceDescriptions, 'services-item-current');

        serviseItemButtons[index].classList.add('services-menu-current');
        serviceDescriptions[index].classList.add('services-item-current');
    })
})



}
//Модальное окно корзины 
const cartPopup = document.querySelector('.modal-cart');
const openCartPopupButton = document.querySelectorAll('.button-buy');
const closeCartPopupButton = cartPopup.querySelector('.modal-close');

openCartPopupButton.forEach(function(button) {
    button.addEventListener("click", function(evt) {
      evt.preventDefault();
      cartPopup.classList.add('modal-show');
    })
  });

closeCartPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (cartPopup.classList.contains('modal-show')) {
    cartPopup.classList.remove('modal-show')
    }
});

document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        cartPopup.classList.remove('modal-show')
    }
})
