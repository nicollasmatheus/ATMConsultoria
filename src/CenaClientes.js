import React, { Component } from 'react';
import BarraNavegacao from './BarraNavegacao.js'
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

const cliente1 = require('../img/cliente1.png')
const cliente2 = require('../img/cliente2.png')
const detalhe_cliente = require('../img/detalhe_cliente.png')
const btn_voltar = require('../img/btn_voltar.png')

export default class CenaClientes extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: null
    }
 }
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <BarraNavegacao styleBarraNavegacao={barraNavegacaoStyle}/>
        <TouchableOpacity style={botaoVoltar} 
                          onPress={() => this.props.navigation.goBack()}> 
          <Image source={btn_voltar}/>
        </TouchableOpacity>
        <View style={logoCliente}>
          <Image source={detalhe_cliente} />
          <Text style={textoCliente}>Clientes</Text>
        </View>
          <Image source={cliente1} style={topicsIcon} />
          <Text style={textIcons}>Lorem ipsum colare somum advance ip sumum lori</Text>
          <Image source={cliente2} style={topicsIcon} />
          <Text style={textIcons}>Lorem ipsum colare somum advance ip sumum lori</Text>
        </View>
    )
  }
}

const style = StyleSheet.create({
  barraNavegacaoStyle: {
    backgroundColor: '#b9c941',
    padding: 30
},
  logoCliente: {
    marginTop: 60,
    marginLeft: -100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20
  },
  textoCliente: {
    fontSize: 40,
    marginLeft: -200,
    color: '#b9c941',
    fontWeight: 'bold'
  },
  topicsIcon: {
    marginLeft: 20,
    marginVertical: 10
  },
  textIcons: {
    marginLeft: 25,
    marginTop: 5
  },
  botaoVoltar: {
    marginLeft: 10,
    marginTop: -65
  }
})

const {barraNavegacaoStyle, logoCliente,
       textoCliente, topicsIcon, textIcons, botaoVoltar}  = style