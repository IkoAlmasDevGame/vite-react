import { Container, Nav, Navbar} from 'react-bootstrap';
import svg from '../Assets/logo/logo192.png';

const NavigationBar = () => {
    return(
    <header style={{backgroundColor : "rgb(100,100,100)"}}>
        <div>   
            <Navbar variant='white' expand='lg' style={{fontSize : "medium", fontWeight : "500", letterSpacing : "1px"}}>
                <Container>
                <img src={svg} alt='' style={{width : "64px", height : "64px"}}/>
                    <Navbar.Brand>My News Private</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent">
                                <Nav className='fw-bold' style={{margin : "auto"}}>
                                    <Nav.Link href='#home'>Home</Nav.Link>
                                    <Nav.Link href=''>About</Nav.Link>
                                    <Nav.Link href=''>Contact</Nav.Link>
                                    <Nav.Link href='#terbaru'>Berita Baru</Nav.Link>
                                    <Nav.Link href=''>Berita Lama</Nav.Link>
                                </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </header>
    );
}

export default NavigationBar