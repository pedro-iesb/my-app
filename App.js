import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MeuComponete from './COMPONETES/MeuComponete';

export default function App() {
  return (
    <View style={styles.container}>

      <MeuComponete/>
      
      <Image
        source={{
          uri: 'data:image/png;base64,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',
        }}
        style={{ width: 200, height: 200 }}
      />

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
