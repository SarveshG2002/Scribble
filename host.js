import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FormControl from './components/formInput';
import avatars from './components/avatar';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import RNFS from 'react-native-fs';

const HostScreen = ({ route }) => {
  
  useEffect(()=>{
    inittiate();
  },[])
  const inittiate = async ()=>{
    // console.log("this is host page");
    const storedData = await AsyncStorage.getItem('gameRooms');
    let rooms = storedData ? JSON.parse(storedData) : [];
    console.log("rooms",rooms[0].players)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    backgroundColor: '#2D9CDB',
    height: "100%",
  },
  header:{
    width:"100%",
    "padding":1,
    backgroundColor:"white",
  }
});

export default HostScreen;
