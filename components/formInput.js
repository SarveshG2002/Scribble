import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const FormControl = ({ placeholder, value, onChangeText, keyboardType }) => {
  return (
    <View style={styles.formControl}>
      <View style={styles.formControlHeading}>
        <Text style={styles.HeadingHeading}>{placeholder}</Text>
      </View>
      <View style={styles.formInputDiv}>
        <TextInput
          style={styles.formInput}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: '80%',
    display: "flex",
    alignItems: "center",
    marginTop: '15',
  },
  formControlHeading: {
    width: '100%',
    display: 'flex',
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
});

export default FormControl;
