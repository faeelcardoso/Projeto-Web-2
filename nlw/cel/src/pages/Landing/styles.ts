import { StyleSheet, RecyclerViewBackedScrollView } from 'react-native'

// Estudar dps sobre Styled Components

const styles = StyleSheet.create({
    container: {
        flex: 1, // parar pegar a área toda do cel
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        padding: 40
    },
    banner: { // a img sempre buga, é bom colocar um width nela 100%
        width: '100%',
        resizeMode: 'contain' // ele ajusta a img automaticamente
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },

    button: {
        height: 150,
        width: '48%', // para dar um espaçamento de 2% para cada botão
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5'
    },

    buttonSecondary: {
        backgroundColor: '#04d361'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        marginTop: 40
    }
})

export default styles;