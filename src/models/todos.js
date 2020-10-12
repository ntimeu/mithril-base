let storage = 'todos:list'

class todos {
	constructor() {
		this.list = Array.from(["Say hello", "Say goodbye"])
	}

	get() {
		return this.list
	}
}

module.exports = todos
