import {Container} from './styles';
import { TextInputProps, TextInput} from "react-native";
import {useTheme} from "styled-components/native";

// type Props = TextInputProps & {
//     inputRef?: React.RefObject<TextInput>
// }

export function Input(){

    const {COLORS} = useTheme()
   
    return(
        <Container   
            // ref={inputRef}
            placeholderTextColor={COLORS.BASE.GRAY_300}     
            // {...rest}
        />
    );
}