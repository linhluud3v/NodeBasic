var car = {
	name	: "camry",
	color : "red",
	version: "2.0",
	action : function () {
		console.log('running');
	}
}
car.action();
console.log( car['name'] );