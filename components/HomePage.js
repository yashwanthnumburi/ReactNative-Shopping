import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,Text, View, FlatList,Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ViewItems from './ViewItems';
import ScanItem from './ScanItem';
function Feed(props) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed!</Text>
        <Button title="Navigate to View Items" onPress={()=>props.navigation.navigate('ViewItems')}></Button>
      </View>
    );
  }
  
  const Tab = createMaterialBottomTabNavigator();
  
  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="blue"
        inactiveColor="black"
        labelStyle={{ fontSize: 12 }}
        barStyle={{ backgroundColor: 'white' ,height:100}}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Add Item',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="ViewItems"
          component={ViewItems}
          options={{
            tabBarLabel: 'View Items',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ScanItem}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
export default function HomePage(props){
    return (
        <MyTabs />
    );
} 


