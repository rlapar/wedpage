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
    margin-top: 2vh;
    margin-bottom: 2vh;
    border-bottom-style: dashed;
    border-bottom-width: 3px;
    border-bottom-color: ${props => props.theme.primaryDark};
    color: ${props => props.theme.primaryDark};
  }
  
  .indented-ul {
    margin-left: 2vw;
  }
  
  li {
    margin-top: 1vh;
  }

  .program-item {
    margin-top: 1vh;
  }
  
  .program-item-time {
    text-align: right;
    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }
`

const Info = () => {
    return (
        <MyInfo>
        <Container>
            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>📌 Místo konání</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content"><b>
                        Penzion Fitfarma, Pelhřimov, Vlásenická 1900
                    </b></p>
                </Col>
            </Row>

            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>🚗 Příjezd</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content"><b>
                        Hosté přijíždějící ze Slovenska, ubytovaní v penzionu od pátku:
                        <br/>
                        <ul className="indented-ul">
                            <li>
                                ubytování (přímo v penzionu, adresa viz. výše) bude možné cca od 12:00 hodin v pátek. V
                                sobotu ráno prosíme, abyste si zajistili snídani dle vlastních preferencí - v penzionu již bude
                                vše nachystáno na svatbu a nebude tedy možné si ji dát na místě. V neděli ráno pro Vás již
                                bude zajištěna snídaně přímo na Fitfarmě. Odjezd je v neděli možný do 12:00.
                            </li>
                        </ul>
                    </b></p>
                    <p className="table-content"><b>
                        Hosté ubytování v penzionu od soboty:
                        <br/>
                        <ul className="indented-ul">
                            <li>
                                ubytování bude možné od cca 10:00 hodin v sobotu. V neděli pro Vás bude zajištěna snídaně
                                na Fitfarmě. Odjezd je v neděli možný nejpozději ve 12:00.
                            </li>
                        </ul>
                    </b></p>
                    <p className="table-content"><b>
                        Hosté bez ubytování:
                        <br/>
                        <ul className="indented-ul">
                            <li>
                                příjezd na obřad - tedy tak, ať se tam společně ve 13:00 hodin potkáme.
                            </li>
                        </ul>
                    </b></p>
                </Col>
            </Row>

            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>🅿️ Parkování</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content"><b>
                        Kapacita parkování přímo u penzionu by měla vystačit pro všechny hosty. Pokud byste přece
                        jen parkování přímo na místě nesehnali, porozhlédněte se prosím v okolí.
                    </b></p>
                </Col>
            </Row>

            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>📋 Orientační program</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content"><b>
                        <Row className="program-item"><Col md={2} className="program-item-time">12:30 - 13:00</Col><Col md={10}>Příjezd a shromažďování svatebních hostů</Col></Row>
                        <Row className="program-item"><Col md={2} className="program-item-time">13:00</Col><Col md={10}>Obřad ve venkovní části penzionu Fitfarma (pokud počasí nedovolí, tak uvnitř).</Col></Row>
                        <Row className="program-item"><Col md={2} className="program-item-time">13:30 - 14:00</Col><Col md={10}>Společné focení svatebčanů</Col></Row>
                        <Row className="program-item"><Col md={2} className="program-item-time">14:00</Col><Col md={10}>Slavnostní oběd</Col></Row>
                        <Row className="program-item"><Col md={2} className="program-item-time">15:00</Col><Col md={10}>Krájení svatebního dortu</Col></Row>
                        <Row className="program-item"><Col md={2} className="program-item-time">15:30</Col><Col md={10}>Hod kyticí a začátek prodeje svatební tomboly</Col></Row>
                        <Row className="program-item"><Col md={2} className="program-item-time">15:30 - 16:30</Col><Col md={10}>Průběh a vyhlášení tomboly</Col></Row>
                        <Row className="program-item"><Col md={2} className="program-item-time">17:00</Col><Col md={10}>První novomanželský tanec</Col></Row>
                        <Row className="program-item"><Col md={2} className="program-item-time">18:00</Col><Col md={10}>Česko-slovenský kvíz</Col></Row>
                        <Row className="program-item"><Col md={2} className="program-item-time">18:30</Col><Col md={10}>Začátek rautu</Col></Row>
                        <Row className="program-item"><Col md={2} className="program-item-time">20:00</Col><Col md={10}>Novomanželský kvíz</Col></Row>
                        <Row className="program-item"><Col md={2} className="program-item-time">21:00</Col><Col md={10}>Prskavkový tanec (před prostorami Fitfarmy)</Col></Row>
                        <Row className="program-item"><Col md={2} className="program-item-time">21:00 - ??</Col><Col md={10}>Volná zábava</Col></Row>
                    </b></p>
                </Col>
            </Row>

            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>👗 Dress code</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content"><b>
                        Žádný povinný dresscode nemáme, věříme, že zvolíte vhodné oblečení, které vám bude
                        pohodlné.
                    </b></p>
                </Col>
            </Row>

            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>🎁 Svatební dary</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content"><b>
                        Největším darem pro nás bude vaše přítomnost a dobrá nálada. Pokud byste nám přeci jen chtěli něco dát, potěší nás příspěvek na stavbu domu.
                        Ručníky, povlečení, hrnce i talíře už za tu dobu, co jsme spolu, dávno máme.
                    </b></p>
                </Col>
            </Row>

            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>🍲 Jídlo</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content"><b>
                        <ul>
                            <li>
                                Slavnostní Oběd zahájíme společným přípitkem, pokračovat budeme vývarem s masem a
                                nudlemi a vepřovou panenkou s omáčkou z hrubozrnné hořčice a mačkanými bramborami.
                            </li>
                            <li>
                                Po obědě si u kávičky budete moci pochutnat na svatebním dortu.
                            </li>
                            <li>
                                Pro milovníky sladkého bude k dispozici i sweer bar.
                            </li>
                            <li>
                                Přibližně kolem 18:30 se můžete těšit na raut - věříme, že si každý najde to, po čem jeho
                                žaludek zrovna touží.
                            </li>
                            <li>
                                Pokud máte nějaké alergie, o kterých zatím nevíme, dejte nám to prosím včas vědět.
                            </li>
                        </ul>
                    </b></p>
                </Col>
            </Row>

            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>🎵 Hudba</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content"><b>
                        Naší svatbu vám zpříjemní kapela <a href="https://melodikum.cz/" target="_blank">Melodikum</a>.
                        Hrát bude mezi 17:00 - 23:00, pak pustíme půlnoční playlist ze Spotify.
                    </b></p>
                </Col>
            </Row>

            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>🚕 Odvoz ze svatby</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content"><b>
                        <ul>
                            <li>
                                Pro ty z Vás, kteří mají zájem o odvoz ze svatby, bude zajištěn řidič (Tomáš Váňa), který bude
                                k dispozici cca mezi 19:00 - 2:00.
                            </li>
                            <li>
                                Pokud se rozhodnete s námi svatební den pořádně oslavit - a to déle než do druhé hodiny
                                ranní - prosíme, abyste si již odvoz zajistili sami.
                            </li>
                            <li>
                                Jestliže máte zájem i o dovoz na obřad, dejte nám to prosím brzy vědět - domluvili bychom
                                Vám někoho dalšího ze svatebčanů, kdo má třeba cestu kolem.
                            </li>
                        </ul>
                    </b></p>
                </Col>
            </Row>

            <Row className="table-row">
                <Col md={2}>
                    <h1 className="table-header"><b>💬 Dotazy v průbehu dne</b></h1>
                </Col>
                <Col md={10}>
                    <p className="table-content"><b>
                        <ul>
                            <li>
                                Dotazy během svatebního dne prosím směřujte na naši koordinátorku Alču - my budeme mít
                                již plné ruce práce.
                            </li>
                            <li>
                                Alča Vám bude v sobotu k dispozici cca od 11:00 hodin, bude rozdávat stužky a pomůže Vám
                                se všemi přáními.
                            </li>
                        </ul>
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