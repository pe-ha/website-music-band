     $(document).ready(function()
{  

// SCROLOVANIE

        var nav = $('.navbar-nav'),
       navLinks = nav.find('a');

  navLinks.on('click', function(event) {
  	 $('html,body').animate({ scrollTop: $(this.hash).offset().top-50},1500);
  	event.preventDefault();

	  	});

// BACK TO TOP
    
    var up = $('<a>', {
					href: '#',
					class: 'up',
					html: '<i class="fa fa-chevron-circle-up"></i>'
		});

		up
			.hide()
			.appendTo('body')
			.on('click', function(){
				$('html, body').animate({scrollTop: 0 },1500);
  	         event.preventDefault();	
		});

    var win = $(window)
		win.on('scroll', function(){
			if (win.scrollTop() >= 300 ) up.fadeIn();
			else up.hide();
		});


	 });