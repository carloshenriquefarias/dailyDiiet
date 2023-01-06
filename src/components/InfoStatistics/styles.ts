import { DietVariant } from '@screens/Home';
import styled, { css } from 'styled-components/native';

type Props = {
  variant?: DietVariant;
};

export const Container = styled.View<Props>`
  ${({ theme, variant }) => css`
    background-color: ${variant
      ? variant === 'inDiet'
      ? theme.COLORS.STYLES.PRIMARY_LIGHT
      : theme.COLORS.STYLES.SECONDARY_LIGHT
    : theme.COLORS.BASE.GRAY_300}
    flex: ${!!variant ? 1 : 'none'};
    margin-left: ${variant === 'outDiet' ? '12px' : 0};
  `}
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

export const StyledNumber = styled.Text`
  ${({ theme }) => css`
    font-size: 25px;
    font-family: ${theme.FONTS.FAMILY.BOLD};
    /* font-size: ${theme.FONTS.SIZE.MD}; */
    color: ${theme.COLORS.BASE.GRAY_600};
  `}
  margin-bottom:8px
`;

export const StyledText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.FAMILY.REGULAR};
    font-size: ${theme.FONTS.SIZE.SM};
    color: ${theme.COLORS.BASE.GRAY_700};
  `}
  text-align: center
`;
