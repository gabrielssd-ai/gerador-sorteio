import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { ScrollView } from 'react-native';

export default function MegaSena() {
  const [numeros, setNumeros] = useState([]);
  const [historico, setHistorico] = useState([]);

  function gerar() {
    const listaNumeros = [];
    while (listaNumeros.length < 6) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
      listaNumeros.push(numeroAleatorio);
    }
    setNumeros(listaNumeros);
    setHistorico([...historico,listaNumeros])
  }

  return (
    <ScrollView>

    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Gerador da Mega Sena</Text>

      <View style={styles.bolinhasContainer}>
        {numeros.map((item) => (
          <Card style={styles.bolinha}>
            <Card.Content>
              <Text style={styles.numero}>{item}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>

      <Button mode="contained" onPress={gerar} style={styles.botao}>
        Gerar números
      </Button>
      <Text variant='displaySmall' >Historico</Text>
      {historico.map(jogo=><Text variant='labelLarge' > {jogo.join('-')} </Text>)}
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  bolinhasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 24,
  },
  bolinha: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#26a69a',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    elevation: 3,
  },
  numero: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botao: {
    marginTop: 16,
  },
});
