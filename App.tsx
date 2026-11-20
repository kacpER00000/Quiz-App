import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/root_navigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} edges={['top','bottom','left','right']}>
        <RootNavigator/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

