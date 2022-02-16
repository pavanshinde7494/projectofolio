import React from 'react'
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'


import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


import { Feather } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function ContributorProfile(props) {
    
   
        return (
            <View style={styles.container}>
                
            <View style={styles.fst}>
                {/* Photo and profile linkedin, github */}
                <Image 
                    style={styles.image} 
                    source={{uri : 'https://hindi.cdn.zeenews.com/hindi/sites/default/files/2022/02/16/1049974-rohit-sharma.gif'}} 
                />
                <View style={styles.links}>
                    <View style={{...styles.iconContainer , marginLeft : 40}}>
                        <AntDesign name="github" size={40} color="white" />
                    </View>
                    <View style={styles.iconContainer}>
                        <Entypo name="linkedin" size={40} color="white" />
                    </View>
                        
                </View>
            </View>



      <View style={styles.snd}>
        {/* Name Batch */}
        <View style={styles.nameContainer}>
          <Text style={styles.name} >Pavan</Text> 
          <Text style={styles.surName}>Shinde</Text>
        </View>
        <Text style={styles.surName}>2023</Text>
      </View>


      <View style={styles.thr}>
        {/* Email and mobile no */}
          <View style={{marginVertical : 10}}>
            <Text style={styles.contact}>Contact</Text>  
          </View>
          <View style={{flexDirection : 'row' , justifyContent : 'space-evenly',alignItems : 'center',marginBottom : 20}}>
            <MaterialIcons name="email" size={40} color={Colors.accent} />
            <Entypo name="mobile" size={40} color={Colors.accent} />
          </View>
      </View>

      <View style={styles.forth}>
        {/* Projects List */}
        <Text style={styles.contact}>Projects</Text>  
        <ScrollView 
          style={{flexDirection : 'row'}}
          horizontal={true}
        >
            <View style={styles.projectContainer}>
              <Image 
                  style={styles.projectImage} 
                  source={{uri : 'https://hindi.cdn.zeenews.com/hindi/sites/default/files/2022/02/16/1049974-rohit-sharma.gif'}} 
              />
              <View >
                <Text style={styles.projectTitle} >Project 1</Text>
              </View>
            </View>
            <View style={styles.projectContainer}>
              <Image 
                  style={styles.projectImage} 
                  source={{uri : 'https://hindi.cdn.zeenews.com/hindi/sites/default/files/2022/02/16/1049974-rohit-sharma.gif'}} 
              />
              <View >
                <Text style={styles.projectTitle} >Project 1</Text>
              </View>
            </View>
            <View style={styles.projectContainer}>
              <Image 
                  style={styles.projectImage} 
                  source={{uri : 'https://hindi.cdn.zeenews.com/hindi/sites/default/files/2022/02/16/1049974-rohit-sharma.gif'}} 
              />
              <View >
                <Text style={styles.projectTitle} >Project 1</Text>
              </View>
            </View>
            <View style={styles.projectContainer}>
              <Image 
                  style={styles.projectImage} 
                  source={{uri : 'https://hindi.cdn.zeenews.com/hindi/sites/default/files/2022/02/16/1049974-rohit-sharma.gif'}} 
              />
              <View >
                <Text style={styles.projectTitle} >Project 1</Text>
              </View>
            </View>
            
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
      // margin : 10
    },  
    fst : {
      marginTop : 30,
      marginLeft :30, 
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-between'
    },
    image : {
      width : 125,
      height : 125,
      borderRadius : 62.5,
      marginRight : 10
    },
    links : {
      height : 70,
      paddingRight : 100 ,
      backgroundColor : Colors.accent, 
      borderTopLeftRadius : 35,
      borderBottomLeftRadius : 35,

      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'flex-start'
    },
    iconContainer : {
      marginHorizontal : 20
    },

    snd : {
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-between',
      marginHorizontal :40, 
    },
    nameContainer : {
      flexDirection : 'column',
    },
    name : {
      fontFamily : 'open-sans-bold',
      fontSize : 30,
      color : '#777'
    },
    surName : {
      fontFamily : 'open-sans',
      fontSize : 20,
      color : '#777'
    },
    thr : {
      marginHorizontal : 30,
      marginVertical : 20,
      // width : '100%',
      backgroundColor : 'white',
      borderRadius : 10,
      elevation : 5,
      padding : 10
    },
    contact : {
      fontFamily : 'open-sans-bold',
      fontSize : 25,
      textAlign : 'center',
      color : '#777'

    },
    forth : {
      marginHorizontal : 30,
      backgroundColor : 'white',
      borderRadius : 10,
      elevation : 5,
      padding : 10
    },
    projectContainer:{
      height : 100,
      width : 125,
      backgroundColor : Colors.accent,
      marginVertical : 20,
      borderRadius : 10,
      overflow : 'hidden',
      alignItems : 'center',
      marginHorizontal : 3
      
    },
    projectImage : {
      width : '100%',
      height : 75
    }
    ,projectTitle:{
      fontFamily : 'open-sans-bold',
      textAlign : 'center',
      color : 'white'
    }
}) 
