import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, YellowBox  } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Class RCTCxxModule']);
import { Container, Header, Content, Card, CardItem, Thumbnail,  Button, Icon, Left, Body, Title, Right } from 'native-base';
import moment from 'moment';
import 'moment/locale/pt-br';


export default class Home extends React.Component {

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
                  <Thumbnail source={require('../img/logo.png')} />
                  <Body>
                    <Text>{item.nome}</Text>
                    <Text note>{moment(new Date(item.data_postagem)).format('llll')}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body>
                  <Image source={{uri: item.foto}} style={{height: 200, width: 350, flex: 1, margin:0}}/>
                  <Text style={{marginTop:15, textAlign: 'justify'}}>
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