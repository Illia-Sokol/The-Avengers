var imagecount = 1;
var total = 3;

document.querySelector('#rect1').addEventListener('click', function() {
	numberSlide(1);
	imagecount = 1;
	colorRect(1);
})
document.querySelector('#rect2').addEventListener('click', function() {
	numberSlide(2);
	imagecount = 2;
	colorRect(2);
})
document.querySelector('#rect3').addEventListener('click', function() {
	numberSlide(3);
	imagecount = 3;
	colorRect(3);
})

function numberSlide(image) {
	var Image = document.querySelector('.slider__img');
	Image.src = "img/slider" + image + ".jpg"
}


function colorRect(now) {
	$('.rect').css('background','#f6f6f6');
	document.querySelector('#rect' + imagecount).style.background = '#555';
}

window.setInterval(
	function slideA() {
		var Image = document.querySelector('.slider__img');
		imagecount = imagecount + 1;
		if (imagecount > total) {
			imagecount = 1;
		} else if (imagecount < 1) {
			imagecount = total;
		}
		colorRect(imagecount)
		Image.src = "img/slider" + imagecount + ".jpg";		
	}, 5000);