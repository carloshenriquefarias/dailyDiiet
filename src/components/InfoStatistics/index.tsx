import { Container, Title, Text, Informations, Content } from "./styles";

export function InfoStatistics (){
  return (
    <>    
        <Container>      
            <Title>
                {/* {title} */}
                22
            </Title>

            <Text>
                Melhor sequencia de pratos dentro da dieta
            </Text>
        </Container>

        <Container>
            <Title>
                {/* {title} */}
                109
            </Title>

            <Text>
                Refeições registradas
            </Text>
        </Container>

        <Content>
            <Informations>
                <Title>
                    {/* {title} */}
                    99
                </Title>

                <Text>
                    Refeições dentro da dieta
                </Text>
            </Informations>

            <Informations>
                <Title>
                    {/* {title} */}
                    10
                </Title>

                <Text>
                    Refeições fora da dieta
                </Text>
            </Informations>
        </Content>
        
    </>
    
  )
}