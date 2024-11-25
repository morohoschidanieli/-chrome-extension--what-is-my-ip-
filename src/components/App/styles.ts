import { BqButton } from "@beeq/react";
import styled from "styled-components";

export const Flex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: center;
  align-items: center;
`;

export const StyledBqButton = styled(BqButton)`
  width: 100%;

  &::part(button) {
    width: 100%;
  }
`;
