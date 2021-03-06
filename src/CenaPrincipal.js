import React, { Component } from 'react';
import BarraNavegacao from './BarraNavegacao.js'
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

const logo = require('../img/logo.png')
const menu_cliente = require('../img/menu_cliente.png')
const menu_contato = require('../img/menu_contato.png')
const menu_empresa = require('../img/menu_empresa.png')
const menu_servico = require('../img/menu_servico.png')

export default class CenaPrincipal extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
       header: null
    }
 }
  render() {
    return (
      <View style={{backgroundColor: 'white', flex:1}}>
      <StatusBar hidden />
      <View style={logoStyle}>
        <Image source={logo} />
      </View>
      <View style={itemsStyleOne}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('clientes')}>
          <Image source={menu_cliente}/>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => this.props.navigation.navigate('contatos')}>
          <Image source={menu_contato} />
        </TouchableOpacity>
      </View>
      <View style={itemsStyleOne}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('empresa')}>
          <Image source={menu_empresa}/>
        </TouchableOpacity >
        <TouchableOpacity onPress={() => this.props.navigation.navigate('servico')}>
          <Image source={menu_servico} />
        </TouchableOpacity>
      </View>
      
      </View>
    );
  }
}

const style = StyleSheet.create({
    logoStyle: {
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 0
    },
    itemsStyleOne: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 100
    }
})

const {logoStyle, itemsStyleOne}  = style