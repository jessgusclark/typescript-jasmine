describe("shape Tests", function () {
	
	var myShape = new ShapeClass("square", 30, 30);

	it("check name", function () {
		expect(myShape.name).toEqual("square");
	});

	it("check size", function () {
		expect(myShape.area).toEqual(900);
	});

});