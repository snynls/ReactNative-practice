import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
  <Text style={{
        color:'white',
        fontWeight:'bold',
        fontSize: 32
      }}>My name is Samuel and am a React Native Developer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:   1,
    backgroundColor: 'cadetblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
