
import styled, { css } from 'styled-components/native';
import { Image, ImageProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DietVariant } from '@screens/Home';

type Props = {
  variant: DietVariant;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_100};
  margin: 15px;
`;

export const ContentButton = styled.View`
  /* flex: 1; */
  /* justify-content: center;
  align-items: center; */
  /* background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_100}; */
  margin-left: 20px;
  margin-right: 20px;
`;

export const Heading = styled.Text`
  ${({ theme,  }) => css`
    color: ${
      theme.COLORS.STYLES.PRIMARY_DARK
      // : theme.COLORS.STYLES.SECONDARY_DARK
      };
    font-family: ${theme.FONTS.FAMILY.BOLD};
    font-size: ${theme.FONTS.SIZE.XLG};
  `}
  margin-bottom: 8px;
`;

export const SubHeading = styled.View``;

export const Message = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_600};
    font-family: ${theme.FONTS.FAMILY.REGULAR};
    font-size: ${theme.FONTS.SIZE.LG};
  `}
  text-align: center;
`;

export const Strong = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.FAMILY.BOLD};
`;

export const StyledImage = styled(Image as new (props: ImageProps) => Image)`
  margin: 40px auto 32px;
`;

// export const StyledImage = styled.Image`
//   margin: 40px auto 32px;
// `;