import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id: 1,
            text: "Learn React",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    editTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});


export const useTodo = () => {
    return useContext(todoContext);
}

export const TodoProvider = todoContext.Provider;