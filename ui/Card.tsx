import styled from "@emotion/styled";
import { borderRadius, boxShadow, colors } from "./design-tokens";

export const Card = styled.div`
  border-radius: ${borderRadius.default};
  background-color: ${colors.gray[50]};
  box-shadow: ${boxShadow.card};
  padding: 1rem;
`;
