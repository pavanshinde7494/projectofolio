import React , {useState} from 'react'

import { Picker } from '@react-native-picker/picker';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { Text ,View  ,StyleSheet , Button, TouchableNativeFeedback, TextInput} from 'react-native'
import Colors from '../../constants/Colors';




export default function ProfileEditScreen(props) {
    props.navigation.setOptions({
        
        headerRight : ()=>{
            return (
                <Ionicons 
                    name="save" 
                    size={24} 
                    style={{marginRight : 10}}
                    color="white" 
                    onPress={()=>{  
                        //Logic to Edit Profile
                        props.navigation.navigate('ProfileScreen');
                    }}
                />
            )
        }
    });


    const [github,setGithub] = useState('All');
    const [linkedin,setLinkedin] = useState('All');
    const [mobile,setMobile] = useState('All');

    
    return (
        <View>
            <View style={styles.container}> 
                <View style={styles.title}>
                    <Text style={styles.titleContent} >GitHub Profile</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        onChangeText={(text)=>{
                            setGithub(text);
                        }}
                    />
                </View>
                 
            </View>     
            
               


            <View style={styles.container}> 
                <View style={styles.title}>
                    <Text style={styles.titleContent} >Linkedin Profile</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        onChangeText={(text)=>{
                            setLinkedin(text);
                        }}
                    />
                </View>
                 
            </View>


            <View style={styles.container}> 
                <View style={styles.title}>
                    <Text style={styles.titleContent} >Mobile No.</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        onChangeText={(text)=>{
                            setMobile(text);
                        }}
                    />
                </View>
                 
            </View>
                

        </View>
        
    );
}


const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginHorizontal : 30,
        marginTop : 30
    },
    title : {
        width : '30%'
    },
    titleContent : {
        fontFamily : 'open-sans-bold',
        fontSize : 15,
        color : '#888'
    },
    input : {
        width : '70%',
        padding : 10,
        backgroundColor : 'white',
    },
    buttonContainer : {
        flexDirection : 'row',
        alignContent : 'center',
        justifyContent : 'space-evenly',
        backgroundColor : Colors.accent,
        marginHorizontal : '35%',
        paddingVertical : 10,
        marginTop : 40,
        borderRadius : 10,
        elevation : 5,
        overflow : 'hidden'
    },
    bottonText : {
        fontFamily : 'open-sans-bold',
        color : 'white',
        fontSize : 20,
        
    } 
})