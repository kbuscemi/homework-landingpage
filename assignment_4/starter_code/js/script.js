$(document).ready(function(){

$("#first-read-more-button").click(slideDown);

 function slideDown(){
 	event.preventDefault();
  $("#first-read-more-text").slideDown();
 }

$("#first-read-more-button").click(function(){
  $(".read-less").show();

})

 $("#first-read-more-button").click(function(){
   $(".read-more").hide();
 })

	
$("#first-read-less-button").click(slideUp);

 function slideUp(){
 	event.preventDefault();
 $("#first-read-more-text").slideUp();

 }

 $("#first-read-less-button").click(function(){
 	$(".read-less").hide();

 })

$("#first-read-less-button").click(function(){
	$(".read-more").show();

})

 $("#second-read-more-button").click(slideDown);
  function slideDown(){
  	event.preventDefault();
  $("#second-read-more-text").slideDown();

 }

 $("#second-read-more-button").click(function(){
  $(".read-less").show();

 })

 $("#second-read-more-button").click(function(){
 	$(".read-more").hide();
 })

 $("#second-read-less-button").click(slideUp);

  function slideUp(){
  	event.preventDefault();
  $("#second-read-more-text").slideUp();

 }

$("#second-read-less-button").click(function(){
	$(".read-less").hide();
})

$("#second-read-less-button").click(function(){
	$(".read-more").show();
})



});