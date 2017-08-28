const Car = require('./car');

test('Debe verificar si el carro esta vacio',()=>{
	const carro = new Car()
	expect(carro.totalDeItems()).toBe(0)
});

test('Debe verificar que exita un item',()=>{
	const carro = new Car();
	carro.addItem({name:'Celular Samsung',qtd:2,total:5600000});
	expect(carro.totalDeItems()).toBe(1);
})