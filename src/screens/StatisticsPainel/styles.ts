import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';
import { DietVariant } from '@screens/Home';

type Props = {
  variant: DietVariant;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, variant }) =>
    variant === 'inDiet'
    ? theme.COLORS.STYLES.PRIMARY_LIGHT
    : theme.COLORS.STYLES.SECONDARY_LIGHT};
`;

export const Header = styled.View<Props>`
  position: relative;
  width: 100%;
  height: 168px;
  background-color: ${({ theme, variant }) =>
    variant === 'inDiet'
    ? theme.COLORS.STYLES.PRIMARY_LIGHT
    : theme.COLORS.STYLES.SECONDARY_LIGHT};
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled(TouchableOpacity)`
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const StyledIcon = styled(ArrowLeft).attrs<Props> (
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
  left: 8px;
`;

export const StyledNumber = styled.Text`
  ${({ theme }) => css`
    font-size: 30px;
    font-family: ${theme.FONTS.FAMILY.BOLD};
    /* font-size: ${theme.FONTS.SIZE.MD}; */
    color: ${theme.COLORS.BASE.GRAY_700};
  `}
`;

export const StyledText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONTS.FAMILY.REGULAR};
    font-size: ${theme.FONTS.SIZE.MD};
    color: ${theme.COLORS.BASE.GRAY_700};
  `}
`;

export const Content = styled.View`
  flex: 1;
  padding: 33px 24px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.FONTS.FAMILY.BOLD};
    /* font-size: ${theme.FONTS.SIZE.MD}; */
    color: ${theme.COLORS.BASE.GRAY_700};
  `}
  margin-bottom: 23px;
  text-align: center;
`;

export const BoxesContainer = styled.View`
  flex-direction: row;
`;