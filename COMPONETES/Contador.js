import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Contador() {
    const [contador, setContador] = useState(0);

    const inc = () => {
        setContador(contador + 1);
    };

    const dec = () => {
        setContador(contador - 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>VOLUME</Text>
            <Text style={styles.text}>{contador}</Text>
            <View style={styles.botao}>
                <Button title='+ INCREMENTAR' onPress={inc} />
                <Button title='- DECREMENTAR' onPress={dec} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 30,
    },

    botao: {
        margin: 10,
    }
})