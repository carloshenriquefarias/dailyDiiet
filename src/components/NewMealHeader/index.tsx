import { Container, Title, IconHeading } from "./styles";

type HeaderProps = {
  title: string,  
};

export function NewMealHeader ({ title}: HeaderProps){
  return (
    <Container>  
      <IconHeading/>      
      <Title>
        {title}
        {/* Nova Refeição */}
      </Title>
    </Container>
  )
}