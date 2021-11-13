const menuToggle = document.querySelector('.header-toggle');
const menu = document.querySelector('.header__menu');
const expandClass = 'is-expand';
const menuTimes = document.querySelector('.header-times');
menuToggle.addEventListener('click', () => {
	menu.classList.add(expandClass);
	menuTimes.addEventListener('click', () => {
		menu.classList.remove(expandClass);
	});
	window.addEventListener('click', (e) => {
		if (!menu.contains(e.target) && !e.target.matches('.header-toggle')) {
			menu.classList.remove(expandClass);
		}
	});
});
// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });

$(document).ready(function () {
	$('.quote__container').slick({
		prevArrow:
			"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow:
			"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false,
				},
			},
		],
	});
});
