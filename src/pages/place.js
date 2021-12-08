import React from 'react';
import styled from "styled-components";

import {Container, Row, Col} from "react-grid-system";

const MyPlace = styled.nav`
  //display: flex;
  //justify-content: space-evenly;
  align-items: flex-start;
  
  margin-top: -61vh;
  z-index: 1;
  .map {
    width: 100%;
    height: 60vh;
    // border-radius: 6px;
    // border-width: 3px;
    // border-color: ${ props => props.theme.primaryLight};
    padding-left: 0;
    
    @media screen and (max-width: 767px) {
      width: 100vw;
      height: 40vh;
      
      
    }
  }
  
  .description {
    justify-content: space-between;
    .row {
      padding-top: 10px;
      flex: 2px;  
    }
    padding-left: 10px;
    padding-right: 0;
  }
  
  .placeImage {
    max-width:100%;
    max-height:100%;
  }
`

const Place = props => {
    return (
        <MyPlace>
            <Container fluid>
                <Row>
                    <img src="https://www.svatbypelhrimov.cz/img/fitfarma.jpg" className="placeImage"/>
                </Row>
                <Row>
                    <Col md={6} className="column" style={{paddingLeft: 0}}>
                        <iframe
                            className="map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10379.5986366188!2d15.2111153!3d49.429711!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba9bbf7372e7b247!2sFit%20farma%20REHABILITACE!5e0!3m2!1ssk!2scz!4v1628245531985!5m2!1ssk!2scz"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
                    </Col>
                    <Col md={6} className="column">
                        <div className="description">
                            <Row className="row">
                                <h1><b><a href="http://www.fitfarma.cz/" target="_blank">FitFarma Pelhřimov</a></b></h1>
                            </Row>
                            <Row className="row">
                                <p>
                                    Pro naší svatbu jsme si vybrali nově postavený areál v klidné lokalitě u Pelhřimova na Vysočině.
                                    Areál nás zaujal svojí útulností, přátelskou atmosférou a také dobrým jídlem.
                                    V areálu se uskuteční obřad i svatební hostina. Obřad bude probíhat ve venkovní části.
                                </p>
                            </Row>
                            <Row className="row">
                                <h3>Adresa:</h3>
                            </Row>
                            <Row>
                                Vlásenická 1900, Pelhřimov
                            </Row>
                            <Row className="row">
                                <h3>Doprava:</h3>
                            </Row>
                            <Row>
                                Cesta z Brna trvá přibližně 1,5 hodiny, z Košic 7-8 hodin (s přestávkami).
                                Je potřebná česká dálniční známka, která se dá koupit elektronicky na stránce <a href="https://edalnice.cz/#/validation" target="_blank">edalnice.cz</a>.
                            </Row>
                            <Row className="row">
                                <h3>Parkování:</h3>
                            </Row>
                            <Row>
                                V areálu, kapacita přibližně 30 míst.
                            </Row>
                            <Row className="row">
                                <h3>Ubytování:</h3>
                            </Row>
                            <Row>
                                V areálu je k dispozici 9 pokojů s vlastním WC a koupelnou.
                                V případě nedostatečné kapacity je k dispozici ubytování v přilehlých ubytovacích zařízeních necelý kilometr od Fitfarmy.
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

        </MyPlace>
    );
};

export default Place;