import styled from "styled-components";

export const IntroContainer = styled.div`
  position: absolute;
  left: 0rem;
  top: 28rem;
  width: 23.44rem;
  height: 22.75rem;
  /* Smart layout */
  display: flex;
  flex-direction: column;
  padding: 2.25rem 1.5rem 1.5rem 1.5rem;
  gap: 10rem;
  border-radius: 0rem ${(props) => props.theme.borderRadius["2xl"]} 0rem 0rem;
  background: ${(props) => props.theme.colors.white};
`;
export const Title = styled.div`
  font-family: Jalnan;
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: normal;
  line-height: 140%;
  letter-spacing: -0.00125em;
  font-variation-settings: "opsz" auto;
  /* Dark */
  color: #24243f;
`;
