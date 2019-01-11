import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet, AsyncStorage, Alert, StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title, Root, Toast } from 'native-base';
import moment from 'moment';
import 'moment/locale/pt-br';

export default class Eventos extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
        isLoading: true,
        showToast: false,
        eventos:{}
    };
  }

  componentDidMount(){
    return fetch('https://newstech.herokuapp.com/eventos/')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }





  render(){


    if(this.state.isLoading){
      return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center', height:100}}>
          <ActivityIndicator color='blue'/>
        </View>
      )
    }

    const { nome, endereco, descricao, foto, horario_inicial, horario_final, valor }= this.props.navigation.state.params;

    return(
    <Root>
      <Container>
        <Header style={{backgroundColor:'#ff0000'}}>
          <StatusBar
             backgroundColor='#333'
           />
            <Left style={{flex: 1}}>
            <Button transparent transparent>
                <Icon name='arrow-back'  onPress={() => this.props.navigation.navigate('Eventos')} />
            </Button>
            </Left>
            <Body style={styles.body}>
                <Title>Detalhes</Title>
            </Body>
            <Right style={{flex: 1}}/>
        </Header>
        <Content padder>
        <Card style={{flex:0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/logo.png')} />
                <Body>
                  <Text style={{fontWeight:'bold', fontSize:11}}>{nome.toUpperCase()}</Text>
                  <Text style={{fontSize:10}}>{descricao}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri:foto}} style={{ height: 250, width: 300, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Icon style={{color:'#ff0000'}} name="pin" />
              <Text style={{marginLeft:-10}}>{endereco}</Text>
             </CardItem>
             <CardItem>
              <Icon style={{color:'#ff0000'}} name="cash" />
              <Text>{valor} R$</Text>
             </CardItem>
             <CardItem>
              <Icon style={{color:'#ff0000'}} name="time" />
              <Text note>{moment(new Date(horario_inicial)).format('D MMMM  YYYY, h:mm a')}</Text>
              <Text style={{marginLeft:4}} note>{moment(new Date(horario_final)).format('- h:mm a')}</Text>
             </CardItem>
             <CardItem>
                <Button block onPress={this.addToWishlist.bind(this)} icon transparent style={{marginLeft:-15}}>
                    <Icon style={{color: '#ff0000'}} name='ios-heart' />
                    <Text>Adicionar aos favoritos</Text>
                </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
      </Root>
    );
  }

  addToWishlist() {
    var eventos = this.props.navigation.state.params;
    var success = true;
    AsyncStorage.getItem("WISHLIST", (err, res) => {
      if(!res) AsyncStorage.setItem("WISHLIST",JSON.stringify([eventos]));
      else {
        var items = JSON.parse(res);
        if(this.search(items, eventos)) {
          success = false
        }
        else {
          items.push(eventos);
          AsyncStorage.setItem("WISHLIST",JSON.stringify(items));
        }
      }
      if(success) {
          Toast.show({
            text: 'Evento adicionado com sucesso!',
            position: 'bottom',
            type: 'success',
            buttonText: 'OK',
            duration: 3000
          });
      }
      else {
          Toast.show({
            text: 'Erro! Você já adicionou este evento',
            position: 'bottom',
            type: 'danger',
            buttonText: 'OK',
            duration: 3000
          });
      }
    });
  }

  search(array, object) {
    for(var i=0; i<array.length; i++)
      if(JSON.stringify(array[i]) === JSON.stringify(object))
        return true;
    return false;
  }

}



const styles = StyleSheet.create({
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	  },
  });