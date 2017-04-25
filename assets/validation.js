 $(document).ready(function(){
        $('#send_message').click(function(e){

              
            
            //Stop form submission & check the validation
            e.preventDefault();
            $("#validation_error").hide()
            // Variable declaration
            var error = false;
            var name = $('#name').val();
            var email = $('#email').val();
			var phone = $('#phone').val();
            var message = $('#message').val();
			
			$('#name,#email,#phone,#message').click(function(){
				$(this).removeClass("error_input");
			});
            
         	// Form field validation
            if(name.length == 0){
                var error = true;
                $('#name').addClass("error_input");
                $("#validation_error").show();
            }else{
                $('#name').removeClass("error_input");
            }
            if(email.length == 0){
                var error = true;
                $('#email').addClass("error_input");
                $("#validation_error").show();
            }else{
                  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                  $("#email_error").hide();
                  if(!regex.test(email)){
                        var error = true;
                        $("#email_error").show();
                        $('#email').addClass("error_input");
                  }else{
                        $('#email').removeClass("error_input");
                  }
            }
		
            if(phone.length == 0){
                var error = true;
                $('#phone').addClass("error_input");
                $("#validation_error").show();
            }else{
                $('#phone').removeClass("error_input");
            }
            if(message.length == 0){
                var error = true;
                $('#message').addClass("error_input");
                $("#validation_error").show();
            }else{
                $('#message').removeClass("error_input");
            }
            
            // If there is no validation error, next to process the mail function
            if(error == false){
               // Disable submit button just after the form processed 1st time successfully.
                $('#send_message').attr({'disabled' : 'true', 'value' : 'Sending...' });
                
				/* Post Ajax function of jQuery to get all the data from the submission of the form as soon as the form sends the values to email.php*/
                $.post("email.php", $("#contact_form").serialize(),function(result){
                    //Check the result set from email.php file.
                    $('#mail_success').attr({'display' : 'none'});
                    $('#mail_fail').attr({'display' : 'none'});

                    if(result == 'sent'){
                        //If the email is sent successfully, remove the submit button
                         $('#submit').remove();
                        //Display the success message
                        $('#mail_success').attr({'display' : 'inherit'});
                    }else{
                        //Display the error message
                        $('#mail_fail').attr({'display' : 'inherit'});
                        // Enable the submit button again
                        $('#send_message').removeAttr('disabled').attr('value', 'Send The Message');
                    }
                });
            }
        });    
    });