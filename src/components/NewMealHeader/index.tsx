import { Container, Title, IconHeading, subContainer } from "./styles";

type HeaderProps = {
  title: string,  
};

export function NewMealHeader ({title}: HeaderProps){
  return (
    <Container>

      {/* <subContainer> */}
        <IconHeading/>
      {/* </subContainer>  */}
            
      <Title>
        {title}        
      </Title>

    </Container>
  )
}