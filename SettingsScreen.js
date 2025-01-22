import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [players, setPlayers] = useState('5');
  const [drawTime, setDrawTime] = useState('80');
  const [rounds, setRounds] = useState('3');
  const [hints, setHints] = useState('2');

  const handleCreateRoom = () => {
    // Handle the create room action here
    console.log("Room created with settings:", { players, drawTime, rounds, hints });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Game Settings</Text>

      <TextInput
        style={styles.input}
        placeholder="Number of Players"
        keyboardType="numeric"
        value={players}
        onChangeText={setPlayers}
      />

      <TextInput
        style={styles.input}
        placeholder="Draw Time (seconds)"
        keyboardType="numeric"
        value={drawTime}
        onChangeText={setDrawTime}
      />

      <TextInput
        style={styles.input}
        placeholder="Rounds"
        keyboardType="numeric"
        value={rounds}
        onChangeText={setRounds}
      />

      <TextInput
        style={styles.input}
        placeholder="Hints per Draw"
        keyboardType="numeric"
        value={hints}
        onChangeText={setHints}
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateRoom}>
        <Text style={styles.buttonText}>Create Room</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2D9CDB',
    height: '100%',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#2D9CDB',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default SettingsScreen;
