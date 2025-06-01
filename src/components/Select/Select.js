import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <IconWrapper>
        <Icon
          size={18}
          id="chevron-down"
          style={{ pointerEvents: "none" }}
        ></Icon>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  color: ${COLORS.gray700};
  &:hover {
    color: black;
  }
`;
const SelectWrapper = styled.select`
  color: inherit;
  appearance: none;
  padding: 12px 40px 12px 16px;
  &:focus {
    outline-color: ${COLORS.primary};
    border-radius: 4px;
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 30%;
  right: 12px;
`;

export default Select;
