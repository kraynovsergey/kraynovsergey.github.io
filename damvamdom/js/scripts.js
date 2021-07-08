/* Мобильное меню */
if ( ( document.querySelector('.header__burger') ) && ( document.querySelector('.header__nav') ) ) {
	let header_burger = document.querySelector('.header__burger');
	let header_nav = document.querySelector('.header__nav');
	
	header_burger.onclick = function() {
		this.classList.toggle('_active');
		header_nav.classList.toggle('_active');
	}
	
	document.addEventListener('click', function(e) {
		if (header_burger && header_nav)
			if (!header_nav.contains(e.target)
				&& !header_burger.contains(e.target)) {
					header_nav.classList.remove('_active');
					header_burger.classList.remove('_active');
			}
	});
}

/* Поиск */
if ( ( document.querySelector('.header__search') ) && ( document.querySelector('.search') ) ) {
	let header_search = document.querySelector('.header__search');
	let search = document.querySelector('.search');
	
	header_search.onclick = function() {
		search.classList.toggle('_active');
	}
	
	document.addEventListener('click', function(e) {
		if (header_search && search)
			if (!search.contains(e.target)
				&& !header_search.contains(e.target)) {
				search.classList.remove('_active');
			}
	});
}

/* Карусель популярных ЖК */
if ( document.querySelector('.carousel__init._popular') ) {
	let carouselPopular = tns({
		container: '.carousel__init._popular',
		items: 3,
		loop: false,
		gutter: 38,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		controlsContainer: '.carousel__control._popular',
		nav: true,
		navContainer: '.carousel__nav._popular',
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});
	
	let info = carouselPopular.getInfo(),
		pages = info.pages,
		i = 0,
		btns = document.querySelectorAll('.carousel__nav._popular button');
	
	for (let btn of btns) {
		i = i + 1;
		if ( i > pages ) {
			btn.classList.add('_hidden');
		}
	}
}

/* Карусель недорогих ЖК */
if ( document.querySelector('.carousel__init._inexpensive') ) {
	let carouselInexpensive = tns({
		container: '.carousel__init._inexpensive',
		items: 3,
		loop: false,
		gutter: 38,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		controlsContainer: '.carousel__control._inexpensive',
		nav: true,
		navContainer: '.carousel__nav._inexpensive',
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});
	
	let info = carouselInexpensive.getInfo(),
		pages = info.pages,
		i = 0,
		btns = document.querySelectorAll('.carousel__nav._inexpensive button');
	
	for (let btn of btns) {
		i = i + 1;
		if ( i > pages ) {
			btn.classList.add('_hidden');
		}
	}
}

/* Карусель старта продаж ЖК */
if ( document.querySelector('.carousel__init._startsales') ) {
	let carouselStartsales = tns({
		container: '.carousel__init._startsales',
		items: 3,
		loop: false,
		gutter: 38,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		controlsContainer: '.carousel__control._startsales',
		nav: true,
		navContainer: '.carousel__nav._startsales',
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});
	
	let info = carouselStartsales.getInfo(),
		pages = info.pages,
		i = 0,
		btns = document.querySelectorAll('.carousel__nav._startsales button');
	
	for (let btn of btns) {
		i = i + 1;
		if ( i > pages ) {
			btn.classList.add('_hidden');
		}
	}
}

/* Карусель с отделкой ЖК */
if ( document.querySelector('.carousel__init._withfinishing') ) {
	let carouselWithfinishing = tns({
		container: '.carousel__init._withfinishing',
		items: 3,
		loop: false,
		gutter: 38,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		controlsContainer: '.carousel__control._withfinishing',
		nav: true,
		navContainer: '.carousel__nav._withfinishing',
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});
	
	let info = carouselWithfinishing.getInfo(),
		pages = info.pages,
		i = 0,
		btns = document.querySelectorAll('.carousel__nav._withfinishing button');
	
	for (let btn of btns) {
		i = i + 1;
		if ( i > pages ) {
			btn.classList.add('_hidden');
		}
	}
}

/* Карусель рядом с метро ЖК */
if ( document.querySelector('.carousel__init._nearmetro') ) {
	let carouselNearmetro = tns({
		container: '.carousel__init._nearmetro',
		items: 3,
		loop: false,
		gutter: 38,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		controlsContainer: '.carousel__control._nearmetro',
		nav: true,
		navContainer: '.carousel__nav._nearmetro',
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});
	
	let info = carouselNearmetro.getInfo(),
		pages = info.pages,
		i = 0,
		btns = document.querySelectorAll('.carousel__nav._nearmetro button');
	
	for (let btn of btns) {
		i = i + 1;
		if ( i > pages ) {
			btn.classList.add('_hidden');
		}
	}
}

/* Карусель с ключами ЖК */
if ( document.querySelector('.carousel__init._withkeys') ) {
	let carouselWithkeys = tns({
		container: '.carousel__init._withkeys',
		items: 3,
		loop: false,
		gutter: 38,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		controlsContainer: '.carousel__control._withkeys',
		nav: true,
		navContainer: '.carousel__nav._withkeys',
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			}
		}
	});
	
	let info = carouselWithkeys.getInfo(),
		pages = info.pages,
		i = 0,
		btns = document.querySelectorAll('.carousel__nav._withkeys button');
	
	for (let btn of btns) {
		i = i + 1;
		if ( i > pages ) {
			btn.classList.add('_hidden');
		}
	}
}

/* Карусель отзывов */
if ( document.querySelector('.carousel__init._reviews') ) {
	let carouselReviews = tns({
		container: '.carousel__init._reviews',
		items: 2,
		loop: false,
		autoHeight: true,
		gutter: 61,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		controlsContainer: '.carousel__control._reviews',
		nav: true,
		navContainer: '.carousel__nav._reviews',
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			}
		}
	});
	
	let info = carouselReviews.getInfo(),
		pages = info.pages,
		i = 0,
		btns = document.querySelectorAll('.carousel__nav._reviews button');
	
	for (let btn of btns) {
		i = i + 1;
		if ( i > pages ) {
			btn.classList.add('_hidden');
		}
	}
}

/* Карусель новостей */
if ( document.querySelector('.carousel__init._news') ) {
	let carouselNews = tns({
		container: '.carousel__init._news',
		items: 1,
		loop: false,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		controlsContainer: '.carousel__control._news',
		nav: true,
		navContainer: '.carousel__nav._news'
	});
	
	let info = carouselNews.getInfo(),
		pages = info.pages,
		i = 0,
		btns = document.querySelectorAll('.carousel__nav._news button');
	
	for (let btn of btns) {
		i = i + 1;
		if ( i > pages ) {
			btn.classList.add('_hidden');
		}
	}
}

/* Фильтр */
if ( (document.querySelector('.filter__control')) && (document.querySelector('.filter__checkbox')) ) {
	let btns = document.querySelectorAll('.filter__control');
	for (let btn of btns) {
		btn.onclick = function(){
			btn.classList.toggle('_active');
			let parent = btn.parentNode;
			for (let checkbox of parent.querySelectorAll('.filter__checkbox')) {
				checkbox.classList.toggle('_active');
			}
		}
	}
}

/* Карусель фотографий */
if ( document.querySelector('.carousel__init._photo') ) {
	let carouselPhoto = tns({
		container: '.carousel__init._photo',
		items: 3,
		gutter: 40,
		loop: false,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		controlsContainer: '.carousel__control._photo',
		nav: true,
		navContainer: '.carousel__nav._photo',
		responsive: {
			0: {
				items: 2,
				gutter: 20
			},
			768: {
				items: 3,
				gutter: 40
			}
		}
	});
	
	let info = carouselPhoto.getInfo(),
		pages = info.pages,
		i = 0,
		btns = document.querySelectorAll('.carousel__nav._photo button');
	
	for (let btn of btns) {
		i = i + 1;
		if ( i > pages ) {
			btn.classList.add('_hidden');
		}
	}
}

/* Карусель планировок */
if ( document.querySelector('.carousel__init._layout') ) {
	let carouselLayout = tns({
		container: '.carousel__init._layout',
		items: 3,
		gutter: 40,
		loop: false,
		mouseDrag: true,
		swipeAngle: false,
		speed: 1000,
		controlsContainer: '.carousel__control._layout',
		nav: true,
		navContainer: '.carousel__nav._layout',
		responsive: {
			0: {
				items: 2,
				gutter: 20
			},
			768: {
				items: 3,
				gutter: 40
			}
		}
	});
	
	let info = carouselLayout.getInfo(),
		pages = info.pages,
		i = 0,
		btns = document.querySelectorAll('.carousel__nav._layout button');
	
	for (let btn of btns) {
		i = i + 1;
		if ( i > pages ) {
			btn.classList.add('_hidden');
		}
	}
}

/* Табы */
if ( document.querySelector('.info__tabs button') ) {
	let btns = document.querySelectorAll('.info__tabs button');
	let contents = document.querySelectorAll('.info__content');
	
	for (let btn of btns) {
		btn.onclick = function(){
			let item = btn.getAttribute('data-item');
			
			for (let subBtns of btns) {
				subBtns.classList.remove('_active');
			}
			
			for (let content of contents) {
				content.classList.remove('_active');
				
				if (content.getAttribute('data-item') == item)
					content.classList.add('_active');
			}
			
			this.classList.add('_active');
		}
	}
}

/* Плавный скролл до якоря */
var scrolls = [].slice.call(document.querySelectorAll('.zhk-aside li a')),
	animationTime = 200,
	framesCount = 200;

if (scrolls)
	scrolls.forEach(function(item) {
		item.addEventListener('click', function(e) {
			e.preventDefault();
			let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
			let scroller = setInterval(function() {
				let scrollBy = coordY / framesCount;
				if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
					window.scrollBy(0, scrollBy);
				} else {
					window.scrollTo(0, coordY);
					clearInterval(scroller);
				}
			}, animationTime / framesCount);
		});
	});