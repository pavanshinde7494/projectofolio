import React , {useCallback} from 'react'
import { StyleSheet, Text, View,Image, ScrollView , Linking ,Alert, TouchableNativeFeedback} from 'react-native'

import TechItem from '../../components/TechItem'

import Colors from '../../constants/Colors'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function ProjectDetailScreenProfessor(props) {


    const handlePress = useCallback(async (url) => {
        if (url != undefined) {
          await Linking.openURL(url);
        } else {
          Alert.alert(`Invalid Request` , 'Contributor has not provided URL for this');
        }
    }, []);

      props.navigation.setOptions({
      
          headerRight : ()=>{
              return (
                <AntDesign 
                    name="check" 
                    size={30} 
                    color='white'
                    style={{marginRight : 15}}
                    onPress = {()=>{}}
                />
            )
          }
      });

    return (
        <ScrollView>
          <View>
              <Image style={styles.image} source={{uri : 'https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png'}}/>
          </View>

          <View style={styles.container}>
            <View >
                <View style={styles.techContainer}>
                  <TechItem tech='react.js' />
                    <TechItem tech='node.js' />
                    <TechItem tech='HTML' />
                    <TechItem tech='Mongodb' />
                    <TechItem tech='Javascript' />
                </View>
            </View>
            
              <View style={styles.description}>
                <Text style={styles.descriptionContent}>
                  It is important to focus on the unique details of each project that showcases your skills and experience. Mention data related to the project, including details like the dollar value, length, scope, number of team members you managed, and the amount of revenue generated at the end of the project.
                </Text>
              </View>
              
          
              <View style={styles.contributorContainer}>
                <View style={styles.entity}>
                  <Text style={styles.entityTitle}>
                    Contributors : 
                  </Text>
                  <View style={{marginLeft : 5}}>
                    <TouchableNativeFeedback onPress={()=>props.navigation.navigate('ProfileCheckByProfessor')}>
                      <Text style={styles.entityContent}>
                        1. Pavan Shinde
                      </Text>
                    </TouchableNativeFeedback>
                    
                    <TouchableNativeFeedback onPress={()=>props.navigation.navigate('ProfileCheckByProfessor')}>
                      <Text style={styles.entityContent}>
                        2. Aashish Sutar
                      </Text>
                    </TouchableNativeFeedback>
                    <View style={styles.link}>
                      <AntDesign 
                        name="github" 
                        size={30} 
                        color="black" 
                        onPress={handlePress.bind(this,'https://github.com/')}
                      />
                    </View>
                  </View>
                  
                </View>
                <View style={styles.entity}>
                 
                  <View style={styles.link}>
                    <AntDesign 
                      name="link" 
                      size={30} 
                      color="black" 
                      onPress={handlePress.bind(this,undefined)}
                    />
                  </View>
                </View>
              </View>
          
          
          </View>
         
        </ScrollView>
    )
}


const styles = StyleSheet.create({
  container : {
    margin : 15,
    padding : 10,
    borderRadius : 15
},  
  image : {
      height : 250,
      width : '100%'
  },
  titleContainer : {
      justifyContent : 'center',
      alignItems : 'center',
      marginVertical :7  
  }
  ,
  title : {
      fontFamily : 'open-sans-bold',
      fontSize : 25  
  },
  techContainer:  {
      marginVertical : 5,
      flexDirection : 'row',
      alignItems:  'center',
      flexWrap: "wrap",
      width : '90%'
  },
  description : {
    marginHorizontal : 10,
    marginTop : 10
  },
  descriptionContent : {
    fontFamily : 'open-sans',
    fontSize : 18,
    textAlign : 'justify',
    color : '#777'
  },
  buttonContainer : {
      marginVertical : 5,
      width : '10%'
  },
  button : {
      flexDirection : 'row',
      width : '100%',
      alignItems:  'center',
      justifyContent: 'center'
  },
  contributorContainer : {
    elevation : 5,
    backgroundColor : 'white',
    flexDirection : 'row',
    marginBottom : 40,
    padding : 10,
    borderRadius : 10 
  },
  entity: {
    width : '50%',
    marginBottom : 10
  },
  entityTitle : {
    fontFamily : 'open-sans-bold',
    fontSize : 20,
    marginVertical : 10,
    color : '#888'
   },
   entityContent : {
     color : Colors.primary,
     fontFamily : 'open-sans'  ,
     fontSize : 16,
     marginVertical : 3
   },
   link : { 
      flex:  1,
      alignItems:'center' , 
      justifyContent : 'flex-end',
      marginTop : 15
  }
})