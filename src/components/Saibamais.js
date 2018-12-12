import React, { Component } from 'react';
import {Text , View, StyleSheet, Image, ActivityIndicator, StatusBar} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Title } from 'native-base';
import moment from 'moment';
import 'moment/locale/pt-br';

export default class Saibamais extends Component {

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

	render() {

		if(this.state.isLoading){
			return(
			<View style={{flex:1, alignItems:'center',justifyContent:'center', height:100}}>
				<ActivityIndicator color='blue' />
			</View>
			)
		}

		const { nome, data_postagem, descricao, foto }= this.props.navigation.state.params;
		return (

			<Container>
				<Header style={{backgroundColor:'#ff0000'}}>
				<StatusBar
				   backgroundColor='#333'
				 />
				<Left style={{flex: 1}}>
				<Button transparent transparent>
                	<Icon name='arrow-back'  onPress={() => this.props.navigation.goBack()} />
             	</Button>
				</Left>
				<Body style={styles.body}>
					<Title>Detalhes</Title>
				</Body>
				<Right style={{flex: 1}}/>
				</Header>
				<Content>
					<Card style={{flex:0}}>
						<CardItem cardBody>
							<Left>
								<Thumbnail source={require('../img/logo.png')} />
								<Body>
									<Text style={{fontWeight:'bold', fontSize:11}}>{nome.toUpperCase()}</Text>
									<Text style={{fontSize:11}} note>{moment(new Date(data_postagem)).format('llll')}</Text>
								</Body>
							</Left>
						</CardItem>
						<CardItem>
							<Body>
								<Image source={{uri: foto}} style={{width:'100%' , height:300}}/>
								<Text style={{marginTop:10, textAlign:'justify'}}>{descricao}</Text>
							</Body>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}


const styles = StyleSheet.create({
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	  },
  });