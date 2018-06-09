import React from 'react';
import { createDrawerNavigator, createStackNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import {StyleSheet} from 'react-native';


//Drawer stack
import Home from '../Home';
import Login from '../Login';
import Saibamais from '../Saibamais';
import Noticias from '../Noticias';
import Eventos from '../Eventos';
import Videos from '../Videos';

// Register route
import Register from '../Register';

// // Resetpw route
// import ResetPassword  from '../ResetPassword';




export const Drawer = createDrawerNavigator ({
		Home: {
			screen : Home,
			navigationOptions: {
				drawerLabel: 'Home',
				drawerIcon: <Icon name= "home"/>
			}
		},


		// Saibamais: {
		// 	screen: Saibamais,
		// 	navigationOptions: {
		// 		drawerLabel: 'Saiba mais',
		// 		drawerIcon: <Icon style={{color:'#ff0000'}} name="pulse"/>
		// 	}
		// },

		// Noticias: {
		// 	screen: Noticias,
		// 	navigationOptions: {
		// 		drawerLabel: 'Noticias',
		// 		drawerIcon: <Icon style={{color:'#ff1493'}} name="paper-plane"/>
		// 	}
		// },

		Eventos: {
			screen: Eventos,
			navigationOptions: {
				drawerLabel: 'Eventos',
				drawerIcon: <Icon style={{color:'#008000'}} name="calendar"/>
			}
		},

		Login: {
			screen: Login,
			navigationOptions: {
				drawerLabel: 'Login',
				drawerIcon: <Icon style={{color:'#1e90ff'}} name="person"/>
			}
		},
		// Videos: {
		// 	screen: Videos,
		// 	navigationOptions: {
		// 		drawerLabel: 'Videos',
		// 		drawerIcon: <Icon style={{color:'#000080'}} name="videocam"/>
		// 	}
		// },

		Register: {
			screen: Register,
			navigationOptions: {
				 drawerLabel: () => null
			}
		},
		// ResetPassword: {
		// 	screen: ResetPassword,
		// 	navigationOptions: {
		// 		 drawerLabel: () => null
		// 	}
		// },
});

export const Root = createStackNavigator({

		Drawer:{
			screen: Drawer
		}
	},
	{
		headerMode: 'none'
	},
	{
		contentOptions: {
			inactiveBackgroundColor: '#c3c3c3'
		}
	}
);
