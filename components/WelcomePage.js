import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,Image, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
export default function WelcomePage(props) {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#009387'}}>
      <Animatable.View style={{flex:2,backgroundColor:'#009387',alignItems:'center',justifyContent:'center'}}>
         <TouchableOpacity>
         <Animatable.Image animation="bounceIn" style={{width:50,height:50,borderRadius:30}} source={require("../assets/Title.png")}/>
          </TouchableOpacity>
      </Animatable.View>
      <Animatable.View animation="fadeInUpBig" style={{flex:1,backgroundColor:'#fff',borderTopLeftRadius:50,borderTopRightRadius:50}}>
        <TouchableOpacity
         onPress={()=>props.navigation.navigate('Login')}
          >
        <Text style={{padding:90,fontSize:25,color:'black'}}>Login to Supreme! </Text>  
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
