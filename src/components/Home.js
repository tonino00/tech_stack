import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet, StatusBar  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Title, Right, List, ListItem } from 'native-base';
import moment from 'moment';
import 'moment/locale/pt-br';


export default class Home extends React.Component {

  onLearnMore = (item) => {
    this.props.navigation.navigate('Saibamais', {...item});
}

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://newstech.herokuapp.com/noticia/')
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

    return(
      <Container>
        <Header style={{backgroundColor:'#ff0000'}}>
        <StatusBar
           backgroundColor='#333'
         />
        <Left style={{flex: 1}}>
          <Button transparent transparent onPress={() => this.props.navigation.openDrawer('DrawerOpen')} >
              <Icon name='menu' />
          </Button>
          </Left>
          <Body style={styles.ajust}>
            <Title>Noticias</Title>
          </Body>
          <Right style={{flex: 1}}/>
        </Header>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>
        
        <Content>
          <List>
            <ListItem thumbnail
              onPress={()=> this.onLearnMore(item)}>
              <Left>
                <Thumbnail square source={{ uri: item.foto }}/>
              </Left>
              <Body>
                <Text style={{fontWeight:'bold', fontSize:11}}>{item.nome.toUpperCase()}</Text>
                <Text style={{fontSize:10}}>{item.descricao.substr(0,28)+'..'}</Text>
              </Body>
              <Right>
                <Text note>{moment(new Date(item.data_postagem)).format('h:mm:ss a')}</Text>
              </Right>
              </ListItem>
            </List>
        </Content>
                }
                keyExtractor={(item, index) =>index.toString()}
                style={{flex:1}}
                />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  ajust: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
