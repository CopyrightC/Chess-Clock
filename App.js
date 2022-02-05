import { StyleSheet, Text, View } from 'react-native';
import { TimerButton } from './components/button';
import { HomeScreen } from './components/HomeScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
