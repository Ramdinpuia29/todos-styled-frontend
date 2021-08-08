import { useState } from "react";
import styled from "styled-components";

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleAddTodo = () => {
    if (!text) {
      alert("Please add todo");
      return;
    }
    onAdd({ text, completed });

    setText("");
    setCompleted(false);
  };

  return (
    <Container>
      <TodoInput
        type="text"
        placeholder="Enter new Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <AddTodoButton onClick={handleAddTodo}>Add Todo</AddTodoButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  min-width: 20rem;
`;

const TodoInput = styled.input`
  width: 100%;
  padding: 4px 2px;
  border: none;
  border-bottom: 2px solid;
  outline: none;
  font-size: medium;
`;

const AddTodoButton = styled.button`
  width: 20rem;
  padding: 4px 2px;
  margin-top: 25px;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: medium;
`;

export default AddTodo;
