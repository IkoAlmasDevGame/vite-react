import { Container, Nav, Navbar} from 'react-bootstrap';
import svg from '../Assets/logo/logo192.png';

const NavigationBar = () => {
    return(
    <header style={{backgroundColor : "#FADA9D"}}>
        <div>   
            <Navbar variant='white' expand='lg' style={{fontSize : "medium", fontWeight : "500", letterSpacing : "1px"}}>
                <Container>
                <img src={svg} alt='' style={{width : "64px", height : "64px"}}/>
                    <Navbar.Brand style={{color : "white", fontWeight : "500", fontSize : "medium",
                    textShadow : "2px 1px 2px black"}}>My News Private</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
                                <Nav className='fw-bold' style={{margin : "auto", color : "white", fontWeight : "500", 
                                fontSize : "medium"}}>
                                    <Nav.Link style={{color : "white", textShadow : "1px 2px black"}} href='#home'>Home</Nav.Link>
                                    <Nav.Link style={{color : "white", textShadow : "2px 1px black"}} href=''>About</Nav.Link>
                                    <Nav.Link style={{color : "white", textShadow : "3px 1px black"}} href=''>Contact</Nav.Link>
                                    <Nav.Link style={{color : "white", textShadow : "2px 1px black"}} href='#terbaru'>Berita Baru</Nav.Link>
                                    <Nav.Link style={{color : "white", textShadow : "2px 1px black"}} href=''>Berita Lama</Nav.Link>
                                </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </header>
    );
}

export default NavigationBar