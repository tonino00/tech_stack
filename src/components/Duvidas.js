import React, { Component } from 'react';
import {Text , View, StyleSheet, StatusBar} from 'react-native';
import { Container, Header, Content, Accordion, Body, Right, Left, Title, Button, Icon } from "native-base";

const dataArray = [
    { title: "O que é doação de órgãos?", content: "A doação de órgãos ou de tecidos é um ato pelo qual manifestamos a vontade de doar uma ou mais partes do nosso corpo para ajudar no tratamento de outras pessoas. A doação pode ser de órgãos (rim, fígado, coração, pâncreas e pulmão) ou de tecidos (córnea, pele, ossos, válvulas cardíacas, cartilagem, medula óssea e sangue de cordão umbilical). A doação de órgãos como o rim, parte do fígado e da medula óssea pode ser feita em vida. A doação de órgãos de pessoas falecidas somente acontecerá após a confirmação do diagnóstico de morte encefálica. Geralmente, são pessoas que sofreram um acidente que provocou traumatismo craniano (acidente com carro, moto, quedas etc.) ou sofreram acidente vascular cerebral (derrame) e evoluíram para morte encefálica." },
    { title: "Por que doar?", content: "Doar órgãos é um ato de amor e solidariedade. O transplante pode salvar vidas, no caso de órgãos vitais como o coração, ou devolver a qualidade de vida, quando o órgão transplantado não é vital, como os rins. Além disso, estrutura a saúde física e psicológica de toda a família envolvida com o paciente transplantado." },
    { title: "O que podemos doar?", content: "Qualquer pessoa juridicamente capaz, atendidos os preceitos legais quanto à doação intervivos, que tenha sido submetido à rigorosa investigação clínica, laboratorial e de imagem, e esteja em condições satisfatórias de saúde, possibilitando que a doação seja realizada dentro de um limite de risco aceitável. Pela lei, parentes até o quarto grau e cônjuges podem ser doadores em vida. Não parentes, somente com autorização judicial. O doador vivo pode doar um dos rins, parte do fígado, parte do pulmão ou parte da medula óssea." },{ title: "Que tipos de doador existem?", content: "Doador vivo - Qualquer pessoa que goze de perfeita saúde e que concorde com a doação. A doação intervivos é permitida por lei entre parentes até o quarto grau e cônjuges; entre não parentesco somente com autorização judicial.\n\n Doador falecido - São pacientes internados em UTI, que apresentam quadro de morte encefálica, determinada pela interrupção da irrigação sanguínea ao cérebro. Geralmente são vítima de traumatismo craniano ou AVC (derrame cerebral)." },{ title: "Porque existem poucos doadores?", content: "Um dos principais fatores que limita a doação de órgãos é a baixa taxa de autorização da família do doador. Atualmente, aproximadamente metade das famílias entrevistadas não concorda que sejam retirados os órgãos e tecidos do ente falecido para doação. Em 2014 mais de 27 mil pacientes estavam em lista por um transplante de órgão e quase 11 mil aguardando por um transplante de córnea. No ano morreram, em hospitais do país, mais de 36 mil pessoas com traumatismo craniano ou AVC, sendo que em muitos desses casos a pessoa poderia ter sido um potencial doador." },{ title: " O que é morte encefálica?", content: "É a morte do cérebro, incluindo tronco cerebral que desempenha funções vitais como controle da respiração. Quando isso ocorre, a parada cardíaca é inevitável. Embora ainda haja batimentos cardíacos, a pessoa com morte encefálica não pode respirar sem os aparelhos e o coração não baterá por mais de algumas poucas horas. Por isso, a morte encefálica já caracteriza a morte do indivíduo." },{ title: "Existe idade para ser doador?", content: "O que determina se o órgão é viável para transplante é o estado de saúde do doador. No entanto, alguns profissionais podem restringir alguns limites de idade em situações especificas." },{ title: "Para quem vão os orgãos?", content: "Os órgãos doados vão para pacientes que necessitam de um transplante e já estão aguardando em uma lista de espera única. A compatibilidade entre doador e receptores é determinada por exames laboratoriais e a posição em lista é determinada com base em critérios, como tempo de espera e urgência do procedimento." },
  ];




export default class Duvidas extends Component {
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
                    <Title>Saiba mais</Title>
                </Body>
                <Right style={{flex: 1}}/>
            </Header>   
            <Content padder>
              <Accordion
                dataArray={dataArray}
                headerStyle={{ backgroundColor: "#F6F6F6" }}
                contentStyle={{ backgroundColor: "#FFFFFF" }}
                icon="add"
                expandedIcon="remove"
              />
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