// Savoir si elles sont checkées ou pas
// Sélection des cb non-checkées
console.log("Checkbox");


$('#submitBtn').click(function(){
	console.log('submit');

	var checkboxes = $("input[type='checkbox']:not(:checked)");
	// var checkboxes = $("input:checkbox:not(:checked)");
	console.log(checkboxes.length);

	checkboxes.parent('div').hide();
	// for(var i=0; i<checkboxes.length; i++){
	// 	var checkbox = $(checkboxes[i]);
	// 	var isChecked = checkbox.is(':checked');
	// 	if(isChecked){

	// 	}else{

	// 	}
	// }
	
});


function level1(){
	var isChecked = checkGender.is(':checked');
	console.log("(jquery) Checkbox is checked ?", isChecked);

	var isCheckedVanilla = document.getElementById('checkGender').checked;
	console.log("(vanilla) Checkbox is checked ?", isCheckedVanilla);	
}