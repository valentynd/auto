$(function() {

    var swiper = new Swiper('.swiper-container', {                
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 600,
		autoplay: 3500
		// mousewheelControl: true
		// loop: true              
    });

	//SVG Fallback
// 	if(!Modernizr.svg) {
// 		$("img[src*='svg']").attr("src", function() {
// 			return $(this).attr("src").replace(".svg", ".png");
// 		});
// 	};

});

//DROPDOWN
$('.dropdown-list').click(function () {
    // $(this).parents('.dropdown-list').toggleClass('opened');
    $(this).toggleClass('opened');
})
$('.dropdown-list li').click(function () {
    var $this = $(this);
    $this.parents('.dropdown-list').find('.city').text($this.text()).addClass('chosen');
    $this.parents('.dropdown-list').removeClass('opened');
})