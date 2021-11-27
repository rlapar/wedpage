import React, {Component} from 'react';
import styled from "styled-components";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logoEngagement from "../assets/images/journey/logo_engagement.svg";
import logoHoldingHands from "../assets/images/journey/logo_holding_hands.svg";
import logoHouse from "../assets/images/journey/logo_house.svg";
import logoMeet from "../assets/images/journey/logo_meet.svg";
import logoSlovenia from "../assets/images/journey/logo_slovenia.svg";
import logoVacation from "../assets/images/journey/logo_vacation.svg";
import logoWedding from "../assets/images/journey/logo_wedding.svg";
import logoXmas from "../assets/images/journey/logo_xmas.svg";
import Carousel, {Modal, ModalGateway} from "react-images";

import imageDoggo from "../assets/images/journey/galllery/doggo.jpeg";
import imageEngagement from "../assets/images/journey/galllery/engagement.jpg";
import imageFirstDate from "../assets/images/journey/galllery/first_date.jpg";
import imageVacationGreece from "../assets/images/journey/galllery/vacation_greece.jpeg";
import imageVacationKutnaHora from "../assets/images/journey/galllery/vacation_kutna_hora.jpeg";
import imageVacationLednice from "../assets/images/journey/galllery/vacation_lednice.jpg";
import imageVacationRome from "../assets/images/journey/galllery/vacation_rome.jpg";
import imageVacationTatry from "../assets/images/journey/galllery/vacation_tatry.jpeg";
import imageXmasCandles from "../assets/images/journey/galllery/xmas_candles.jpeg";
import imageXmasSelfie from "../assets/images/journey/galllery/xmas_selfie.jpeg";
import imageXmasTree from "../assets/images/journey/galllery/xmas_tree.jpeg";


const images = [
    {
        source: imageFirstDate,
        id: 1,
        caption: "První rande na hradě v Lublani"
    },
    {
        source: imageVacationLednice,
        id: 2,
        caption: "První dovolená v Lednici"
    },
    {
        source: imageVacationKutnaHora,
        id: 3,
        caption: "Před vstupem do středověkých dolů v Kutné Hoře"
    },
    {
        source: imageVacationTatry,
        id: 4,
        caption: "Dovolená v Tatrách"
    },
    {
        source: imageVacationRome,
        id: 5,
        caption: "Castel Sant'Angelo"
    },
    {
        source: imageVacationGreece,
        id: 6,
        caption: "Pláž na řeckých ostrovech"
    },
    {
        source: imageDoggo,
        id: 7,
        caption: "Timík přijíma do smečky nového člena rodiny"
    },
    {
        source: imageXmasTree,
        id: 8,
        caption: "Vánoční stromeček"
    },
    {
        source: imageXmasSelfie,
        id: 9,
        caption: "První Vánoce"
    },
    {
        source: imageXmasCandles,
        id: 10,
        caption: "Pouštění lodiček"
    },
    {
        source: imageEngagement,
        id: 11,
        caption: "Foto čerstvé snoubenice"
    }
]


const MyVerticalTimeline = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -55vh;
  z-index: 1;
  
  .timeline-logo {
    height: 75%;
    width: 75%;
    display: flex;
    align-self: center;
    left: 50%;
    top: 50%;
    transform: translate(20%, 20%);
  }
  
  .vertical-timeline-element-icon {
    background: ${ props => props.theme.secondary};
    box-shadow: 0 0 0 4px ${ props => props.theme.primaryDark}, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%);
  }
  
  .vertical-timeline-element-content {
    background: ${ props => props.theme.secondary};
    color: ${ props => props.theme.primaryDark};
  }
  
  .vertical-timeline-element-content-arrow {
    border-right: 7px solid  ${ props => props.theme.primaryLight};
  }
  .vertical-timeline-element-content-paragraph {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
  
  .vertical-timeline-element-content-photo {
    height: 95%;
    width: 95%;
    &:hover {
      cursor: pointer;
    }
  }
  
  .vertical-timeline::before {
    background-color: ${ props => props.theme.primaryDark};
  }
`

class Journey extends Component {
    state = { modalIsOpen: false, currentIndex: 0 };
    toggleModal = index => {
        this.setState(state => ({
            modalIsOpen: !state.modalIsOpen,
            currentIndex: index
        }))
        console.log(this.state.currentIndex, this.state.modalIsOpen)
    }

    render() {
        const { modalIsOpen } = this.state;

        return (
            <MyVerticalTimeline>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        date="30. leden 2017"
                        icon={
                            <img className="timeline-logo" src={logoSlovenia} alt="logo" style={{height: "90%"}}/>
                        }
                    >
                        <h3 className="vertical-timeline-element-title">Setkání</h3>
                        <p>
                            Společný příběh snoubenců začíná ve Slovinsku, kam se oba rozhodli jet na studijní pobyt Erasmus.
                        </p><p>
                        Ženich se rozhodoval mezi Francií, Lucemburskem a Slovinskem.
                        Nakonec si zvolil Slovinsko, aby rodiče nemuseli dat do zástavy byt i auto, aby syna v zahraničí živili.
                    </p>
                        <p>
                            Nevěsta na Erasmus původně vůbec nechtěla. Přemluvila ji kamarátka Kika, že prý to bude zábava.

                            Slovinsko byla jediná možná alternativa, jelikož na žádost zůstávalo jenom pár dní.

                            Rodiče odjezd své nejmladší dcery obrečeli.
                        </p>
                        <p>
                            Tato hra osudu způsobila, že se ženich a nevěsta poprvé setkali na jazykovém kurzu slovinštiny v lednu 2017.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="25. únor 2017"
                        icon={
                            <img className="timeline-logo" src={logoHoldingHands} alt="logo" />
                        }
                    >
                        <h3 className="vertical-timeline-element-title">První rande</h3>
                        <p>
                            Od prvního dne trávili budoucí manželé spolu hodně času.
                            Chodili na společné obědy, studentské párty nebo jen tak brázdit ulice města na kole.

                            Vařili spolu bryndzové halušky nebo bramboráčky jako ukázku česko-slovenské kuchyně celému světu.
                        </p>
                        <p>
                            Denodenní společné aktivity vyústily až v první rande na Lublaňském hradě.
                            Nutno podotknout, že ženich i nevěsta byli značně nervózní a detaily společné komunikace už nejsou nikomu známé.
                            S největší pravděpodobností ale bylo hlavním tématem počasí, případně pařící Španělé, kteří je nenechali v noci na koleji vyspat.
                        </p>
                        <p className="vertical-timeline-element-content-paragraph">
                            <img
                                src={images[0]["source"]}
                                alt="new"
                                className="vertical-timeline-element-content-photo"
                                onClick={
                                    () => this.toggleModal(0)
                                }
                            />
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="Léto 2017"
                        icon={
                            <img className="timeline-logo" src={logoVacation} alt="logo"/>
                        }
                    >
                        <h3 className="vertical-timeline-element-title">První společná dovolená</h3>
                        <p>
                            Na první společnou dovolenou vyrazili snoubenci jako chudí studenti vlakem do Lednicko-Valtického areálu do nejlevnejšího hostelu v okolí.
                            Navzdory tomu si prohlídku krás jižní moravy náramně užili.
                        </p>
                        <p className="vertical-timeline-element-content-paragraph">
                            <img
                                src={images[1]["source"]}
                                alt="new"
                                className="vertical-timeline-element-content-photo"
                                onClick={
                                    () => this.toggleModal(1)
                                }
                            />
                        </p>
                        <p>
                            Společné dovolené mají velice rádi, a tak od té doby navštívili mnoho krásnych míst v Česku, na Slovensku i v zahraničí.
                        </p>
                        <p className="vertical-timeline-element-content-paragraph">
                            <img
                                src={images[2]["source"]}
                                alt="new"
                                className="vertical-timeline-element-content-photo"
                                onClick={
                                    () => this.toggleModal(2)
                                }
                                style={{width:"48%", height:"48%"}}
                            />
                            <img
                                src={images[3]["source"]}
                                alt="new"
                                className="vertical-timeline-element-content-photo"
                                onClick={
                                    () => this.toggleModal(3)
                                }
                                style={{width:"48%", height:"48%"}}
                            />
                        </p>
                        <p className="vertical-timeline-element-content-paragraph" style={{marginTop: "5px"}}>
                            <img
                                src={images[4]["source"]}
                                alt="new"
                                className="vertical-timeline-element-content-photo"
                                onClick={
                                    () => this.toggleModal(4)
                                }
                                style={{width:"48%", height:"48%"}}
                            />
                            <img
                                src={images[5]["source"]}
                                alt="new"
                                className="vertical-timeline-element-content-photo"
                                onClick={
                                    () => this.toggleModal(5)
                                }
                                style={{width:"48%", height:"48%"}}
                            />
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="Září 2017"
                        icon={
                            <img className="timeline-logo" src={logoMeet} alt="logo"/>
                        }
                    >
                        <h3 className="vertical-timeline-element-title">Představení rodičům</h3>
                        <p>
                            Představení ženicha budoucímu tchánovi a tchýni proběhlo v září 2017.
                            Rodiče museli oprášit své znalosti slovenštiny, aby ženichovi s jeho přízvukem z východu rozuměli.
                        </p>
                        <p className="vertical-timeline-element-content-paragraph">
                            <img
                                src={images[6]["source"]}
                                alt="new"
                                className="vertical-timeline-element-content-photo"
                                onClick={
                                    () => this.toggleModal(6)
                                }
                                style={{width:"70%", height:"70%"}}
                            />
                        </p>
                        <p>
                            Představení nevěsty druhé straně proběhlo v lednu 2018.
                            Pro zajímavost, Košice jsou prozatím nejvýchodnejším místem světa, kde nevěsta doposud byla.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="Prosinec 2018"
                        icon={
                            <img className="timeline-logo" src={logoXmas} alt="logo"/>
                        }
                    >
                        <h3 className="vertical-timeline-element-title">První "společné" Vánoce</h3>
                        <p>
                            Navzdory tomu, že snoubenci trávili Vánoce se svými rodinami, 600 kilometrů od sebe,
                            chtěli Štedrý večer oslavit taky spolu a pořádně.
                            Tradiční brněnské Vánoce byly tedy oslaveny 10. prosince.
                        </p>
                        <p className="vertical-timeline-element-content-paragraph" style={{marginTop: "5px"}}>
                            <img
                                src={images[7]["source"]}
                                alt="new"
                                className="vertical-timeline-element-content-photo"
                                onClick={
                                    () => this.toggleModal(7)
                                }
                                style={{width:"22%", height:"22%"}}
                            />
                            <img
                                src={images[8]["source"]}
                                alt="new"
                                className="vertical-timeline-element-content-photo"
                                onClick={
                                    () => this.toggleModal(8)
                                }
                                style={{width:"37%", height:"37%"}}
                            />
                            <img
                                src={images[9]["source"]}
                                alt="new"
                                className="vertical-timeline-element-content-photo"
                                onClick={
                                    () => this.toggleModal(9)
                                }
                                style={{width:"37%", height:"37%"}}
                            />
                        </p>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="Srpen 2019"
                        icon={
                            <img className="timeline-logo" src={logoHouse} alt="logo"/>
                        }
                    >
                        <h3 className="vertical-timeline-element-title">Bydlíme spolu</h3>
                        <p>
                            V srpnu 2019 se nevěsta přistěhovala k ženichovi do slovenského studentského bytu,
                            jako premiérový zástupce české národnosti.
                        </p>
                        <p>
                            Necelý rok na to se budoucí manželé přestěhovali do samostatného bytu
                            na kraji Brna v městské části Brno - Lesná, poblíž lesů a mnoha turistických cest.
                        </p>
                        <p>
                            Pandemie a lockdown byly bezpochyby velkou zatěžkávací zkouškou,
                            nicméně to budoucí manžele zblížilo víc než kdykoli předtím.
                            Snoubenci se nezabili.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="18. červenec 2021"
                        icon={
                            <img className="timeline-logo" src={logoEngagement} alt="logo" style={{left:"0%"}}/>
                        }
                    >
                        <h3 className="vertical-timeline-element-title">Zasnoubení</h3>
                        <p>
                            Ženich plánoval požádat o ruku svoji nastávající na nějakém symbolickém místě.
                            Pandemie a zákaz cestování však tyto plány značně zkomplikovaly.
                        </p>
                        <p>
                            Nakonec se vyskytla příležisost při dovolené ve Slovinsku.
                            Místo prvního rande na Lublaňském hradě se jevilo jako nejlepší místo na zpečetění vztahu.
                        </p>
                        <p>
                            Největší výzvou bylo propašování prstenu na místo pokleknutí.
                            Ukryt byl v batohu, který si nevěsta celý den nesla na zádech.
                        </p>

                        <p className="vertical-timeline-element-content-paragraph">
                            <img
                                src={images[10]["source"]}
                                alt="new"
                                className="vertical-timeline-element-content-photo"
                                onClick={
                                    () => this.toggleModal(10)
                                }
                                style={{width:"80%", height:"80%"}}
                            />
                        </p>


                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        date="9. červenec 2022"
                        icon={
                            <img className="timeline-logo" src={logoWedding} alt="logo"/>
                        }
                    >
                        <h3 className="vertical-timeline-element-title">Svatba</h3>
                        <p>
                            Své Ano si snoubenci řeknou 9.7.2022 ve 13:00 v Pelhřimově.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                <ModalGateway>
                    {modalIsOpen ? (
                        <Modal onClose={this.toggleModal}>
                            <Carousel
                                currentIndex={this.state.currentIndex}
                                views={images}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </MyVerticalTimeline>
        )
    }
}

export default Journey;