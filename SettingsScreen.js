import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen = ({ route }) => {
  const { playerName } = route.params;
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
      <View style={styles.loginContainer}>
        <Text style={styles.headingName}>Hello, {playerName}</Text>
        <Text style={styles.heading}>Select Settings</Text>

        
        <View style={styles.formControl}>
          <View style={styles.formControlHeading}>
            <Text style={styles.HeadingHeading}>Number of Players</Text>
          </View>
          <View style={styles.formInputDiv}>
            <TextInput
              style={styles.formInput}
              placeholder="Number of Players"
              keyboardType="numeric"
              value={players}
              onChangeText={setPlayers}
            />
          </View>
        </View>

        <View style={styles.formControl}>
          <View style={styles.formControlHeading}>
            <Text style={styles.HeadingHeading}>Draw Time (seconds)</Text>
          </View>
          <View style={styles.formInputDiv}>
            <TextInput
              style={styles.formInput}
              placeholder="Draw Time (seconds)"
              keyboardType="numeric"
              value={drawTime}
              onChangeText={setDrawTime}
            />
          </View>
        </View>

        <View style={styles.formControl}>
          <View style={styles.formControlHeading}>
            <Text style={styles.HeadingHeading}>Rounds</Text>
          </View>
          <View style={styles.formInputDiv}>
            <TextInput
              style={styles.formInput}
              placeholder="Rounds"
              keyboardType="numeric"
              value={rounds}
              onChangeText={setRounds}
            />
          </View>
        </View>

        <View style={styles.formControl}>
          <View style={styles.formControlHeading}>
            <Text style={styles.HeadingHeading}>Hints per Draw</Text>
          </View>
          <View style={styles.formInputDiv}>
            <TextInput
              style={styles.formInput}
              placeholder="Hints per Draw"
              keyboardType="numeric"
              value={hints}
              onChangeText={setHints}
            />
          </View>
        </View>



        
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
    height: "50%",
    borderRadius: 10,
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
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
    marginTop: 20,
    backgroundColor: "#2D9CDB",
    padding: 10,
    borderRadius: 10,
  },
  formControl: {
    width: '80%',
    // padding:5,
    display: "flex",
    alignItems: "center",
    // textAlign: 'right',
    // backgroundColor: 'red',
  },
  formControlHeading: {
    width: '100%',
    display: 'flex',
    // paddingRight: '20',
    // paddingRight: 20,
  },
  formInputDiv: {
    width: '100%',
    display: 'flex',
    alignItems: "center",

  },
  formInput: {
    width: '100%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
  },
  HeadingHeading: {
    color: 'white',
    fontSize: 20,

  },
  buttonText: {
    color: "white",
  },

});

export default SettingsScreen;
