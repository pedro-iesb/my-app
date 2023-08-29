import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MeuComponete from './COMPONETES/MeuComponete';
import MinMax from './COMPONETES/MinMax';
import MeuComponete1 from './COMPONETES/MeuComponente1';
import NumeroAleatorio from './COMPONETES/NumeroAleatorio';



export default function App() {
  return (
    <View style={styles.container}>

      <NumeroAleatorio min={0} max={60}/> 

      <MeuComponete />
      <MinMax min='10' max='20' />

      <Image
        source={require('./assets/favicon.png',)}
        style={{ width: 200, height: 200 }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
