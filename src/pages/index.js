import React from 'react';
import styled from "styled-components";

import {Container, Row, Col} from "react-grid-system";
import {Link} from "react-router-dom";

const MyHomepage = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -55vh;
  z-index: 1;
    
  .main-heading {
    font-size: 9vw;
    font-family: 'Satisfy', cursive;
    font-weight: bold;
    position: relative; 
    color: ${props => props.theme.primaryDark};
    @media screen and (max-width: 768px) {
      font-size: 11vw;
    }
  }
  
  .main-heading-left {
    text-align: left;
    left: -45px;
    @media screen and (max-width: 768px) {
      left: 5px;
    }
  }
  .main-heading-center {
    text-align: center;
  }
  .main-heading-right {
    text-align: right;
    left: 45px;
    @media screen and (max-width: 768px) {
      left: 5px;
    }
  }
  
  .main-heading-bottom-row {
    margin-bottom: 3vh;
    border-bottom-style: dashed;
    border-bottom-width: 3px;
    border-bottom-color: ${props => props.theme.primaryDark};
  }
  
  .secondary-heading{
    font-weight: bold;
    font-size: 3vw;
    color: ${props => props.theme.primaryDark};
    @media screen and (max-width: 768px) {
      font-size: 5vw;
    }
  }
  .ternary-heading{
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme.primaryDark};
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  
  .form-button {
    transition: all 0.3s ease;
    width: 70%;
    height: 40px;
    padding: 10px 25px;
    border-radius: 8px;
    font-weight: 500;
    background: ${props => props.theme.primaryDark};
    cursor: pointer;
    position: relative;
    display: inline-block;
    color: ${props => props.theme.secondary};
    
    a {
      color: ${props => props.theme.secondary};
    }
  }
  .form-button:hover {
    box-shadow:
                -10px -10px 30px 0px #fff9,
                -8px -8px 10px 0px #fff9,
              10px 10px 30px 0px #0002,
              8px 8px 10px 0px #0001;
    background: ${props => props.theme.primaryLight};
  }
  
`

const Home = props => {
    return (
        <MyHomepage>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="main-heading main-heading-left">Radovan</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h1 className="main-heading main-heading-center">&</h1>
                    </Col>
                </Row>
                <Row className="main-heading-bottom-row">
                    <Col xs={12}>
                        <h1 className="main-heading main-heading-right">Simona</h1>
                    </Col>
                </Row>
                <Row style={{marginBottom: "3vh"}}>
                    <Col xs={12}>
                        <h2 className="secondary-heading">09.07.2022</h2>
                    </Col>
                </Row>
                <Row className="main-heading-bottom-row">
                    <Col xs={12}>
                        <h2 className="secondary-heading">FitFarma Pelhřimov</h2>
                    </Col>
                </Row>
                <Row style={{marginBottom: "3vh"}}>
                    <Col xs={12}>
                        <h3 className="ternary-heading">Vážený a milí svatební hosté,</h3>
                        <h3 className="ternary-heading">jelikož se pomalu blíží náš velký den, rádi bychom Vám upřesnili informace o tom,</h3>
                        <h3 className="ternary-heading">jak bude svatební den probíhat.</h3>

                        {/*<h3 className="ternary-heading">Prosím dejte nám vědet jestli dorazíte</h3>*/}
                        {/*<h3 className="ternary-heading">vyplněním nasledujícího formuláře</h3>*/}
                    </Col>
                </Row>
                <Row style={{marginBottom: "3vh"}}>
                    <Col xs={12}>
                        <Link to={'/info'} className="form-button">Chci vědět víc</Link>
                        {/*<a className="form-button" href="https://docs.google.com/forms/d/e/1FAIpQLSfC6MwJBM89FYImjC3-WUAfV6KNkJQ5NwIlQlSEoJr9yysJbA/viewform?usp=sf_link" target="_blank">Vyplnit</a>*/}
                    </Col>
                </Row>
                <Row style={{marginBottom: "3vh"}}>
                    <Col xs={12}>
                        <h3 className="ternary-heading">Pokud zjistíte, že nakonec nebudete moci na naši svatbu dorazit,</h3>
                        <h3 className="ternary-heading">prosíme, abyste nám to dali co nejdříve vědět.</h3>
                    </Col>
                </Row>
                <Row style={{marginBottom: "3vh"}}>
                    <Col xs={12}>
                        <h3 className="secondary-heading">Moc se na Vás těšíme!</h3>
                    </Col>
                </Row>

            </Container>
        </MyHomepage>
    );
};

export default Home;