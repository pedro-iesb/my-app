import { createStackNavigator } from '@react-navigation/stack'
import FormPessoa from '../pessoas/FormPessoa.js'
import ListPessoa from '../pessoas/ListPessoa.js'

const Stack = createStackNavigator()

export default function StackPessoa() {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='ListPessoa'
        >

            <Stack.Screen name='ListPessoa' component={ListPessoa} />
            <Stack.Screen name='FormPessoa' component={FormPessoa} />

        </Stack.Navigator>

    )
}