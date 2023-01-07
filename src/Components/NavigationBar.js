import {Container, Nav, NavbarBrand} from 'react-bootstrap';
import {Navbar} from 'react-daisyui';

const NavigationBar = () => {
    return(
        <Navbar className='NavBg'>
            <Container>
                <NavbarBrand style={{
                    fontSize : "18px", 
                    textShadow : "0px 0px 0px black", 
                    fontWeight : "400",
                    }}>PUSAT INFORMASI GAME</NavbarBrand>
                    <Nav className='text-center'>
                        <Nav.Link href='' id='homes'>Home</Nav.Link>
                        <Nav.Link href='#about' id='aboutme'>About</Nav.Link>
                        <Nav.Link href='' id='contactus'>Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='#latest' id='new'>CD Terbaru</Nav.Link>
                        <Nav.Link href='#old' id='olds'>CD Terlama</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar