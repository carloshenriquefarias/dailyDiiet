import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title} from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: JSX.Element;
}

export function Button({ title, type = 'PRIMARY', icon, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {icon}

      <Title type={type} hasIcon={!!icon}>
        {title}
      </Title>        
    </Container>
  )
}

