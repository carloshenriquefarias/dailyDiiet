import {Containers, Container, Content, Icon, ContentTitle, Person, Title } from './styles';

export function Header (){
    return(
        <Container>
            <Containers>
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
                {/* <Person /> */}
            </Containers>
            
            <>
                <Person/>
            </>
           
            
        </Container>
        
        
    )
}
