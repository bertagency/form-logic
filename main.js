// If form-verification=alert-text then hide / show this element
// button-nextstep identifies the next step button

$(document).ready(function() {
    $(":input, a").attr("tabindex", "-1");
  
  /******Step 1 *******************/

  $('#name-input').keypress(function(event) {
      if (event.keyCode == 13) {
          event.preventDefault();
          
      }
  });
  
  $("[button-nextstep='validate'][button-stepnumber='1']").click(function(e) {
          e.preventDefault();

  // Option to just progress
  //        $('.w-round div:nth-child(2)').trigger('tap');

// Field Validation
    if($('#name-input').val().length !=0){
        $("[form-verification='alert-text']").hide();
        $('.w-round div:nth-child(2)').trigger('tap');
     }

    else
      {
        $("[form-verification='alert-text']").show(500);
      }

    });
// If data attribute is set to Progress
    $("[button-nextstep='progress']").click(function(e) {
        e.preventDefault();
        $('.w-round div:nth-child(2)').trigger('tap');
  });
  

  /******Step 2 *******************/
  $('#email-input').keypress(function(event) {
      if (event.keyCode == 13) {
          event.preventDefault();
      }
  });
  
  $('#email-step').click(function(e) {
          e.preventDefault();
    
    if($('#email-input').val().length !=0){
      $("[form-verification='alert-text']").hide();
      $('.w-round div:nth-child(3)').trigger('tap');
     }
     
    else
      {
        $("[form-verification='alert-text']").show(500);
      }
      });
  
  $('#email-prev').click(function(e) {
          e.preventDefault();
        $('.w-round div:nth-child(1)').trigger('tap');
      });
  
  /******Step 3 *******************/
/*
If $+10,000 then skip straight to Slide 5 
*/

  $("input[name='Budget']").keypress(function(event) {
      if (event.keyCode == 13) {
          event.preventDefault();
      }
  });
  
  $('#budget-step').click(function(e) {
          e.preventDefault();

    var whereFromStepThree=4;

    if ( ! $("input[name='Budget']").is(':checked') ) {

      $("[form-verification='alert-text']").show(500);
     }
     
    else
      {
        if(document.getElementById('radio').checked) {
            //10k radio button is checked so Redirect to Step 5
           whereFromStepThree = 5;
          }

        $("[form-verification='alert-text']").hide();
        $(".w-round div:nth-child("+ whereFromStepThree + ")").trigger('tap');
      }
      });
  
  $('#budget-prev').click(function(e) {
          e.preventDefault();
        $('.w-round div:nth-child(2)').trigger('tap');
      });
  
  /******Step 4 *******************/
  $("input[name='platform']").keypress(function(event) {
      if (event.keyCode == 13) {
          event.preventDefault();
      }
  });
  
  $('#platform-step').click(function(e) {
          e.preventDefault();

    
    if ( ! $("input[name='platform']").is(':checked') ) {

      $("[form-verification='alert-text']").show(500);
     }
     
    else
      {
        $("[form-verification='alert-text']").hide();
        $('.w-round div:nth-child(5)').trigger('tap');
      }
      });
  
  $('#platform-prev').click(function(e) {
          e.preventDefault();
        $('.w-round div:nth-child(3)').trigger('tap');
      });
  
  /******Step 5 (FINAL) *******************/
  
  $('#details-prev').click(function(e) {
          e.preventDefault();
        $('.w-round div:nth-child(4)').trigger('tap');
      });

  
  });