import { Container, Title, IconHeading, SubContainer } from "./styles";

type HeaderProps = {
  title: string,  
};

export function NewMealHeader ({title}: HeaderProps){
  return (
    <Container>

      <SubContainer>
        <IconHeading/>
      </SubContainer> 
            
      <Title>
        {title}        
      </Title>

    </Container>
  )
}