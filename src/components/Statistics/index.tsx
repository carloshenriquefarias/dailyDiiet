import { TouchableOpacityProps } from 'react-native';
import { Container, StyledIcon, StyledNumber, StyledText } from './styles';
import { DietVariant } from '@screens/Home';

type Props = TouchableOpacityProps & {
  number: string;
  text: string;
  variant?: DietVariant;
};

export function Statistics({ number, text, variant, ...rest }: Props) {
  return (
    <Container variant={variant} {...rest}>

      {variant && <StyledIcon variant={variant} />}

      <StyledNumber>
        {number}        
      </StyledNumber>

      <StyledText>
        {text}
      </StyledText>

    </Container>
  );
}