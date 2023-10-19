
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import Carros from '../screens/carros/Carros'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Carros'>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Carros" component={Carros} />
        </Drawer.Navigator>
    )
}