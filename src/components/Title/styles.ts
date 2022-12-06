import styled, { css } from "styled-components/native";

export const TitleCentral = styled.Text`
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.COLORS.BASE.DARK};
    font-family: ${theme.FONTS.FAMILY.BOLD};
  `};
  margin-top: 25px;
  margin-bottom: 12px;
  text-align: center;
`;
