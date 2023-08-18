import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { styled } from "styled-components";

const Nav = styled.div`
  width: 380px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  left: 560px;
  border-bottom: 2px solid;
`;

const Btn1 = styled.button`
  border: none;
`;

const Btn2 = styled.button`
  border: none;
  position: relative;
  left: 200px;
`;

const Btn2Container = styled.div`
  :hover {
    border-bottom: 1px solid;
  }
`;

export default function Header({ filters, onChange }) {
  const { toggleDarkMode, dark, theme } = useContext(DarkModeContext);

  return (
    <Nav theme={theme}>
      <Btn1 onClick={toggleDarkMode}>{dark === false ? "🌞" : "🌕"}</Btn1>
      {filters.map((filter, index) => (
        <Btn2Container key={index}>
          <Btn2 onClick={() => onChange(filter)}>{filter}</Btn2>
        </Btn2Container>
      ))}
    </Nav>
  );
}
