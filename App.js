import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from '@expo-google-fonts/manrope';
import SplashScreen from './components/Splash/SplashScreen';
import LoadingScreen from './components/Splash/LoadingScreen';
import RootContainer from './components/Root/RootContainer';
export default function App() {
  let [fontsLoaded] = useFonts({
    Manrope_200ExtraLight,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });
  return (
    <View style={{height:"100%",width:"100%"}}>
    {!fontsLoaded ? <LoadingScreen/> : <RootContainer/>}  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    
  },
});
