import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, YellowBox  } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Title, Right } from 'native-base';

// import * as QG_api from './QG_api/api';

export default class Noticias extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.0.17:8005/noticia/')
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
            <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: item.foto}} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>April 15, 2016</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: item.foto}} style={{height: 200, width: 350, flex: 1, margin:0}}/>
                  <Text>
                    {item.descricao}
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="thumbs-up" />
                    <Text>{item.comentario}</Text>
                  </Button>
                </Left>
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