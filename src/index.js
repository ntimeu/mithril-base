const m = require('mithril')

const Nav = require('./Nav')

const Counter = require('./controllers/Counter')
const TodoList = require('./controllers/TodoList')

m.route(document.body, "/", {
	"/" : {
		render: function() {
			return m(Nav, m("p", "Hello, world !"))
		}
	},
	"/counter": {
		render: function() {
			return m(Nav, m(Counter))
		}
	},
	"/todo-list": {
		render: function() {
			return m(Nav, m(TodoList))
		}
	}
})
