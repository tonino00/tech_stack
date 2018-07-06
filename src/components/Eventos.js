import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, YellowBox  } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Class RCTCxxModule']);
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title } from 'native-base';
import moment from 'moment';
import 'moment/locale/pt-br';

export default class Eventos extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
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
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <Container>
        <Header>
        <Left style={{flex: 1}}>
          <Button transparent transparent onPress={() => this.props.navigation.openDrawer('DrawerOpen')} >
              <Icon name='menu' />
          </Button>
          </Left>
          <Body>
            <Title style={{marginLeft: 2, marginRight: 2}}>Eventos</Title>
          </Body>
          <Right style={{flex: 1}}/>
        </Header>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/logo.png')} />
                <Body>
                  <Text style={{fontWeight:'bold'}}>{item.nome.toUpperCase()}</Text>
                  <Text>{item.descricao}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri:item.foto}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Icon style={{color:'#1e90ff'}} name="pin" />
              <Text style={{textAlign:'left'}}>{item.endereco}</Text>
             </CardItem>
             <CardItem>
              <Icon style={{color:'#1e90ff'}} name="cash" />
              <Text>{item.valor} R$</Text>
             </CardItem>
             <CardItem>
              <Icon style={{color:'#1e90ff'}} name="time" />
              <Text note>{moment(new Date(item.horario_inicial)).format('D MMMM  YYYY, h:mm a')}</Text>
              <Text style={{marginLeft:4}} note>{moment(new Date(item.horario_final)).format('- h:mm a')}</Text>
             </CardItem>
          </Card>
        </Content>
        }
          keyExtractor={(item, index) => index.toString()}
        />
      </Container>
    );
  }
}