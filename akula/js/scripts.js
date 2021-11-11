var serviceValue;
var doctorValue;
var datetimeValue;

/* Маска телефона */
let cleaves = ['.cleave', '.cleave-2', '.cleave-3'];
for (let cleave of cleaves) {
	if ( document.querySelector(cleave) ) {
		let maskPhone = new Cleave(cleave, {
			delimiters: ['+7 (',') ','-'],
			blocks: [0, 3, 3, 2, 2]
		});
	}
}

/* Модальные окна */
if ( document.querySelector('.hystmodal') ) {
	var HystModal = new HystModal({
		linkAttributeName: "data-hystmodal"
	});
}

/* Карусель на первом экране */
if ( document.querySelector('.home-banner__carousel-init') ) {
	let homeBannerCarousel = tns({
		container: '.home-banner__carousel-init',
		items: 1,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		controlsContainer: '.home-banner__carousel-controls-init',
		nav: true,
		navContainer: '.home-banner__carousel-nav'
	});
}

if (document.querySelector('.home-banner__carousel-controls-init')) {
	let homeBannerCarouselHiddenPrev = document.querySelector('.home-banner__carousel-controls-init ._prev');
	let homeBannerCarouselHiddenNext = document.querySelector('.home-banner__carousel-controls-init ._next');
	
	let homeBannerCarouselVisiblePrev = document.querySelector('.home-banner__carousel-controls ._prev');
	let homeBannerCarouselVisibleNext = document.querySelector('.home-banner__carousel-controls ._next');
	
	homeBannerCarouselVisiblePrev.onclick = function() { homeBannerCarouselHiddenPrev.click() };
	homeBannerCarouselVisibleNext.onclick = function() { homeBannerCarouselHiddenNext.click() };
}

/* Подбор специалиста */
if ( document.querySelector('.selection') ) {
	
	/* Переход по стрелкам */
	let selectionControls = document.querySelectorAll('.selection__control');
	
	for (let selectionControl of selectionControls) {
		selectionControl.onclick = function(){
			let link = selectionControl.getAttribute('data-link');
			let hide = selectionControl.getAttribute('data-hide');
			let stageAdd = selectionControl.getAttribute('data-stage-add');
			let stageRemove = selectionControl.getAttribute('data-stage-remove');
			
			document.querySelector(link).classList.add('_active');
			document.querySelector(hide).classList.remove('_active');
			if (stageAdd)
				document.querySelector(stageAdd).removeAttribute('disabled');
			if (stageRemove)
				document.querySelector(stageRemove).setAttribute('disabled', 'disabled');
		}
	}
}

/* Передача параметров в форму */
if (document.querySelector('.selection__btn')) {
	document.querySelector('.selection__btn button').onclick = function() {
		document.querySelector('#order-form input[name="service"]').setAttribute('value', serviceValue);
		document.querySelector('#order-form input[name="doctor"]').setAttribute('value', doctorValue);
		document.querySelector('#order-form input[name="datetime"]').setAttribute('value', datetimeValue);
	}
}

/* Карусель отзывов */
if ( document.querySelector('.reviews__carousel-init') ) {
	let reviewsCarousel = tns({
		container: '.reviews__carousel-init',
		items: 1,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		controlsContainer: '.reviews__controls',
		autoHeight: true
	});
}

/* FAQ */
if ( document.querySelector('.faq') ) {
	let items = document.querySelectorAll('.faq__title');
	for (let item of items) {
		item.onclick = function() {
			item.parentElement.classList.toggle('_active');
		}
	}
}

/* Карусель акций */
if ( document.querySelector('.sale__carousel-init') ) {
	let saleCarousel = tns({
		container: '.sale__carousel-init',
		items: 1,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		controlsContainer: '.sale__controls',
		autoHeight: true
	});
}

/* Открытие мобильного меню */
if ( document.querySelector('.header__burger') ) {
	let burger = document.querySelector('.header__burger');
	let nav = document.querySelector('.header__mobile');
	
	burger.onclick = function() {
		burger.classList.toggle('_active');
		nav.classList.toggle('_active');
	}
}

/* Политика конфиденциальности */
if ( document.querySelectorAll('.form__policy') ) {
	let policies = document.querySelectorAll('.form__policy input');
	
	for (let policy of policies) {
		policy.onchange = function(){
			let btn = policy.parentElement.parentElement.querySelector('.form__btn')
			if (policy.checked) {
				btn.removeAttribute('disabled');
			} else {
				btn.setAttribute('disabled', 'disabled');
			}
		}
	}
}

/* Прокрутка наверх */
function trackScroll() {
	var scrolled = window.pageYOffset;
	var coords = document.documentElement.clientHeight;
	
	if (scrolled > coords) {
		up.classList.add('_active');
	}
	if (scrolled < coords) {
		up.classList.remove('_active');
	}
}

function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -80);
		setTimeout(backToTop, 10);
	}
}

if ( document.querySelector('.up') ) {
	var up = document.querySelector('.up');
	window.addEventListener('scroll', trackScroll);
	up.addEventListener('click', backToTop);
}

/* Запрет клика на родительские элементы */
if ( document.querySelector('ul li a._parent') ) {
	let parents = document.querySelectorAll('ul li a._parent');
	for (let parent of parents) {
		parent.onclick = function(){
			return false;
		}
	}
}

/* Яндекс карта */
var check_if_load = false;

function init () {
	var myMapTemp = new ymaps.Map('map', {
		center: [56.16347638, 40.46403368],
		zoom: 17,
		controls: []
	});
	var myPlacemarkTemp = new ymaps.Placemark([56.16332672, 40.46567519]);
	myMapTemp.geoObjects.add(myPlacemarkTemp);
	
}

function loadScript(url, callback){
	var script = document.createElement("script");
	if (script.readyState){  // IE
		script.onreadystatechange = function(){
			if (script.readyState == "loaded" ||
				script.readyState == "complete"){
				script.onreadystatechange = null;
				callback();
			}
		};
	} else {
		script.onload = function(){
			callback();
		};
	}
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}

function getCoords(elem) {
	let box = elem.getBoundingClientRect();
	let pos = 0;
	pos = box.top + pageYOffset;
	return pos;
}

var ymap = function() {
	if ( document.querySelector('.map') ) {
		let offsetTop = getCoords( document.querySelector('.map') ) - 500;
		let clientTop;
		
		window.addEventListener('scroll', function(){
			clientTop = window.pageYOffset;
			
			if ( clientTop >= offsetTop ) {
				if (!check_if_load) {
					check_if_load = true;
					loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
						ymaps.load(init);
					});
				}
			}
		});
	}
}
ymap();

/* Слушаем изменения */
document.addEventListener('change', function(){
	
	if (document.querySelector('.selection')) {
		
		/* Выбор услуги */
		let selectionServices = document.querySelectorAll('.selection__service-input');
		let validateSelectionServices = false;
		let controlSelectionServices = document.querySelector('.selection__step._step-1 .selection__control._next');
		let valueChecked = [];
		
		for (let selectionService of selectionServices) {
			if ( selectionService.checked ) {
				validateSelectionServices = true;
				valueChecked.push( selectionService.value );
				serviceValue = selectionService.value;
			}
		}
		
		let doctors = document.querySelectorAll('.selection__doctor');
		let doctorsEmpty = true;
		
		for (let doctor of doctors) {
			doctor.classList.remove('_active');
		}
		for (let doctor of doctors) {
			for (let doctorValue of doctor.getAttribute('data-services').split(', ')) {
				for (let checkedValue of valueChecked) {
					if (doctorValue == valueChecked) {
						doctorsEmpty = false;
						doctor.classList.add('_active');
					}
				}
			}
		}
		
		if (doctorsEmpty === true) {
			document.querySelector('.selection__doctors-empty').classList.add('_active');
		} else {
			document.querySelector('.selection__doctors-empty').classList.remove('_active');
		}
		
		if (validateSelectionServices === true) {
			controlSelectionServices.removeAttribute('disabled');
		} else {
			controlSelectionServices.setAttribute('disabled', 'disabled');
		}
		
		/* Выбор врача */
		let doctorsInputs = document.querySelectorAll('.selection__doctor-input');
		let doctorsControl = document.querySelector('.selection__step._step-2 .selection__control._next');
		let doctorsValidate = false;
		for (let doctorsInput of doctorsInputs) {
			if (doctorsInput.checked) {
				doctorsValidate = true;
				doctorValue = doctorsInput.value;
			}
		}
		if (doctorsValidate === true) {
			doctorsControl.removeAttribute('disabled');
		} else {
			doctorsControl.setAttribute('disabled', 'disabled');
		}
		
		/* Выбор даты и времени */
		let datetimes = document.querySelectorAll('.selection__datetime-input');
		let datetimesValidate = false;
		let datetimesBtn = document.querySelector('.selection__btn');
		for (let datetime of datetimes) {
			if (datetime.checked) {
				datetimesValidate = true;
				datetimeValue = datetime.value;
			}
		}
		if (datetimesValidate === true) {
			datetimesBtn.classList.add('_active');
		} else {
			datetimesBtn.classList.remove('_active');
		}
	}
});

