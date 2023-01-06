// import { Container, Title, Text, Informations, Content, ButtonHalfStyleProps } from "./styles";

// type Props = {     
//     type?: ButtonHalfStyleProps;
//     title?: string;
//     text: string;
// }

// export function InfoStatistics ({ title, type, text = 'PRIMARY', ...rest }: Props){
//   return (
//     <>
//         <>    
//             <Container>      
//                 <Title>
//                     {title}                
//                 </Title>

//                 <Text>
//                     {text}                
//                 </Text>
//             </Container>   

//             <Container>      
//                 <Title>
//                     {title}                
//                 </Title>

//                 <Text>
//                     {text}                
//                 </Text>
//             </Container>
        
//         </>

//         <Content>
//             <Informations type="PRIMARY">
//                 <Title>
//                     {title}                    
//                 </Title>

//                 <Text>
//                     Refeições dentro da dieta
//                 </Text>
//             </Informations>

//             <Informations type="SECONDARY">
//                 <Title>
//                     {/* {title} */}
//                     10
//                 </Title>

//                 <Text>
//                     Refeições fora da dieta
//                 </Text>
//             </Informations>
//         </Content>
//     </>
    
    
//   )
// }

import { DietVariant } from '@screens/Home';
import { Container, StyledNumber, StyledText } from './styles';

type Props = {
  variant?: DietVariant;
  value: number;
  title: string;
};

export function InfoStatistics({ value, title, variant }: Props) {
  return (
    <Container variant={variant}>
        
        <StyledNumber>
            {value}
        </StyledNumber>

        <StyledText>
            {title}
        </StyledText>

    </Container>
  );
}