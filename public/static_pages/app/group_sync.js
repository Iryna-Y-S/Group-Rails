Backbone.sync = function() {
 
    var name, gender, skype;
			
    $.get("students.json", function(person){
	    name = person[1].name;
	    gender = person[1].gender;
	    skype= person[1].skype;
	
	    console.log(name, gender, skype);
	});
};