
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import Carros from '../screens/carros/Carros'
import StackPessoa from '../screens/pessoas/StackPessoa'
import StackPessoaAsync from '../screens/asyncstorage/StackPessoaAsync'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Carros'>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Carros" component={Carros} />
            <Drawer.Screen name="Pessoas" component={StackPessoa} />
            <Drawer.Screen name="PessoasAsyncStorage" component={StackPessoaAsync} />
            <Drawer.Screen name="Formulario" component={StackPessoa} />
        </Drawer.Navigator>
    )
}