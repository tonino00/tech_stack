// import * as axios from 'axios';
// import React from 'react';

// var QG_api = {

//   eventos(){
//     return axios.get('http://192.168.0.17:8005/eventos/')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
// 	},
	
// 	noticias(){
//     return axios.get('http://192.168.0.17:8005/noticia/')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
// 	},
	
// 	enderecos(){
//     return axios.get('http://192.168.0.17:8005/enderecos/')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
// 	},
	
// 	comentarios(){
//     return axios.get('http://192.168.0.17:8005/comentarios/')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
// 	},
	
// 	  avaliacoes(){
//     return axios.get('http://192.168.0.17:8005/avaliacoes/')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   },
  
//   retrunAll() {
//     axios.all([this.noticias(), this.enderecos(), this.avaliacoes(),this.comentarios(),this.eventos()])
//   .then(axios.spread(function () {
//     // Both requests are now complete
//   }));
//   }
// }

// export default QG_api;