import {Text, View} from 'react-native'

import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import ProjectListScreen from "../screens/students/ProjectListScreen";
import ProjectDetailScreen from "../screens/students/ProjectDetailScreen";
import ProfileScreen from '../screens/students/ProfileScreen';
import ContributorProfile from '../screens/students/ContributorProfile';
import ProfileEditScreen from '../screens/students/ProfileEditScreen'
import AddProjectScreen from '../screens/students/AddProjectScreen'
import Login from '../screens/Login';
import Register from '../screens/Register';
import ProjectQueueScreen from '../screens/professor/ProjectQueueScreen';
import ProjectDetailScreenProfessor from '../screens/professor/ProjectDetailScreenProfessor';
import ApprovedProjectList from '../screens/professor/ApprovedProjectList'

import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Colors from "../constants/Colors";
import FilterScreen from '../screens/students/FilterScreen';
import Logout from '../screens/Logout';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();


const config = {
    headerTintColor : 'white',
    headerStyle : {
        backgroundColor : Colors.primary,
    },
    headerTitleStyle : {
        fontFamily : 'open-sans-bold'
    },
    headerBackTitleStyle :{ 
        fontFamily : 'open-sans'
    }
} 


const ProjectListNavigator  = ()=>{
    return (
        <Stack.Navigator
            initialRouteName="ProjectList"
            screenOptions={config}
        >
            <Stack.Screen 
                name="ProjectList" 
                component={ProjectListScreen}
                options={{
                    headerTitle : 'Project List'
                }}
            />
            <Stack.Screen  
                name="ProjectDetail" 
                component={ProjectDetailScreen}
                options={{
                    headerTitle : 'Project Title'
                }}
            />
            <Stack.Screen  
                name="ContributorProfile" 
                component={ContributorProfile}
                options={{
                    headerTitle : 'Profile'
                }}
            />
           
        </Stack.Navigator>
    )
}

const FavouriteNavigator = ()=>{
    return (
        <Stack.Navigator
            screenOptions={config}
        >
        <Stack.Screen  
                name="FavouriteProject" 
                component={ProjectListScreen}
                options={{
                    headerTitle : 'Favourites'
                }}
            />
        </Stack.Navigator>
    )
}


const ProjectTabNavigator = ()=>{
    return (
        <Tab.Navigator
            activeColor='white'
            shifting={true}
            inactiveColor='#888' 
            style={{
                backgroundColor : Colors.accent
            }}

        >
            <Tab.Screen 
                name="ProjectListNavigator"
                component={ProjectListNavigator}
                options={{
                    tabBarIcon : (tabInfo)=>{
                        return <FontAwesome name="list-alt" size={24} color= "white" />
                    },
                    tabBarLabel : (
                        <Text 
                            style={{
                                fontFamily : 'open-sans'
                            }}
                        >
                            List
                        </Text>
                    ) ,
                    tabBarColor : Colors.accent,
                }}
                
            />
            <Tab.Screen
                name="FavouriteNavigator"
                component={FavouriteNavigator}
                options={{
                    tabBarIcon : (tabInfo)=>{
                        return <MaterialIcons name="favorite" size={24} color= "white"  />
                    },
                    tabBarLabel : (
                        <Text 
                            style={{
                                fontFamily : 'open-sans'
                            }}
                        >
                            Favourite
                        </Text>
                    ) ,
                    tabBarColor : Colors.primary,
                }}
            />
        </Tab.Navigator>
    )
}


const FilterScreenNavigator = ()=>{
    return (
        <Stack.Navigator
            screenOptions={config}
        >
            <Stack.Screen
                name='FilterScreen'
                component={FilterScreen}
                options={{
                    headerTitle : 'Apply Filter'
                }}
            />
        </Stack.Navigator>
    )
}

const ProfileScreenNavigator = ()=>{
    return (
        <Stack.Navigator
            screenOptions={config}
            initialRouteName='ProfileScreen'
        >
            <Stack.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{
                    headerTitle : 'Profile'
                }}
            />
            <Stack.Screen
                name='ProfileEditScreen'
                component={ProfileEditScreen}
                options={{
                    headerTitle : 'Edit Profile'
                }}
            />
        </Stack.Navigator>
    )
}

const ProjectQueueNavigator = ()=>{
    return (<Stack.Navigator
        screenOptions={config}
    >
        <Stack.Screen 
            name='ProjectQueue'
            component={ProjectQueueScreen}
            options={{
                headerTitle : 'Project Queue'
            }}
        />
        <Stack.Screen 
            name='ProjectDetailScreenProfessor'
            component={ProjectDetailScreenProfessor}
            options={{
                headerTitle : 'Project Name'
            }}
        />
        <Stack.Screen 
            name='ProfileCheckByProfessor'
            component={ContributorProfile}
            options={{
                headerTitle : 'Project Name'
            }}
        />
    </Stack.Navigator>
    )
}


const ApprovedProjectNavigator = ()=>{
    return (
        <Stack.Navigator
            screenOptions={config}
        >
            <Stack.Screen
                name='ApprovedProjectList'
                component={ApprovedProjectList}
                options={{
                    headerTitle : 'Approved Project List'
                }}
            />
        </Stack.Navigator>
    )
}



const ProjectQueueTabNavigator = ()=>{
    return (
        <Tab.Navigator
            activeColor='white'
            shifting={true}
            inactiveColor='#888' 
            style={{
                backgroundColor : Colors.accent
            }}
        >
            <Tab.Screen
                name='ProjectQueueNavigator'
                component={ProjectQueueNavigator}
                options={{
                    tabBarIcon : (tabInfo)=>{
                        return <MaterialIcons name="queue" size={24} color="white" />
                    },
                    tabBarLabel : (
                        <Text 
                            style={{
                                fontFamily : 'open-sans'
                            }}
                        >
                            Queue
                        </Text>
                    ) ,
                    tabBarColor : Colors.accent,
                }}
            />
            <Tab.Screen
                name='ApprovedProjectNavigator'
                component={ApprovedProjectNavigator}
                options={{
                    tabBarIcon : (tabInfo)=>{
                        return <MaterialIcons name="approval" size={24} color= "white"  />
                    },
                    tabBarLabel : (
                        <Text 
                            style={{
                                fontFamily : 'open-sans'
                            }}
                        >
                            Approved
                        </Text>
                    ) ,
                    tabBarColor : Colors.primary,
                }}
            />
        </Tab.Navigator>
    )
}


const LogoutNavigator = ()=>{
    return (
    <Stack.Navigator
        screenOptions={config}
    >
        <Stack.Screen 
            name='Logout'
            component={Logout}
            options={{
                headerTitle : 'Logout'
            }}
        />
    </Stack.Navigator>
    )
}


const DrawerNavigator = ()=>{
    return (
    <Drawer.Navigator
        initialRouteName='ProjectTabNavigator'
        screenOptions={{
            headerShown : false,
            drawerActiveBackgroundColor : Colors.primary,
            drawerActiveTintColor : 'white'
        }}
    >
        <Drawer.Screen 
            name='ProjectTabNavigator' 
            component={ProjectTabNavigator} 
            options={{
                drawerLabel : (metaData)=>{
                    return (

                    <View style={{flexDirection : 'row'}}>
                        <View style={{marginRight : 10}}>
                            <Octicons 
                                name="project" 
                                size={metaData.focused ? 20 : 15} 
                                color={metaData.focused ? 'white' : '#888'} 
                            />
                        </View>
                        
                        <Text
                            style={{
                                color : metaData.focused ? 'white' : '#888',
                                fontFamily : metaData.focused ? 'open-sans-bold' : 'open-sans'
                            }}  
                        >
                            Projects
                        </Text>
                    </View>
                    
                    )
                }
            }}
        />
        <Drawer.Screen 
            name='FilterScreenNavigator' 
            component={FilterScreenNavigator}
            options={{
                drawerLabel : (metaData)=>{
                    return (
                    <View style={{flexDirection : 'row'}}>
                        <View style={{marginRight : 10}}>
                            <Feather 
                                name="filter" 
                                size={metaData.focused ? 20 : 15} 
                                color={metaData.focused ? 'white' : '#888'} 
                            />
                        </View>
                        
                        <Text
                            style={{
                                color : metaData.focused ? 'white' : '#888',
                                fontFamily : metaData.focused ? 'open-sans-bold' : 'open-sans'
                            }}  
                        >
                           Filter
                        </Text>
                    </View>
                    )
                }
            }}
        />
        <Drawer.Screen 
            name='ProfileScreenNavigator' 
            component={ProfileScreenNavigator}
            options={{
                drawerLabel : (metaData)=>{
                    return (
                    <View style={{flexDirection : 'row'}}>
                        <View style={{marginRight : 10}}>
                            <AntDesign 
                                name="user" 
                                size={metaData.focused ? 20 : 15} 
                                color={metaData.focused ? 'white' : '#888'} 
                            />
                        </View>
                        
                        <Text
                            style={{
                                color : metaData.focused ? 'white' : '#888',
                                fontFamily : metaData.focused ? 'open-sans-bold' : 'open-sans'
                            }}  
                        >
                           Profile
                        </Text>
                    </View>
                    )
                }
            }}
        />
        <Drawer.Screen 
            name='ProjectQueueTabNavigator'
            component={ProjectQueueTabNavigator}
            options={{
                drawerLabel : (metaData)=>{
                    return (
                    <View style={{flexDirection : 'row'}}>
                        <View style={{marginRight : 10}}>
                            <MaterialIcons 
                                name="queue" 
                                size={metaData.focused ? 20 : 15} 
                                color={metaData.focused ? 'white' : '#888'} 
                            />
                        </View>
                        
                        <Text
                            style={{
                                color : metaData.focused ? 'white' : '#888',
                                fontFamily : metaData.focused ? 'open-sans-bold' : 'open-sans'
                            }}  
                        >
                           Project Queue
                        </Text>
                    </View>
                    )
                }
            }}
        />

        <Drawer.Screen 
            name='LogoutNavigator' 
            component={LogoutNavigator}
            options={{
                drawerLabel : (metaData)=>{
                    return (
                    <View style={{flexDirection : 'row'}}>
                        <View style={{marginRight : 10}}>
                            <MaterialIcons 
                                name="logout" 
                                size={metaData.focused ? 20 : 15} 
                                color={metaData.focused ? 'white' : '#888'} 
                            />
                        </View>
                        
                        <Text
                            style={{
                                color : metaData.focused ? 'white' : '#888',
                                fontFamily : metaData.focused ? 'open-sans-bold' : 'open-sans'
                            }}  
                        >
                           Logout
                        </Text>
                    </View>
                    )
                }
            }}
        />
        
    </Drawer.Navigator>)
}



const Navigator = ()=>{
    return(
    <Stack.Navigator
        screenOptions={{
            headerShown : false
        }}
        initialRouteName='Login'
    >
        <Stack.Screen
            name='Login'
            component={Login}
        />
        <Stack.Screen
            name='Register'
            component={Register}
        />
        <Stack.Screen
            name='DrawerNavigator'
            component={DrawerNavigator}
        />
    </Stack.Navigator>
    )
}

export default Navigator