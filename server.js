var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var todos = [{
	id: 1,
	description: 'Learning postman',
	completed: false
},{
	id: 2,
	description: 'Learning github and heroku',
	completed: false
},{
	id: 3,
	description: 'Learning to Push data ',
	completed: false


}];

app.get('/',function(req,res){
	res.send('Todo APT Root');
});


app.get('/todos',function(req,res){
	res.json(todos);
});
app.get('/todos/:id',function(req,res){
	var todoId = parseInt(req.params.id);
	var matchedTodo;

	todos.forEach(function(todo){
		if(todoId === todo.id){
			matchedTodo = todo;
		}
	});

	if(matchedTodo){
		res.json(matchedTodo);
	 } else {
		res.status(404).send();

	}
});

app.listen(PORT,function(){
	console.log('Express listening on port ' + PORT + '!');
});