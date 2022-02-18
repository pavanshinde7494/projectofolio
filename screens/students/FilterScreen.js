import React , {useState} from 'react'

import { Picker } from '@react-native-picker/picker';

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { Text ,View  ,StyleSheet , Button, TouchableNativeFeedback} from 'react-native'
import Colors from '../../constants/Colors';




export default function FilterScreen(props) {
    props.navigation.setOptions({
        headerLeft : ()=>{
            return (
                <Feather 
                    name="menu" 
                    size={24} 
                    color="white" 
                    style={{marginLeft : 10}}
                    onPress={()=>{
                        props.navigation.toggleDrawer();
                    }}
                />
            )
        },
        headerRight : ()=>{
            return (
                <Ionicons 
                    name="save" 
                    size={24} 
                    style={{marginRight : 10}}
                    color="white" 
                    onPress={()=>{  
                        //Logic to save filters
                        props.navigation.navigate('ProjectTabNavigator');
                    }}
                />
            )
        }
    });


    const [batch,setBatch] = useState('All');
    const [yrOfStudy,setYrOfStudy] = useState('All');
    const [guide,setGuide] = useState('All');
    const [domain,setDomain] = useState('All');

    
    return (
        <View>
            <View style={styles.container}> 
                <View style={styles.title}>
                    <Text style={styles.titleContent} >Batch</Text>
                </View>
                <Picker
                    style={styles.picker}
                    selectedValue={batch}
                    onValueChange={(itemValue)=>{
                        return setBatch(itemValue)
                        
                    }}
                >
                    <Picker.Item label='All' value='All'/>
                    <Picker.Item label='2019' value='2019'/>
                    <Picker.Item label='2020' value='2020'/>
                    <Picker.Item label='2021' value='2022'/>
                    <Picker.Item label='2023' value='2023'/>

                </Picker>
            </View>        


            <View style={styles.container}> 
                <View style={styles.title}>
                    <Text style={styles.titleContent} >Year Of Study</Text>
                </View>
                <Picker
                    style={styles.picker}
                    selectedValue={yrOfStudy}
                    onValueChange={(itemValue)=>{
                        return setYrOfStudy(itemValue)
                        
                    }}
                >
                    <Picker.Item label='All' value='All'/>
                    <Picker.Item label='FY' value='FY'/>
                    <Picker.Item label='SY' value='SY'/>
                    <Picker.Item label='TY' value='TY'/>
                    <Picker.Item label='B.Tech' value='B.Tech'/>

                </Picker>
            </View>


            <View style={styles.container}> 
                <View style={styles.title}>
                    <Text style={styles.titleContent} >Guide</Text>
                </View>
                <Picker
                    style={styles.picker}
                    selectedValue={guide}
                    onValueChange={(itemValue)=>{
                        return setGuide(itemValue)
                        
                    }}
                >
                    <Picker.Item label='All' value='All'/>
                    <Picker.Item label='Dr. M. A. Shah (HOD)' value='Dr. M. A. Shah (HOD)'/>
                    <Picker.Item label='Dr. B. F. Momin' value='Dr. B. F. Momin'/>
                    <Picker.Item label='Mr. A.  R. Surve' value='Mr. A.  R. Surve'/>
                    <Picker.Item label='Dr. N. L. Gavankar' value='Dr. N. L. Gavankar'/>
                    <Picker.Item label='Ms. N. L. Mudegol' value='Ms. N. L. Mudegol'/>
                    <Picker.Item label='Mr. K. P. Kamble' value='Mr. K. P. Kamble'/>
                    <Picker.Item label='Mr. S. S. Sontakke' value='Mr. S. S. Sontakke'/>
                    <Picker.Item label='Ms. P. D. Mundada' value='Ms. P. D. Mundada'/>
                    <Picker.Item label='Ms. A. S. Pawar' value='Ms. A. S. Pawar'/>
                    <Picker.Item label='Mr. S. D. Pujari' value='Mr. S. D. Pujari'/>
                    <Picker.Item label='Miss.S. S. Rokade' value='Miss.S. S. Rokade'/>
                    <Picker.Item label='Mr. A. A. Urunkar' value='Mr. A. A. Urunkar'/>

                </Picker>
            </View>

            <View style={styles.container}> 
                <View style={styles.title}>
                    <Text style={styles.titleContent} >Domain</Text>
                </View>
                <Picker
                    style={styles.picker}
                    selectedValue={domain}
                    onValueChange={(itemValue)=>{
                        return setDomain(itemValue)
                        
                    }}
                >
                    <Picker.Item label='All' value='All'/>
                    <Picker.Item label='Web Dev' value='Web Dev'/>
                    <Picker.Item label='App Dev' value='App Dev'/>
                    <Picker.Item label='Blockchain' value='Blockchain'/>
                    <Picker.Item label='AI/ML' value='AI/ML'/>
                    <Picker.Item label='IOT' value='IOT'/>
                    <Picker.Item label='Other' value='Other'/>
                </Picker>
            </View>
                
            
            
            <View style={styles.buttonContainer}>
                <TouchableNativeFeedback 
                    onPress={()=>{
                        setBatch('All');
                        setDomain('All');
                        setGuide('All'),
                        setYrOfStudy('All');
                        props.navigation.navigate('ProjectTabNavigator');
                    }}
                >
                    <Text
                        style={styles.bottonText}
                    >Reset
                    </Text>
                </TouchableNativeFeedback>
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
    picker : {
        width : '70%',
        borderWidth : 4,
        backgroundColor : 'white',
        borderColor : 'black',
        color : '#777'
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