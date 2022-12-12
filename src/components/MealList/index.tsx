import { Container, Title, Date, Hour, Content, Divider, SubContainer, SubContent} from './styles';
import { TouchableOpacityProps } from "react-native";
import { Ball } from '@components/Ball';

type Props = TouchableOpacityProps & {
    date: string;
    hour: string;
    title: string;      
}

export function MealList({date, hour, title}: Props ){
    return(
        <Container>

            <Date>
                {date}
            </Date>

            <SubContainer>                

                <Content>

                    <SubContent>

                        <Hour>
                            {hour}
                        </Hour>

                        <Divider>
                            |
                        </Divider>

                        <Title>
                            {title}
                        </Title>

                    </SubContent>                    

                    <Ball/>
                    
                </Content> 

            </SubContainer>
                      
        </Container>
    );
}