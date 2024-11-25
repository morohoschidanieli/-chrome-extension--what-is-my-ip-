import { BqButton } from "@beeq/react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--bq-spacing-xs2);
`;

export const Label = styled.p`
  font-size: var(--bq-font-size--m);
  font-weight: var(--bq-font-weight--semibold);
`;

export const StyledBqButton = styled(BqButton)`
  width: 100%;

  &::part(button) {
    width: 100%;
  }
`;
