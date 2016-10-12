console.log("Start");

// Quand je clique sur le btn "A faire"
// Les tâches "non cochées s'affichent"
// Les tâches cochées disparaissent
$('#todoBtn').click(function(){
	console.log('click TODO');
	$('input[type="checkbox"]:checked').parent('li').hide();
	$('input[type="checkbox"]:not(:checked)').parent('li').show();
});

// Quand je clique sur le btn 'Faites'
// affiches les tâches cochées
// cache les tâches non cochées
$('#doneBtn').click(function(){
	console.log('click DONE');
	$('input[type="checkbox"]:checked').parent('li').show();
	$('input[type="checkbox"]:not(:checked)').parent('li').hide();
});

// Voir tout
$('#allBtn').click(function(){
	console.log('minuscule');
	$('input[type="checkbox"]:checked').parent('li').show();
	$('input[type="checkbox"]:not(:checked)').parent('li').show();
})