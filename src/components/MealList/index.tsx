import { Container, Title, Date, Hour, Content, Divider, SubContainer} from './styles';
import { TouchableOpacityProps } from "react-native";
// import { Ball } from '@components/Ball';

type Props = TouchableOpacityProps & {
    title: string;
}

export function MealList({title, ...rest}: Props ){
    return(
        <Container {...rest}>

            <Date>
                12/12/2022
            </Date>

            <SubContainer>                

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

                    {/* <Ball/> */}
                    
                </Content> 

            </SubContainer>
                      
        </Container>
    );
}