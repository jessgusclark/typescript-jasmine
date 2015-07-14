describe("rectangle Tests", function () {

	var myShape = new ShapeClass("square", 30, 30);

	it("check name", function () {
		expect(myShape.name).toEqual("square");
	});

	it("check size", function () {
		expect(myShape.area).toEqual(900);
	});

	it("check color", function () {
		expect(myShape.color).toEqual("pink");
	});

	it("change color", function () {
		myShape.color = "blue";
		expect(myShape.color).toEqual("blue");
	});
	
});

describe("cube Tests", function () {

	var cube = new Shape3D("cube", 30, 30, 30);

	it("check name", function () {
		expect(cube.name).toEqual("cube");
	});

	it("area (set by parent)", function () {
		expect(cube.area).toEqual(900);
	});

	it("volume", function () {
		expect(cube.volume).toEqual(27000);
	});

	it("check spy", function(){
		spyOn(cube, "shoutout");
		cube.shoutout();
		expect(cube.shoutout).toHaveBeenCalled();
	});
	

});