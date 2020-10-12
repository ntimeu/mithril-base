const m = require('mithril')

class Nav {
	constructor(vnode) {
	}

	view(vnode) {
		return m("[",
			m("nav", m("ul", [
				m("li", m(m.route.Link, {href: "/counter"}, "Counter app")),
				m("li", m(m.route.Link, {href: "/todo-list"}, "Todo list"))
			])),
			m("section", vnode.children)
		)
	}
}

module.exports = Nav
