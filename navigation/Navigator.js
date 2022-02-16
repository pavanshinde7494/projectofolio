import {Text} from 'react-native'

import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import ProjectListScreen from "../screens/students/ProjectListScreen";
import ProjectDetailScreen from "../screens/students/ProjectDetailScreen";
import ProfileScreen from '../screens/students/ProfileScreen';
import ContributorProfile from '../screens/students/ContributorProfile';

import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Colors from "../constants/Colors";
import FilterScreen from '../screens/students/FilterScreen';

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
        >
            <Stack.Screen
                name='ProfileScreen'
                component={ProfileScreen}
                options={{
                    headerTitle : 'Profile'
                }}
            />
        </Stack.Navigator>
    )
}


const Navigator = ()=>{
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
                    <Text
                        style={{
                            color : metaData.focused ? 'white' : '#888',
                            fontFamily : metaData.focused ? 'open-sans-bold' : 'open-sans'
                        }}  
                    >
                        Project List
                    </Text>)
                }
            }}
        />
        <Drawer.Screen 
            name='FilterScreenNavigator' 
            component={FilterScreenNavigator}
            options={{
                drawerLabel : (metaData)=>{
                    return (
                    <Text
                        style={{
                            color : metaData.focused ? 'white' : '#888',
                            fontFamily : metaData.focused ? 'open-sans-bold' : 'open-sans'
                        }}  
                    >
                        Filter
                    </Text>)
                }
            }}
        />
        <Drawer.Screen 
            name='ProfileScreenNavigator' 
            component={ProfileScreenNavigator}
            options={{
                drawerLabel : (metaData)=>{
                    return (
                    <Text
                        style={{
                            color : metaData.focused ? 'white' : '#888',
                            fontFamily : metaData.focused ? 'open-sans-bold' : 'open-sans'
                        }}  
                    >
                        Profile
                    </Text>)
                }
            }}
        />
    </Drawer.Navigator>)
}

export default Navigator