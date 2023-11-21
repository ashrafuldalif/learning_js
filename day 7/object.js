
// OBJECT

var student1={
    name : "ashraful alif",
    age :22,
    gpa : 4.08,
    country : "bangladesh"
}
console.log(student1.name)  
console.log(student1.age) 
console.log(student1.gpa)
console.log(student1.country)

// in this case we have to do this every time for every student.
//so we can make a templet for object thats called constractor

function Student(name ,age ,gpa,country){
    this.name=name;
    this.age=age;
    this.gpa=gpa;
    this.country=country;
    this.display = function(){
        console.log("Name : " +this.name);
        console.log("Age : "+this.age);
        console.log("CGPA : "+this.gpa);
        console.log("Nationality : "+this.country);
    }

}
var student2= new Student("Hoob D Noor",24,4.00,"japan");

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
console.log(student2.country);
0
var student3= new Student("Mahirma",20,4.05,"UK");
// its too much of work for that we can use a funtion inside the templet

student3.display();