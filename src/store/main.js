import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            todos:[]
        }
    },
    mutations: {
        todos(state) {
           state.todos = [
            {
                id:1,
                title:"task1",
                is_completed: true,
            }
           ]
        }
    }
})
