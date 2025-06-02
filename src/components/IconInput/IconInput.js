import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  let styles;
  if (size === "small") {
    styles = {
      "--height": `${16}px`,
      "--width": `${16}px`,
      "--fontSize": `${16}px`,
    };
  } else {
    styles = {
      "--height": `${24}px`,
      "--width": `${24}px`,
      "--fontSize": `${18}px`,
    };
  }
  return (
    <InputWrapper style={{ "--width": `${width}px` }}>
      <IconWrapper style={styles}>
        <Icon id={icon}></Icon>
      </IconWrapper>
      <Input style={styles} placeholder={placeholder}></Input>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  border-bottom: 1px solid currentColor;
  border-radius: 2px;
  width: var(--width);
  &:focus-within {
    outline: 2px solid ${COLORS.primary};
  }
`;
const Input = styled.input`
  font-size: var(--fontSize);
  border: none;
  outline: none;
  padding-bottom: 7px;
  padding-left: 10px;
  padding-right: 30px;
`;
const IconWrapper = styled.div`
  display: inline-block;
  position: relative;
  top: 5px;
  left: 0;
`;
export default IconInput;
