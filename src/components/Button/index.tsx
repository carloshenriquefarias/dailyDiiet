import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title, IconHeading } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
        <IconHeading/>

        <Title>
            {title}
        </Title>        
    </Container>
  )
}

