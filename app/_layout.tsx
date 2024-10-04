
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import 'react-native-reanimated';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();



export default function RootLayout() {

  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-Medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-Bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  });

 

  return (
    
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
       
      </Stack>
    
  );
}
