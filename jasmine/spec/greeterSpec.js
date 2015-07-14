describe("greeter Tests", function () {
	
	var user = new Student("Jane", "M.", "User");
	
	it("last name", function () {
		expect(user.lastname).toEqual("User");			
	});
	
	it("full name", function () {
		expect(user.fullname).toEqual("Jane M. User");		
	});
	
	it("greet", function(){
		
		
		expect(greeter(user)).toEqual("Hello, Jane User!");
		expect(greeter(user)).toEqual("Hello, " + user.firstname + " " + user.lastname + "!");
		
	});
	
});