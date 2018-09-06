//Add bgdark class on scroll
$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 5) {
			$('nav').removeClass('navbar-light');
			$('nav').addClass('navbar-dark bg-dark nav-fade');
		}
		if ($(this).scrollTop() == 0) {
			$('nav').removeClass('navbar-dark bg-dark');
			$('nav').addClass('navbar-light');
		}
	});
});
