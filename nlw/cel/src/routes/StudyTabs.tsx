import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons' // pacote de ícones que eu posso utilizar

import TeacherList from '../pages/TeacherList'
import Favorites from '../pages/Favorites'

const { Navigator, Screen } = createBottomTabNavigator()

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0, // funciona como se fosse o shadow da web, tirar aquela sombra que quase a gente não vê, mas tem
                    shadowOpacity: 0,
                    height: 64
                },

                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },

                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20
                },

                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16
                },

                inactiveBackgroundColor: '#fafafc', // cor de fundo da aba quando ela não está selecionada
                activeBackgroundColor: '#ebebf5', // cor de fundo da aba quando ela está selecionada
                inactiveTintColor: '#c1bccc', // cor de fundo do texto quando a aba não está selecionada
                activeTintColor: '#32264d' // cor de fundo do texto quando a aba não está selecionada
            }}
        >
            <Screen 
                name="TeacherList" 
                component={TeacherList} 
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
                        )
                    }
                }}
            />

            <Screen 
                name="Favorites" 
                component={Favorites} 
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
                        )
                    }
                }}
                />
        </Navigator>
    )
}

export default StudyTabs