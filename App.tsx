import 'react-native-gesture-handler'
import Game from './src/components/Game'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';



const App = ()=> {

  return (
    <GestureHandlerRootView style={{flex :1}}>
    <Game />
    <StatusBar style="auto" />
    </GestureHandlerRootView>
   
  )
}

export default App;