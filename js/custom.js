

// JavaScript Document

$('#subscribeform').submit(function(){



	var action = $(this).attr('action');



		$("#mesaj").slideUp(750,function() {







		$('#mesaj').hide();



	$('#subsubmit')







			.after('')







			.attr('disabled','disabled');



	$.post(action, {







			email: $('#subemail').val()







		},







			function(data){







				document.getElementById('mesaj').innerHTML = data;







				$('#mesaj').slideDown('slow');







				$('#subscribeform img.subscribe-loader').fadeOut('slow',function(){$(this).remove()});







				$('#subsubmit').removeAttr('disabled');







				if(data.match('success') != null) $('#subscribeform').slideUp('slow');



			}







		);







		});







		return false;







	});

	//   // Back to top button
	//   $(window).scroll(function() {
	// 	if ($(this).scrollTop() > 100) {
	// 	  $('.back-to-top').fadeIn('slow');
	// 	} else {
	// 	  $('.back-to-top').fadeOut('slow');
	// 	}
	//   });
	//   $('.back-to-top').click(function(){
	// 	$('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
	// 	return false;
	//   });