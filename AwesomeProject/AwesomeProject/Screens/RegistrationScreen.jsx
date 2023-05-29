import React, { useState } from 'react';
import { View, Text, Image,  StyleSheet, TextInput, TouchableOpacity, } from 'react-native';

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
    
      <View style={styles.RegContainer}>
        <View style={styles.imageContainer}>
        <Image source={require('../Rectangle22.png')} style={styles.image} />
      </View>
      <Text style={styles.titleText}>Реєстрація </Text>
        <TextInput
          placeholder="    Логін"
          value={name}
          onChangeText={handleNameChange}
          style={styles.input}
        />
        <TextInput
          placeholder="    Адреса електронної пошти"
          value={email}
          onChangeText={handleEmailChange}
          style={styles.input}
        />
        <TextInput
          placeholder="    Пароль"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity
        title="Зареэструватися" 
        onPress={handleRegistration} 
        style={styles.button}>
          <Text style={styles.text}>Зареэструватися</Text >
        </TouchableOpacity>

        <TouchableOpacity  
         style={styles.loginLink}>
          <Text >Вже є акаунт? Увійти</Text >
          </TouchableOpacity>
      </View>
    
  );
};
const styles = StyleSheet.create({
  
  RegContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 263,
    borderTopLeftRadius: 25, 
    borderTopRightRadius: 25,
    position: 'relative',
  },
  imageContainer: {
    position: 'absolute',
    top: '0%',
    left: '50%',
    transform: [{ translateX: -60 }, { translateY: -60 }],
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  text: {

    color: '#FFFFFF',
textAlign: "center",
  },
  titleText: {
marginBottom: 17,
marginTop: 32,
    color: '#212121',
textAlign: "center",
  },
  input: {
    marginLeft: 16,
    marginRight: 16,
    height: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    marginTop: 16,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  button: {
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    textAlign: "center",
    justifyContent: "center",
   marginLeft: 16,
   marginTop: 43,
   marginRight: 16,
   height: 51,
   
   
  },
  loginLink: {
    paddingBottom: 78,
    paddingTop: 16,
    alignItems: 'center',
    color: '#1B4371',
    backgroundColor: '#F6F6F6'
  }
});


export default RegistrationScreen;