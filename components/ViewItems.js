import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,Text, View, FlatList,TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Card, ListItem, Button, Icon ,SearchBar } from 'react-native-elements'
const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
   ]
export default function ViewItems(){
    const [search,setSearchedData]=useState();
    const updateSearchedData = (search) => {
        setSearchedData(search);
      };
    return (
        <View>
          <SearchBar
        placeholder="Search Here..."
        onChangeText={updateSearchedData}
        value={search}
      />
        <Card
            title='Remotes'>
            <Text style={{ marginBottom: 10 }}>
                LG Remotes
        </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='VIEW NOW' />
        </Card>
        <Card
        title='Remotes'>
        <Text style={{ marginBottom: 10 }}>
            LG Remotes
    </Text>
        <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
    </Card>
    <Card
        title='Remotes'>
        <Text style={{ marginBottom: 10 }}>
            LG Remotes
    </Text>
        <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
    </Card>
    <Card
        title='Remotes'>
        <Text style={{ marginBottom: 10 }}>
            LG Remotes
    </Text>
        <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
    </Card>
    </View>
    );
}