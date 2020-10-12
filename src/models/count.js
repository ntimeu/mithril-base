let _ck = 'counter:count'

class count {
	constructor() {
		this.storage = window.sessionStorage

		if (this.storage.getItem(_ck) === null) {
			let initial_value = 0
			this.storage.setItem(_ck, initial_value.toString())
		}
	}

	inc() {
		var count = Number(this.storage.getItem(_ck))
		count++
		this.storage.setItem(_ck, count.toString())
	}

	dec() {
		var count = Number(this.storage.getItem(_ck))
		count--
		this.storage.setItem(_ck, count.toString())
	}

	get_value() {
		return Number(this.storage.getItem(_ck))
	}
}

module.exports = count
