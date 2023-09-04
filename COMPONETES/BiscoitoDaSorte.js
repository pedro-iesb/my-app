import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const BiscoitoDaSorte = () => {
    const [mensagem, setMensagem] = useState('');
    const [bloquearBotao, setBloquearBotao] = useState(false);
    const [imagemBiscoito, setImagemBiscoito] = useState(require('../assets/biscoito1.jpg'));

    const quebrarBiscoito = () => {
        const mensagens = [
            "Você será corno em breve!!",
            "O sucesso espera por você no final da jornada.",
            "A persistência é a chave para superar todos os obstáculos.",
            "Seu sorriso iluminará o dia de alguém hoje.",
            "Acredite em si mesmo e o mundo acreditará em você.",
            "Grandes aventuras estão à sua espera.",
            "A paciência é uma virtude que traz recompensas.",
            "Seja a mudança que você deseja ver no mundo.",
            "O amor é a resposta para todas as perguntas.",
            "Sua criatividade o levará a lugares incríveis.",
            "Aprenda com o passado, viva o presente, sonhe com o futuro.",
            "A gentileza é uma linguagem universal.",
            "O destino está nas suas mãos.",
            "A amizade é um tesouro que enriquece a alma.",
            "A felicidade está nas pequenas coisas da vida.",
            "A vida é uma aventura, aproveite cada momento."
        ];

        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
        setMensagem(mensagemAleatoria);
        setBloquearBotao(true);
        setImagemBiscoito(require('../assets/biscoito3.jpg'));
    };

    const reiniciarBiscoito = () => {
        setMensagem('');
        setBloquearBotao(false);
        setImagemBiscoito(require('../assets/biscoito1.jpg'));
    };

    return (
        <View style={styles.container}>
            <View style={styles.biscoito}>
                <Image source={imagemBiscoito} style={styles.imagemBiscoito} />
                <Text style={styles.mensagem}>{mensagem}</Text>
                <Button
                    title="Quebrar Biscoito"
                    onPress={quebrarBiscoito}
                    disabled={bloquearBotao}
                    color="green" 
                    style={styles.botao}
                />
                <Button
                    title="Reiniciar Biscoito"
                    onPress={reiniciarBiscoito}
                    disabled={!bloquearBotao}
                    color="green" 
                    style={styles.botao}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    biscoito: {
        width: 300,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: 'transparent', 
        elevation: 0, 
        borderWidth: 0, 
    },
    imagemBiscoito: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        borderWidth: 0, 
    },
    mensagem: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: 'green',
    },
    button: {
        borderWidth: 2, // Espessura da borda
        borderColor: 'blue', // Cor da borda
        borderRadius: 10, // Raio do canto da borda (opcional)
        paddingHorizontal: 20,
        paddingVertical: 10,
    
        
    },
});

export default BiscoitoDaSorte;