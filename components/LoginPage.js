import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,Image, Text, View, Button, SafeAreaView , TouchableHighlight, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

export default function LoginPage(props){
    return (
        <View style={{flex:1}}>
            <Button title="Next Page" onPress={()=>props.navigation.navigate('Home')}></Button>
        </View>
    );
} 