import React from 'react';
import {Col, Container, Row} from "react-grid-system";
import styled from "styled-components";

const MyInfo = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: -55vh;
  z-index: 1;
    
  .main-table {
    color: ${props => props.theme.primaryDark};
  }

  .table-header {
    font-size: 150%;
    @media screen and (max-width: 768px) {
      margin-bottom: 2vh;
    }
    margin-bottom: 1vh;
  }
  
  .table-content {
    margin-left: 5vw;
    text-align: left;
    margin-bottom: 1vh;
  }

  .table-row {
    margin-bottom: 3vh;
    border-bottom-style: dashed;
    border-bottom-width: 3px;
    border-bottom-color: ${props => props.theme.primaryDark};
    color: ${props => props.theme.primaryDark};
  }
`

const Info = () => {
    return (
        <MyInfo>
        <Container>
            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>🎁 Svatební dary</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content"><b>
                        Největším darem pro nás bude vaše přítomnost a dobrá nálada. Pokud byste nám přeci jen chtěli něco dát, potěší nás příspěvek na stavbu domu.
                    </b></p>
                </Col>
            </Row>
            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>🎵 Hudba</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content"><b>
                        Naší svatbu vám spříjemní kapela <a href="https://melodikum.cz/" target="_blank">Melodikum</a>.
                        Hrát bude mezi 17:00 - 23:00, pak pustíme půlnoční playlist ze Spotify.
                    </b></p>
                </Col>
            </Row>
            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>🦠 COVID-19</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content"><b>
                        Případné opatření budeme průbežně před svatbou aktualizovat.
                    </b></p>
                </Col>
            </Row>
            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>📞 Kontakty</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content">
                        <b>Nevěsta:</b> +420 720 360 106
                    </p>
                    <p className="table-content">
                        <b>Ženích:</b> +420 601 690 895
                    </p>
                </Col>
            </Row>
        </Container>
        </MyInfo>
    );
};

export default Info;