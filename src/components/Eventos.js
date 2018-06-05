import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, YellowBox  } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Class RCTCxxModule']);
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title } from 'native-base';

// import * as QG_api from './QG_api/api';

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
            <Title style={{marginLeft: 2, marginRight: 2}}>News Tech</Title>
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
                  <Text>{item.nome}</Text>
                  <Text note>{item.descricao}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri:item.foto}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                <Icon active name="cash" />
                <Text>{item.valor}</Text>
              </Button>
              </Right>
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