import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import GiveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

function GiveClasses() {
    const { goBack } = useNavigation() // para voltar para tela anterior

    function handleNavitagateBack() {
        goBack()
    }
    
    return (
        <View style={styles.container} >
            <ImageBackground resizeMode='contain' source={GiveClassesBgImage} style={styles.content}>

                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar você tem que se cadastrar na nossa plataforma web!
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavitagateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

// quando colocar uma imagem e colocar dentro dela vários elementos, usar ImageBackground
// com o resizeMode=contain os elementos dão uma apertada pra caber tudo na tela
export default GiveClasses