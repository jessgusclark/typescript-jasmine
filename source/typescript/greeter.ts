class Student {
    fullname : string;
    constructor(public firstname : string, 
    			public middleinitial  : string, 
    			public lastname : string) {
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

interface Person {
	firstname: string;
	lastname: string;
}
 
function greeter(person : Person) {
    return "Hello, " + person.firstname + " " + person.lastname + "!";
    //return "Hello, " + person.fullname;
}

//var user = { firstname: "Jesse", lastname: "Clark" }
var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
