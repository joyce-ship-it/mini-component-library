/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";
const SIZES = {
  small: {
    height: 8 / 16 + "rem",
    width: 370 / 16 + "rem",
    padding: 0 + "px",
    radius: 4 + "px",
  },
  medium: {
    height: 12 / 16 + "rem",
    width: 370 / 16 + "rem",
    padding: 0 + "px",
    radius: 4 + "px",
  },
  large: {
    height: 24 / 16 + "rem",
    width: 370 / 16 + "rem",
    padding: 4 + "px",
    radius: 8 + "px",
  },
};
const ProgressBar = ({ value, size = "small" }) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error("Unknown size passed ");
  }
  return (
    <Wrapper
      style={{
        "--height": SIZES[size].height,
        "--width": SIZES[size].width,
        "--radius": SIZES[size].radius,
        "--padding": SIZES[size].padding,
      }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <BarWrapper style={{ "--radius": SIZES[size].radius }}>
        <Bar style={{ "--width": value + "%" }}>
          <VisuallyHidden>{value}</VisuallyHidden>
        </Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: var(--padding);
  height: var(--height);
  width: var(--width);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;
const Bar = styled.div`
  height: 100%;
  width: var(--width);
  border-radius: var(--radius) 0 0 var(--radius);
  background-color: ${COLORS.primary};
`;
const BarWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  background: ${COLORS.transparentGray15};
  border-radius: var(--radius);
`;

export default ProgressBar;
