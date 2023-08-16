import React, { useState } from "react";
import styled from "styled-components";

const TodoListBox = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
`;

const Navbar = styled.div`
  border-bottom: 1px solid;
  height: 10%;
`;

const Content = styled.div`
  width: 100%;
`;

const Footer = styled.div`
  border-top: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
`;

const Input = styled.input`
  width: 200px;
`;

export default function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setTodos([...todos, text]);
      setText("");
    }
  };

  return (
    <TodoListBox>
      <Navbar></Navbar>
      {todos.map((item) => (
        <Content>
          <p>{item}</p>
        </Content>
      ))}
      <Footer>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="text" value={text} onChange={handleChange} />
          <button>Add</button>
        </form>
      </Footer>
    </TodoListBox>
  );
}
