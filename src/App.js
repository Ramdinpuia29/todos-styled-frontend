import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import { todos } from "./components/data";

function App() {
  const [todoList, setTodoList] = useState(todos);

  const addTodo = (todo) => {
    const id = uuidv4();
    const newTodo = { id, ...todo };
    setTodoList([...todoList, newTodo]);
  };

  const completeTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <h1>REACT TODO APP</h1>
      <AddTodo onAdd={addTodo} todos={todoList} />
      {todoList.length !== 0 ? (
        <TodoList
          todos={todoList}
          onComplete={completeTodo}
          onDelete={deleteTodo}
        />
      ) : (
        <h3>No Todos</h3>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export default App;
