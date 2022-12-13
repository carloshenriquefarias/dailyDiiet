import {Container, SubTitle, Header, 
    // FeedbackTypeStyleProps, 
    TextBold } from './styles';

// type Props = FeedbackTypeStyleProps & {
//     title: string;
// }

export function Feedback(
    // { title, isInDiet }: Props
    ){
    return(
        <Container>
            <Header 
                // isInDiet={isInDiet}
            >
                Parabens! Continue assim!
            </Header>

            {/* { isInDiet ? */}
                <SubTitle >
                    Você continua <TextBold> dentro da dieta </TextBold>. Muito bem!
                </SubTitle>
            :
                <SubTitle>
                    Você 
                        <TextBold> 
                            saiu da dieta
                        </TextBold> 
                    dessa vez, mas continue sem esforçando e não desista!
                </SubTitle>
            {/* } */}

            {/* <Text isInDiet={isInDiet}>
                {title}                
            </Text>            */}
            
        </Container>        
    )
}
