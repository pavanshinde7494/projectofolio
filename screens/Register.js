import React , {useState} from 'react'
import { Text, View ,TextInput ,StyleSheet,TouchableOpacity ,Image, ScrollView , Button} from 'react-native'
import Colors from '../constants/Colors'

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


export default function Register(props) {

  const [fname , setFame] = useState('');
  const [lname , setLname] = useState('');
  const [image , setImage] = useState(null);
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [batch , setBatch] = useState('');
  const [mob,setMob] = useState('');
  const [linkedin,setLinkedin] = useState('');
  const [github,setGithub] = useState('');


  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions!',
        'You need to grant camera permissions to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };

  const handleChoosePhoto = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
        return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    
    if(!result.cancelled){
        setImage(result.uri)
    }
  }
  return (
    <ScrollView>
        <View style={styles.container}>
          {/* Image */}
            <View style={{marginBottom :30 }}>
              <Image 
                  source={require('../assets/projectofolio.jpg')}
                  style={{height : 100 , width : 100}}
              />
            </View>

            <View style={{flexDirection : 'row'}}>
              {/* Fname */}
              <View style={{...styles.inputView , width : '50%',marginHorizontal : 2.5}} >
                  <TextInput  
                    style={styles.inputText}
                    placeholder="First Name" 
                    placeholderTextColor="#888"
                    value={fname}
                    onChangeText={(text)=>{setFame(text)}}
                  />
              </View>

              {/* Lname */}
              <View style={{...styles.inputView , width : '50%',marginHorizontal : 2.5}} >
                <TextInput  
                  style={styles.inputText}
                  placeholder="Last Name" 
                  placeholderTextColor="#888"
                  value={lname}
                    onChangeText={(text)=>{setLname(text)}}
                />
              </View>
            </View>


            {/* Profile Photo */}
            <View style={{flexDirection : 'row' , alignItems : 'center' , justifyContent : 'center',marginBottom : 10}}>
              <View style={{width : '50%' , paddingLeft : 20}}>
                  <Text
                    style={{fontFamily : 'open-sans-bold' , color : '#999' , fontSize : 15}}
                  >Profile Picture
                  </Text>
              </View>
              <View style={{...styles.selectImg , width : '50%'}}>
                {image  && <Image
                    source={{uri : image}}
                    style={{ width: 150, height: 100 }} 
                  />
                }
                <Button 
                  title='Choose Image'
                  color={Colors.accent}
                  onPress={handleChoosePhoto}
                />
              </View>
            </View>


            {/* Walchand Email ID */}
            <View style={styles.inputView} >
              <TextInput  
                style={{...styles.inputText , width : '120%'}}
                placeholder="Walchand Email Id" 
                placeholderTextColor="#888"
                value={email}
                    onChangeText={(text)=>{setEmail(text)}}
              />
            </View>

            {/* Password */}
            <View style={styles.inputView} >
              <TextInput  
                style={{...styles.inputText , width : '120%'}}
                placeholder="Password" 
                placeholderTextColor="#888"
                secureTextEntry={true}
                value={pass}
                onChangeText={(text)=>{setPass(text)}}
              />
            </View>

            <View style={{flexDirection : 'row'}}>
              {/* Batch */}
              <View style={{...styles.inputView , width : '50%',marginHorizontal : 2.5}} >
                  <TextInput  
                    style={styles.inputText}
                    placeholder="Batch" 
                    placeholderTextColor="#888"
                    value={batch}
                    onChangeText={(text)=>{setBatch(text)}}
                  />
              </View>

              {/* Mobile */}
              <View style={{...styles.inputView , width : '50%',marginHorizontal : 2.5}} >
                <TextInput  
                  style={styles.inputText}
                  placeholder="Mobile No." 
                  placeholderTextColor="#888"
                  value={mob}
                  onChangeText={(text)=>{setMob(text)}}
                />
              </View>
            </View>
            
            <View style={{flexDirection : 'row'}}>
              {/* Linkedin */}
              <View style={{...styles.inputView , width : '50%',marginHorizontal : 2.5}} >
                  <TextInput  
                    style={styles.inputText}
                    placeholder="LinkedIn Profile" 
                    placeholderTextColor="#888"
                    value={linkedin}
                    onChangeText={(text)=>{setLinkedin(text)}}
                  />
              </View>

              {/* Github */}
              <View style={{...styles.inputView , width : '50%',marginHorizontal : 2.5}} >
                <TextInput  
                  style={styles.inputText}
                  placeholder="Github Profile" 
                  placeholderTextColor="#888"
                  value={github}
                  onChangeText={(text)=>{setGithub(text)}}
                />
              </View>
            </View>
          <TouchableOpacity 
            style={styles.loginBtn}
            onPress={()=>{props.navigation.navigate('DrawerNavigator')}}
          >
              <Text style={{...styles.loginText ,color : 'white'}}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{props.navigation.navigate('Login')}}
            style={{marginBottom : 40 , marginTop : 10}}
          >
              <Text style={{...styles.loginText , color:'black'}}>Login</Text>
          </TouchableOpacity>
      
        
      </View>
    </ScrollView>
   
   
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 50,
    marginHorizontal :10  
  },
  inputView:{
    width:"100%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    fontFamily: 'open-sans'
  },
  loginBtn:{
    width:"80%",
    backgroundColor: Colors.primary,
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText : {
    fontFamily : 'open-sans' , 
    fontSize : 15,
  },
  selectImg : {
      width : '70%',
      padding : 10,
      justifyContent : 'center',
      alignItems : 'center',
  }
})
