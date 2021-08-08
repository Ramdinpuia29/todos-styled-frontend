import styled from "styled-components";
import Todo from "./Todo";

const TodoList = ({ todos, onDelete, onComplete }) => {
  return (
    <Container>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onComplete={onComplete}
      
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  width: 20rem;
`;

export default TodoList;
