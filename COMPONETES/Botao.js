import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Botao = () => {


    function executarBotao2() {
        alert('Botao 2')
    }

    return (
        <View>
            <Text>Botões</Text>
            <Button

                title='clique aquii'
                onPress={executarBotao2}

            />
        </View>
    )
}

export default Botao

const styles = StyleSheet.create({
    texto: {
        fontSize: 20
    }
})