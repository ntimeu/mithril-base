const m = require('mithril')

const todos = require('../models/todos')

class TodoList {
	constructor(vnode) {
		this.todos = new todos();
	}

	view(vnode) {
		return m(".todo-list", this.todos.get().map(function(todo) {
			return m(".todo-list-item", todo)
		}))
	}
}

module.exports = TodoList
