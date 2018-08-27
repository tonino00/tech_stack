import React, { Component } from 'react';
import { Root, Container, Header, Content, Toast, Button, Text } from 'native-base';


class Videos extends Component {
  state = {
    showToast: false,
    reason: ""
  }

  onClose(reason) {
    this.setState({ reason })

  }


  render() {
    return (
      <Root>
      <Container>
      <Header />
      <Content padder>
        <Button onPress={() => Toast.show({
          text: 'Discard changes',
          buttonText: 'Undo',
          duration: 3000,
          onClose: this.onClose.bind(this)
        })}>
          <Text>Toast</Text>
        </Button>
        <Text style={{ marginTop: 20 }}>Reason : {this.state.reason}</Text>
      </Content>
    </Container>
    </Root>
    );
  }
}

export default Videos;