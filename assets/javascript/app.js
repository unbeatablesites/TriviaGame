$(document).ready(function() {

	$(".button").click(function(){

      		$(".button").fadeOut(2000 , function(){
              $(".hide").removeClass("hide");
              $( "h3" ).toggle();
          });
      		var timeLeft = 20;
			var elem = document.querySelectorAll('h2');
			var timerId = setInterval(countdown, 1000);

			function countdown() {
			    if (timeLeft == -1) {
			        clearTimeout(timerId);
              $("#hide").addClass("hide");
              $("#gameOver").append("<h3>All Done!</h3>");
              $( "h3" ).toggle();
			        stop();
              // 
                 

			    } else {
			        $("h2").html("Time Remaining " + timeLeft + " Seconds");
			        timeLeft--;
			    	}
				};



           $(function(){
                    $(".hide").on('change',function(){

                      var trueCount = 0;
                      var falseCount = 0;
                      var unanswered = 0;

                      if($('input[name=firstAnswer1]:checked', '#hide').val() == "true"){
                        trueCount++;
                      }else{
                        falseCount++
                      }

                      if($('input[name=firstAnswer2]:checked', '#hide').val() == "true"){
                        trueCount++;
                      }else{
                        falseCount++
                      }
                  
                      if($('input[name=firstAnswer3]:checked', '#hide').val() == "true"){
                        trueCount++;
                      }else{
                        falseCount++
                      }
                  
                      if($('input[name=firstAnswer4]:checked', '#hide').val() == "true"){
                        trueCount++;
                      }else{
                        falseCount++
                      }
                        
                        $("h3").html(trueCount +"  Answered Correct " +"<br>"+ falseCount +"  Wrong Answers");
                        
                  
                    console.log(trueCount);
                  })
                })
			       });
            });