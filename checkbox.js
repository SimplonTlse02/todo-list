// Savoir si elles sont checkées ou pas
// Sélection des cb non-checkées
console.log("Checkbox");

$('#submitBtn').click(function(){
	console.log('submit');

	var checkGender = $("#checkGender");
	var isChecked = checkGender.is(':checked');
	console.log("(jquery) Checkbox is checked ?", isChecked);

	var isCheckedVanilla = document.getElementById('checkGender').checked;
	console.log("(vanilla) Checkbox is checked ?", isCheckedVanilla);
});