
console.log("Hello, World!");
var persons = [], i = 0;

for (i = 0; i < 5 ; i++) {
    $.get("students.json", function(student){
        console.log("Student: " + student[0].name + " " + student[0].gender +" " + student[0].skype);
    });
};