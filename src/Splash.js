import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

const logo = require('./img/logo.png');

export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.goToHome = this.goToHome.bind(this);
    }
    componentDidMount() {
        setTimeout(() => {
          this.goToHome();
        }, 3000);
      }

      goToHome(){
        this.props.navigation.navigate('Home')
      }

      render() {
          return (
            <View 
            style={{
                flex:1,
                backgroundColor:"#FFF",
                alignItems:"center",
                justifyContent:"center"
            }}>
            <Image
            source={logo}
            style={{ width:250, height:250}} />
            <Text style={{fontSize:25, color:'#333'}}> +Viver</Text>
            </View>
          )
      }
}

