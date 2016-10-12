console.log("Start");

// Quand je clique sur le btn "A faire"
// Les tâches "non cochées s'affichent"
// Les tâches cochées disparaissent
$('#todoBtn').click(function(){
	// console.log('click TODO');
	getDoneTasks().hide();
	getTodoTasks().show();
});

// Quand je clique sur le btn 'Faites'
// affiches les tâches cochées
// cache les tâches non cochées
$('#doneBtn').click(function(){
	// console.log('click DONE');
	getDoneTasks().show();
	getTodoTasks().hide();
});

// Voir tout
$('#allBtn').click(function(){
	// console.log('minuscule');
	getDoneTasks().show();
	getTodoTasks().show();
})

function getDoneTasks(){
	return $('input[type="checkbox"]:checked').parent('li');
}

function getTodoTasks(){
	return $('input[type="checkbox"]:not(:checked)').parent('li');
}
