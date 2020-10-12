const m = require('mithril')

const count = require('../models/count')

class Counter {
	constructor(vnode) {
		this.count = new count()
	}

	view() {
		return m("div", [
			m("p", "Count is " + this.count.get_value()),
			m("button", {
				onclick: () => { this.count.inc() }
			}, "Increment"),
			m("button", {
				onclick: () => { this.count.dec() }
			}, "Decrement"),
		])
	}
}

module.exports = Counter
