import {Container, Icon, Title, Date, Hour, Content, Divider } from './styles';
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    title: string;
}

export function MealList({title, ...rest}: Props ){
    return(
        <Container {...rest}>
            <Date>
                12/12/2022
            </Date>
            <Content>
                <Hour>
                    10:52
                </Hour>
                <Divider>
                    |
                </Divider>
                <Title>
                    {title}
                </Title>
                <Icon/>
            </Content>           
        </Container>
    );
}