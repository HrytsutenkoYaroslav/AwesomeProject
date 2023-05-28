import React, { useState } from 'react';
import { View,Text, ImageBackground, StyleSheet, TextInput, Button } from 'react-native';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleRegistration = () => {
    // Ваша логіка реєстрації тут, наприклад, відправка даних на сервер
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Очистити форму після реєстрації
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <ImageBackground
      source={require('../PhotoBG.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={handleNameChange}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button title="Register" onPress={handleRegistration} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    width:100,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
  },
});


export default RegistrationScreen;