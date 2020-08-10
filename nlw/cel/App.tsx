import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo'

import {Archivo_400Regular, Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo'
import {Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins'

import AppStack from './src/routes/AppStack';

// AppLoading serve para mostrar tudo na tela normal antes mesmo de ter carregado. Como as fontes demoram carregar, isso ajuda

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if (!fontsLoaded) { // se as fontes não estiverem carregadas, mostrar o appLoading
    return <AppLoading />
  } else { // se n mostra a Lading
    return (
      <> 
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}