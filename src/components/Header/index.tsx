import {ContainerGlobal, Container, Content, Icon, ContentTitle, Person, Title } from './styles';
// import { Image} from "react-native";

export function Header (){    

    return(
        <ContainerGlobal>
            
            <Container>

                <Content>

                    <Icon /> 

                    <ContentTitle>

                        <Title>
                            Daily
                        </Title>

                        <Title>
                            Diet
                        </Title>

                    </ContentTitle>

                </Content>
                
            </Container>
            
            <>                
                <Person/>             
            </>
           
            
        </ContainerGlobal>
        
        
    )
}
