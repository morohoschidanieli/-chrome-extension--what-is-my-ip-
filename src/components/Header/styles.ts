import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--bq-spacing-s);
`;

export const IPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--bq-spacing-s);
  width: 100%;
`;

export const HeaderInformation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: var(--bq-spacing-xs2);
  }
`;
