$(document).ready(function(){
		
		$("#home").on({
			   mouseenter: function(){
			    $('#homeIcon').attr('src','images/homeHover.png');
			  },
			  mouseleave: function(){
			    $('#homeIcon').attr('src','images/home.png');
			  }
			  });
		
		$("#course").on({
			   mouseenter: function(){
			    $('#education').attr('src','images/educationHover.png');
			  },
			  mouseleave: function(){
			    $('#education').attr('src','images/education.png');
			  }
			  });
		
		$("#contact").on({
			   mouseenter: function(){
			    $('#letter').attr('src','images/letterHover.png');
			  },
			  mouseleave: function(){
			    $('#letter').attr('src','images/letter.png');
			  }
			  });

		$('#maluchy').on({
			   mouseenter: function(){
			    $('#icon').attr('src','images/teddyHover.png');
			  },
			  mouseleave: function(){
			    $('#icon').attr('src','images/teddy.png');
			  }
			  });
		
		$('#dzieci').on({
			   mouseenter: function(){
			    $('#iconD').attr('src','images/abc-blockHover.png');
			  },
			  mouseleave: function(){
			    $('#iconD').attr('src','images/abc-block.png');
			  }
			  });
		
		$('#szkolne').on({
			   mouseenter: function(){
			    $('#iconS').attr('src','images/childrenHover.png');
			  },
			  mouseleave: function(){
			    $('#iconS').attr('src','images/children.png');
			  }
			  });
		
		// Add smooth scrolling to all links
		  $("#contact").on('click', function(event) {

		    // Make sure this.hash has a value before overriding default behavior
		    if (this.hash !== "") {
		      // Prevent default anchor click behavior
		      event.preventDefault();

		      // Store hash
		      var hash = this.hash;

		      // Using jQuery's animate() method to add smooth page scroll
		      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		      $('html, body').animate({
		        scrollTop: $(hash).offset().top
		      }, 800, function(){
		   
		        // Add hash (#) to URL when done scrolling (default click behavior)
		        window.location.hash = hash;
		      });
		    } // End if
		  });
		
			  
	});