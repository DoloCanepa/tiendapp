import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Categories, Product, Products } from './screens';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigator from './navigation';

export default function App() {
  const  [loaded] = useFonts({
    'Hind-Regular': require('../assets/fonts/Hind-Regular.ttf'),
    'Hind-Bold': require('../assets/fonts/Hind-Bold.ttf'),
    'Hind-Light': require('../assets/fonts/Hind-Light.ttf'),
    'Hind-Medium': require('../assets/fonts/Hind-Medium.ttf'),
    'Hind-SemiBold': require('../assets/fonts/Hind-SemiBold.ttf'),
  })

  if (!loaded) {
    return (
      <View styles={styles.container}>
        <ActivityIndicator color="#d279a6" size="large" />
      </View>
    )
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
