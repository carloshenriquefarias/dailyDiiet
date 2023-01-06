import { ArrowUpRight } from 'phosphor-react-native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { css } from 'styled-components/native';
import { DietVariant } from '@screens/Home';

type Props = {
  variant: DietVariant;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  min-height: 120px;
  max-height: 120px;
  padding: 20px 16px;
  background-color: ${({ theme, variant }) =>
    variant
      ? variant === 'inDiet'
        ? theme.COLORS.STYLES.PRIMARY_LIGHT
        : theme.COLORS.STYLES.SECONDARY_LIGHT
      : theme.COLORS.BASE.GRAY_300
  };
  border-radius: 8px;
  align-items: center;
  position: relative;
`;

export const StyledIcon = styled(ArrowUpRight).attrs<Props> (
  ({ theme, variant }) => ({
    size: 24,
    color:
      variant === 'inDiet'
      ? theme.COLORS.STYLES.PRIMARY_DARK
      : theme.COLORS.STYLES.SECONDARY_DARK
  })
) <Props>`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const StyledNumber = styled.Text`
  ${({ theme }) => css`
    font-size: 40px;
    font-family: ${theme.FONTS.FAMILY.BOLD};
    /* font-size: ${theme.FONTS.SIZE.MD}; */
    color: ${theme.COLORS.BASE.GRAY_600};
  `}
`;

export const StyledText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.FAMILY.REGULAR};
    font-size: ${theme.FONTS.SIZE.MD};
    color: ${theme.COLORS.BASE.GRAY_700};
  `}
`;
