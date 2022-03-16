import React, {Component} from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import styled from "styled-components";

const MyNavbar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  
  overflow-x: hidden;
`

class Navbar extends Component {

    state = {
        displayMobileNavbar: false
    }

    componentDidMount() {
        window.addEventListener('resize', this.checkAndAutoHideMobileNavbar)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkAndAutoHideMobileNavbar)
    }

    toggleMobileNavbar = () => {
        this.setState( prevState => {
            return { displayMobileNavbar: !prevState.displayMobileNavbar}
        })
    }

    checkAndAutoHideMobileNavbar = () => {
        const screeWidth = window.innerWidth
        if (this.state.displayMobileNavbar && screeWidth > 768) {
            this.setState({
                displayMobileNavbar: false
            })
        }
    }

    render() {
        return (
            <MyNavbar>
                <DesktopNavbar
                    toggleMobileNavbar = {this.toggleMobileNavbar}
                    displayMobileNavbar = {this.state.displayMobileNavbar}
                />
                <MobileNavbar displayMobileNavbar = {this.state.displayMobileNavbar} toggleMobileNavbar={this.toggleMobileNavbar}/>
            </MyNavbar>
        )
    }
}

export default Navbar;