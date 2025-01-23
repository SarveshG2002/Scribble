import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FormControl from './components/formInput';
import avatars from './components/avatar';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import RNFS from 'react-native-fs';

const SettingsScreen = ({ route }) => {
  const { playerName,avatarId } = route.params;
  const [players, setPlayers] = useState('5');
  const [drawTime, setDrawTime] = useState('80');
  const [rounds, setRounds] = useState('3');
  const [hints, setHints] = useState('2');
  const navigation = useNavigation();
  const handleCreateRoom = async () => {
    // Handle the create room action here
    // console.log("Room created with settings:", { players, drawTime, rounds, hints });
    const newRoom = {
      roomId: Date.now(),
      total_players: players,
      draw_time: drawTime,
      rounds,
      hints,
      players:[
        {
          player_name:playerName,
          "player_avatar":avatarId
        }
      ],
      created_at: new Date().toISOString(),
    };
    try {
      // Fetch existing rooms
      const storedData = await AsyncStorage.getItem('gameRooms');
      let rooms = storedData ? JSON.parse(storedData) : [];
      
      console.log("existing rooms",rooms)
      // Add new room
      rooms = [];
      rooms.push(newRoom);
      
      // Save updated rooms
      await AsyncStorage.setItem('gameRooms', JSON.stringify(rooms));
      navigation.navigate('Host');
      console.log('Room created and saved:', newRoom);
    } catch (error) {
      console.error('Error saving room:', error);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.headingName}>Hello, {playerName}</Text>
        <Text style={styles.heading}>Select Settings</Text>

        <FormControl style={styles.margin10}
          placeholder="Number of Players"
          value={players}
          onChangeText={setPlayers}
          keyboardType="numeric"
        />

      <FormControl
        placeholder="Draw Time (seconds)"
        value={drawTime}
        onChangeText={setDrawTime}
        keyboardType="numeric"
      />

      <FormControl
        placeholder="Rounds"
        value={rounds}
        onChangeText={setRounds}
        keyboardType="numeric"
      />

      <FormControl
        placeholder="Hints per Draw"
        value={hints}
        onChangeText={setHints}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.createRoom} onPress={handleCreateRoom}>
                <Text style={styles.buttonText}>Create Room</Text>
              </TouchableOpacity>

        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2D9CDB',
    height: "100%",
  },
  loginContainer: {
    width: "100%",
    height: "68%",
    borderRadius: 10,
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
    paddingTop: 20,
    backgroundColor: "#124da5",
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
  },
  headingName: {
    color: 'white',
    fontSize: 30,
  },
  heading: {
    color: 'white',
    fontSize: 20,
  },
  createRoom: {
    marginTop: 25,
    backgroundColor: "#2D9CDB",
    padding: 10,
    borderRadius: 10,
  },
  margin10:{
    marginTop:'10',
    width: '50%',
    // backgroundColor:'red',
  },
  buttonText: {
    color: "white",
  },

});

export default SettingsScreen;
