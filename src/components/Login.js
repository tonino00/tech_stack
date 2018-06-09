import React, { Component } from 'react';
import {Text , View, AsyncStorage} from 'react-native';
import {
	Container,
	Content,
	Form,
	Item,
	Left,
	Right,
	Icon,
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
				<Left style={{flex: 1}}>
					<Button  transparent onPress={() => this.props.navigation.navigate('Home')}>
						<Icon style={{color:"#c3c3c3"}} name="arrow-back" />
					</Button>
				</Left>
			  <Body>
				<Title style={{marginLeft: 15, marginRight: 15}}>Login</Title>
			  </Body>
				<Right style={{flex: 1}}/>
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
				  <Label>Senha</Label>
				  <Input
					value={this.state.password}
					secureTextEntry
					onChangeText={(text) => { this.setState({ password: text }); }} />
				</Item>
				<Button style={{margin:10,marginTop:30}} block onPress={this.onPress.bind(this)}>
				  <Text style={{color:'#fff'}}>ENTRAR</Text>
				</Button>
			  </Form>
			</Content>
		  </Container>
		);
	}
}

export default Login;