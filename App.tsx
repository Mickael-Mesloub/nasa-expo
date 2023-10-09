import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import AppNavigation from './src/navigation/AppNavigation';
import SafeViewAndroid from './src/components/SafeViewAndroid';

const App = () => {
  return (
    <SafeAreaProvider style={SafeViewAndroid.AndroidSafeArea}>
      <PaperProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
