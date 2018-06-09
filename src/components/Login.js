import React, { Component } from 'react';
import {Text , View, AsyncStorage} from 'react-native';
import {
	Container,
	Content,
	Form,
	Item,
	Input,
	Label,
	Body,
	Header,
	Title,
	Button,
  } from 'native-base';

import axios  from "axios";


class Login extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
		  username: '',
		  password: ''
		};
	
	  }
	
	  onPress() {
		const data = {
		  username: this.state.username,
		  password: this.state.password
		};
	
		 axios.post('http://192.168.0.17:8005/admin/login', data)
		  .then(response => {
			AsyncStorage.setItem('token',response.data.token)
			alert('Login efetuado com sucesso!');
		  })
		  .catch(error => {
			alert(error);
		  });
	
	  }

	render() {
		return (

			<Container>
			<Header>
			  <Body>
				<Title>Login</Title>
			  </Body>
			</Header>
			<Content>
			  <Form>
				<Item floatingLabel>
				  <Label>Usuário</Label>
				  <Input
					value={this.state.username}
					autoCapitalize="none"
					onChangeText={(text) => { this.setState({ username: text }); }} />
				</Item>
				<Item floatingLabel last>
				  <Label>Password</Label>
				  <Input
					value={this.state.password}
					secureTextEntry
					onChangeText={(text) => { this.setState({ password: text }); }} />
				</Item>
				<Button style={{margin:10,marginTop:30}} block onPress={this.onPress.bind(this)}>
				  <Text>ENTRAR</Text>
				</Button>
			  </Form>
			</Content>
		  </Container>
		);
	}
}

export default Login;