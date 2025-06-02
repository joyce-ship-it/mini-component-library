import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <OverlayText>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" size={24}></Icon>
        </IconWrapper>
      </OverlayText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: max-content;
  position: relative;
  isolation: isolate;
`;

const NativeSelect = styled.select`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 2;
`;
const OverlayText = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 3px solid ${COLORS.primary};
  }
  ${NativeSelect}:hover +& {
    color: currentColor;
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 10px;
  height: 24px;
  width: 24px;
  margin: auto;
  z-index: 1;
`;
export default Select;
