import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            todos: [{
                id: 1,
                title: "task9",
                is_completed: false,
                user: 'islom'
            }]
        }
    },
    mutations: {
        addTodo(state, payload) {
            const new_todo = {
                id: new Date().getTime(),
                title: payload.title,
                is_completed: false,
                user: payload.user,
            }
            state.todos.push(new_todo)
            console.log(payload);
        },
        deleteTask(state,id) {
            const filteredTask = state.todos.filter((t) => t.id != id)
            state.todos = filteredTask
            console.log(id);
        }
    }
})
