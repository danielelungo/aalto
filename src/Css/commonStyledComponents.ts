import styled from "styled-components";

interface Props {
  flexNumber?: number;
}

export const Title = styled.h4<Props>`
  color: #003479;
  flex-grow: ${(props) => props.flexNumber};
`;
