import styled from "styled-components";
import { RiCheckLine, RiDeleteBin2Line } from "react-icons/ri";

const Todo = ({ todo, onDelete, onComplete }) => {
  return (
    <Container>
      <div style={{ flex: 3 }}>
        <h3
          style={{
            textDecoration: todo.completed ? "line-through 2px" : "none",
          }}
        >
          {todo.text}
        </h3>
      </div>
      <div>
        {!todo.completed && (
          <RiCheckLine
            style={{ color: "green", fontSize: "1.5em", cursor: "pointer" }}
            onClick={() => onComplete(todo.id)}
          />
        )}
        <RiDeleteBin2Line
          style={{ color: "red", fontSize: "1.5em", cursor: "pointer" }}
          onClick={() => onDelete(todo.id)}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  padding: 4px;
  width: 100%;
`;

export default Todo;
