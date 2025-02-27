import React, { useState,useEffect } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import avatars from './components/avatar';

// const av= avatars[0];
export default function App() {
  const [text, setText] = useState('');
  const [avatarCount,setAvatarCount] = useState(0);
  // let avatarCount = 0;
  const [avatar,setAvatar] = useState(avatars[avatarCount]);
  const navigation = useNavigation();
  useEffect(()=>{
    setAvatar(avatars[avatarCount]);
  },[avatarCount])
  
  const changeAvatar=(dir)=>{
    if(dir == "next"){
      if(avatarCount<(avatars.length-1)){
        setAvatarCount(avatarCount+1)
      }else{
        setAvatarCount(0)
      }
    }else{
      if(avatarCount>0){
        setAvatarCount(avatarCount-1)
      }else{
        setAvatarCount(avatars.length-1)
      }
    }
  }

  const handlePress = () => {
    navigation.navigate('Settings', { playerName: text,avatarId: avatarCount });  // Pass the player name as a parameter
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={text}
          onChangeText={setText}
        />

        <View style={styles.avatarContainer}>
          <TouchableOpacity style={styles.changeAvatar} onPress={() => changeAvatar('previous')}>
            <Text style={styles.buttonText}>&lt;&lt;</Text>
          </TouchableOpacity>
          <Image
            style={styles.image}
            source={avatar}
          />
          <TouchableOpacity style={styles.changeAvatar} onPress={() => changeAvatar('next')}>
            <Text style={styles.buttonText}>&gt;&gt;</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.createRoom} onPress={handlePress}>
          <Text style={styles.buttonText}>Create Room</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2D9CDB',
    height: "100%",
  },
  loginContainer: {
    width: "100%",
    height: "50%",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    backgroundColor: "#124da5",
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 100,
  },
  createRoom: {
    marginTop: 20,
    backgroundColor: "#2D9CDB",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  changeAvatar: {
    backgroundColor: "#2D9CDB",
    padding: 10,
    borderRadius: 10,
    width: 40,
    fontSize: 30,
    color: 'white',
    marginHorizontal: 10,
  },
});
