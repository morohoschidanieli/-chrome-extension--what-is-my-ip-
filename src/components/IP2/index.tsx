import { Label, StyledBqButton, Wrapper } from "./styles";

const IP2 = ({ ip, label }: IIP) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledBqButton>{ip}</StyledBqButton>
    </Wrapper>
  );
};

export default IP2;
