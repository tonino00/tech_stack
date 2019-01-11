import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';



//Splash
import Splash from '../../Splash';

//Drawer stack
import Home from '../Home';
import Login from '../Login';
import Saibamais from '../Saibamais';
import Noticias from '../Noticias';
import Eventos from '../Eventos';
import Videos from '../Videos';
import Duvidas from '../Duvidas';
import Favoritos from '../Favoritos';

// Register route
import Register from '../Register';
import EventList from '../EventList';

// // Resetpw route
import ResetPassword  from '../ResetPassword';




export const Drawer = createDrawerNavigator({

	Home: {
		screen: Home,
		navigationOptions: {
			drawerLabel: 'Home',
			drawerIcon: <Icon style={{ color: '#1e90ff' }} name="ios-home-outline" />
		}
	},

	Saibamais: {
		screen: Saibamais,
		navigationOptions: {
			drawerLabel: () => null
		}
	},

	EventList: {
		screen: EventList,
		navigationOptions: {
			drawerLabel: () => null
		}
	},

	Eventos: {
		screen: Eventos,
		navigationOptions: {
			drawerLabel: 'Eventos',
			drawerIcon: <Icon style={{ color: '#1e90ff' }} name="ios-calendar-outline" />
		}
	},


	Duvidas: {
		screen: Duvidas,
		navigationOptions: {
			drawerLabel: 'Saiba mais',
			drawerIcon: <Icon style={{ color: '#1e90ff' }} name="ios-bulb-outline" />
		}
	},

	Videos: {
		screen: Videos,
		navigationOptions: {
			drawerLabel: 'Videos',
			drawerIcon: <Icon style={{ color: '#1e90ff' }} name="ios-videocam-outline" />
		}
	},

	Favoritos: {
		screen: Favoritos,
		navigationOptions: {
			drawerLabel: 'Favoritos',
			drawerIcon: <Icon style={{ color: '#1e90ff' }} name="ios-heart-outline" />
		}
	},

},

	{
		transitionConfig: () => ({
			transitionSpec: {
				duration: 0,
			},
		}),
	},

);

export const Root = createStackNavigator({

	Drawer: {
		screen: Drawer
	},
	// Splash: {
	// 	screen: Splash,
	// 	navigationOptions: {
	// 		drawerLabel: () => null
	// 	}
	// },
	ResetPassword: {
		screen: ResetPassword,
		navigationOptions: {
			drawerLabel: () => null
		}
	},
	Register: {
		screen: Register,
		navigationOptions: {
			drawerLabel: () => null
		}
	},
	Login: {
		screen: Login,
		navigationOptions: {
			drawerLabel: 'Login',
			drawerIcon: <Icon style={{ color: '#1e90ff' }} name="person" />
		}
	},
},
	{
		// initialRouteName: 'Home',
		headerMode: 'none'
	},
	{
		contentOptions: {
			inactiveBackgroundColor: '#c3c3c3'
		}
	}
);
