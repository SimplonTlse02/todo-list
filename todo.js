
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


function getDoneTasks(){
	return $('input[type="checkbox"]:checked').parent('li');
}

function getTodoTasks(){
	return $('input[type="checkbox"]:not(:checked)').parent('li');
}




/*

Qd je clique sur Ajouter,
- ajouter une tâche à ma liste : content + checkbox

var newTask = $('<li> '+ content + '<input type="checkbox"></li>');
...append(newTask);
newTask.click(function(){
	// toggleClass
})

- ajouter un listener à cette nouvelle tâche

newTask.on('click', function({
	
}))

Délégation d'évèenemtn

$('ul').on('click', 'input[type=checkbox]', function(){
	// $(this)

});
*/
