import { createContext, useContext } from "react";

export const TodoContext = createContext({
    // values
        todos: [
            {
                id: 1,
                todo: 'Todo msg',
                completed: false
            }
        ],
        // methods
        addTodo : (todo) => {},
        updateTodo : (id, todo) => {},
        deleteTodo : (id) => {},
        todoComplete : (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext)
};

export const TodoProvider = TodoContext.Provider;