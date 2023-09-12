import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import MeuComponete from './COMPONETES/MeuComponete';
import MinMax from './COMPONETES/MinMax';
import MeuComponete1 from './COMPONETES/MeuComponente1';
import NumeroAleatorio from './COMPONETES/NumeroAleatorio';
import Botao from './COMPONETES/Botao';
import Contador from './COMPONETES/Contador';
import DigiteSeuNome from './COMPONETES/DigiteSeuNome';
import Pai from './cominica-direta/Pai';
import BiscoitoDaSorte from './COMPONETES/BiscoitoDaSorte';
import Profile from './COMPONETES/Profile';
import Cronometro from './COMPONETES/Cronometro';




export default function App() {
  return (


    <View style={styles.container}>
      {/* <NumeroAleatorio min={0} max={60}/> */}

      {/* <DigiteSeuNome/> */}
      {/* <Pai/> */}
      {/* <BiscoitoDaSorte/>  */}
      {/* <Profile/> */}
      <Cronometro/>
      {/* <Botao/> */}
      {/* <Contador/> */}

      {/* <MeuComponete/> */}
      {/* <MinMax min='10' max='20' /> */}

      {/* <Image
        source={require('./assets/favicon.png',)}
        style={{ width: 200, height: 200 }}
      /> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
