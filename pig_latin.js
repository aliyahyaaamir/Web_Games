$(document).ready(function(){
	$('#input').keypress(function (e){
		if (e.which == 13){
			
			check = true;
			stored_input = $('#input').val().toLowerCase();
			// if ((typeof stored_input) != "string"){
				
			// }
			console.log("Hi");
			$('#input').val('');
			// converter();
			// console.log(latin3 + latin2 + latin + 'ay');
			// console.log(converter());
			var price = $('<p>'+ converter()+'</p>');
			$('body').append(price);
		}
	});
});

$(document).ready(function(){
	$('button').click(function(){
			
			check = true;
			stored_input = $('#input').val().toLowerCase();
			console.log("Hi");
			$('#input').val('');
			var price = $('<p>'+ converter()+'</p>');
			$('body').append(price);
	});
});

var stored_input;
var latin = [];
var vowel_array = ['a', 'e', 'i', 'o', 'u'];
var check;
var array1 = [];
var latin2 = [];
var latin3 = [];

function converter() {
for (var i = 0; i < stored_input.length; i++){
	if ((stored_input[0]=='a')||(stored_input[0]=='e')||(stored_input[0]=='i')||(stored_input[0]=='o')||(stored_input[0]=='u')){
		return stored_input;
	}
	for (x = 0; x < vowel_array.length; x++){

	
	if ((stored_input[i] == vowel_array[x])&&(check == true)&&(i != 0)){
		latin = stored_input.slice(0,i);
		latin2 = stored_input.slice(i+1,stored_input.length);
		latin3 = stored_input[i];
		check = false;
		return (latin3 + latin2 + latin + 'ay');
		}
	}
	}

}



$(document).ready(function(){
		$('.convert').mouseenter(function() {
				console.log("hello");
 		 $('h1').replaceWith($('<h1>igPay atinLay onverterCay</h1>'));
		});

		$('.convert').mouseleave(function(){
   			$('h1').replaceWith($('<h1>Pig Latin Converter</h1>'));
		});
});
  // function(){
  // 	console.log("bye");
    // $(this).removeClass("ui-state-hovered");
 // $('#Converter').hover();//(function(){
// 	$('#Converter').apppend($("<span>***</span>"));
// 	});

