
import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, StatusBar } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Left, Right, Button, Icon, Title} from 'native-base';
import VideoPlayer from 'react-native-video-player';


const VIMEO_ID = '288445451';



export default class Videos extends Component {

  constructor() {
    super();

    this.state = {
      video: { duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined,
    };
  }

  componentDidMount() {
    global.fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
      .then(res => res.json())
      .then(res => this.setState({
        thumbnailUrl: res.video.thumbs['640'],
        videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
        video: res.video,
      }));
  }


  render() {
    return (
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
          <Title>Videos</Title>
        </Body>
        <Right style={{flex: 1}}/>
      </Header>
        <Content>
        <Card>
        <CardItem header>
          <Text>Como funciona a doação de orgãos</Text>
        </CardItem>
          <VideoPlayer
            endWithThumbnail
            thumbnail={{ uri: this.state.thumbnailUrl }}
            video={{ uri: this.state.videoUrl }}
            videoWidth={this.state.video.width}
            videoHeight={this.state.video.height}
            duration={this.state.video.duration}
            ref={r => this.player = r}
          />

        </Card>
        </Content>
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
