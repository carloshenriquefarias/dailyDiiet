import { Container, Title, Date, Hour, Content, Divider, SubContainer} from './styles';
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
                    <Hour>
                        {hour}
                    </Hour>

                    <Divider>
                        |
                    </Divider>

                    <Title>
                        {title}
                    </Title>

                    <Ball/>
                    
                </Content> 

            </SubContainer>
                      
        </Container>
    );
}