import React, { Component } from 'react';
import { ListView, StyleSheet, View, AsyncStorage, Alert, ActivityIndicator, StatusBar } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text, Left, Right, Body , Title, Thumbnail } from 'native-base';
import moment from 'moment';
import 'moment/locale/pt-br';

export default class Favoritos extends Component {

  constructor(props) {
    super(props);
    this.state ={
      favoritosList:[],
      isLoading: true
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

  componentWillMount() {
    AsyncStorage.getItem("WISHLIST", (err, res)=> {
      if(!res) this.setState({favoritosList: []});
      else this.setState({favoritosList: JSON.parse(res)});
    })
  }

  render() {

    if(this.state.isLoading){
      return(
      <View style={{flex:1, alignItems:'center',justifyContent:'center', height:100}}>
          <ActivityIndicator color='blue'/>
      </View>
      )
  }


    return (
      <Container>
				<Header style={{backgroundColor:'#ff0000'}}>
          <StatusBar
             backgroundColor='#333'
           />
          <Left style={{flex: 1}}>
          <Button transparent transparent>
                    <Icon name='close'  onPress={() => this.props.navigation.navigate('Home')} />
            </Button>
          </Left>
          <Body style={styles.body}>
            <Title>Favoritos</Title>
          </Body>
          <Right style={{flex: 1}}/>
				</Header>
        {this.state.favoritosList.length <=0 ?
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="ios-heart" size={38} style={{fontSize: 38, color: '#95a5a6', marginBottom: 7}} />
              <Text style={{color: '#95a5a6'}}>Sua lista está vazia</Text>
            </View>
            :
        <Content>
          <List>
            {this.renderItems()}
          </List>
          
        </Content>
        }
      </Container>
    );
  }


  renderItems() {
    
    let items = [];
    this.state.favoritosList.map((item, i) => {
      items.push(
        <ListItem
        key={i}
        last={this.state.favoritosList.length === i+1}
        >
          <Thumbnail square  source={{ uri: item.foto }} />
          <Body style={{paddingLeft: 10}}>
            <Text style={{fontWeight:'bold', fontSize:11}}>{item.nome}</Text>
            <Text style={{fontSize:10}}>{item.descricao}</Text>
          </Body>
          <Right>
          <Button style={{marginLeft: -25}} transparent onPress={() => this.removeItemPressed(item)}>
              <Icon size={30} style={{fontSize: 30, color: 'red'}} name='ios-remove-circle-outline' />
            </Button>
          </Right>
        </ListItem>
      );
    });
    return items;
  }

  removeItemPressed(item) {
    Alert.alert(
      item.nome,
      'Deseja remover da sua lista ?',
      [
        {text: 'Não', onPress: () => console.log('Não pressionado'), style: 'cancelar'},
        {text: 'Sim', onPress: () => this.removeItem(item)},
      ]
    )
  }

  removeItem(itemToRemove) {
    let items = [];
    this.state.favoritosList.map((item) => {
      if(JSON.stringify(item) !== JSON.stringify(itemToRemove) )
        items.push(item);
    });
    this.setState({favoritosList: items});
    AsyncStorage.setItem("WISHLIST",JSON.stringify(items));
  }
}

const styles = StyleSheet.create({
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	  },
  });