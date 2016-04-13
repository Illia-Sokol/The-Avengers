$(function() {
	$('.read-more').on('click', function() {
		$(this).parent().children('.text').children('.text__hide').css('display', 'inline');
		$(this).hide();
	})
})