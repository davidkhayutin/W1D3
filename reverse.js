var fullName = function(){
  return "Hi, " + this.firstName + " " +  this.lastName;
}

var person = {
  firstName : "David",
  lastName : "Khayutin",
  age: 31,
  sex: "male"
}

console.log(person);

console.log("--------------------------");

person.fullName = fullName

console.log(person.fullName());