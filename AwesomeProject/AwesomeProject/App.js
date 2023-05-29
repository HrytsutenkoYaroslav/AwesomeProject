import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View } from 'react-native';
import RegistrationScreen from "./Screens/RegistrationScreen"
export default function App() {
  return (
    <ImageBackground
      source={require('./PhotoBG.png')}
      style={styles.backgroundImage}
    >
    <View style={styles.container}>
  
      <RegistrationScreen />
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  
});
