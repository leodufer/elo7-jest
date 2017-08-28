function Car(){
	this.items = [];
	this.totalDeItems = ()=>{
		if(this.items.length === 0)
			return 0
		else
			return this.items.length;
	}
	this.addItem = (i)=>{
		this.items.push(i)
	}
}
module.exports = Car;