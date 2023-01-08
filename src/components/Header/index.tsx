import {ContainerGlobal, Container, Content, Icon, ContentTitle, Person, Title, ProfileContainer, Profile } from './styles';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { useState } from 'react';
import { Camera, Plus } from 'phosphor-react-native';
// import { Image} from "react-native";

export function Header (){    
   
    const [userPhoto, setUserPhoto] = useState('https://github.com/JRSparrowII.png');  
    const [image, setImage] = useState(false);
    
    const PHOTO_SIZE = 33;

    async function handleUserPhotoSelected(){
        setImage(true);
        
        try {
          const photoSelected = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            aspect: [4, 4], //Tamanho da imagem
            allowsEditing: true, //Deixa o usuario editar a imagem
          });
      
          if(photoSelected.canceled) {
            return;
          }           

            setUserPhoto(photoSelected.assets[0].uri);
      
        } catch (error) {
          console.log(error)
          
        } finally {
          setImage(false)
        }
    }

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

            <ProfileContainer onPress={handleUserPhotoSelected}>
                {image ? (
                    <Profile
                        source={{ uri: userPhoto }}   
                        // size={33}                     
                    />
                ) : (
                    <Camera />
                )}
            </ProfileContainer>           
            
        </ContainerGlobal>
        
        
    )
}
