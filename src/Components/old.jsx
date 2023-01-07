import {Card, CardImg} from 'react-bootstrap';
import {Link} from 'react-daisyui';

import nokia from '../Assets/old/nokia.jpg';

const OldNews = () => {

    const old = [
        {
            id : 1,
            src : nokia,
            "spec" : "Specification",
            "judul" : "Nokia 220",
            "textone" : "Dimensions : 50.3 x 116.4 x 13.2 mm",
            "texttwo" : "Weight : 83 g",
            "textthree" : "Memory cards : microSD, microSDHC",
            "textfour" : "Display : 2.4 in, TFT, 240 x 320 pixels, 18 bit",
            "textfive" : "Battery : 1100 mAh, Li-ion",
            "textsix" : "Camera : 1600 x 1200 pixels, 320 x 240 pixels, 15 fps",
            "textseven" : "Sim Card : Mini-SIM",
            "texteight" : "USB : 1.1, Micro USB",
            "textnine" : "Bluetooth : 3.0",
            "link" : "https://www.devicespecifications.com/en/model/43392b1e",
            "style" : "btn btn-primary"
        }
    ];

    return(
        <div>
            <header>
                <h2
                id='terlama'
                className='text-center items-center mx-auto'
                style={{fontSize:"18px", fontWeight:"500"}}>Old Smartphone</h2>
                {
                    old.map(({id, src, spec, judul, textone, texttwo, textthree, textfour, textfive, textsix, 
                        textseven, texteight, textnine, link, style})=>(
                        <div key={id}>
                            <Card>
                                <Card.Title className='mb-1 fw-normal text-center'>{spec}</Card.Title>
                                    <CardImg src={src} style={
                                        {width : "274px", width : "204px", margin : "auto", marginTop : "5px"}
                                    }/>
                                <Card.Header>
                                    <Card.Title className='text-center'>{judul}</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text className='fw-normal'>
                                        <p>{textone}</p>
                                        <p>{texttwo}</p>
                                        <p>{textthree}</p>
                                        <p>{textfour}</p>
                                        <p>{textfive}</p>
                                        <p>{textsix}</p>
                                        <p>{textseven}</p>
                                        <p>{texteight}</p>
                                        <p>{textnine}</p>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link href={link} className={style}>Baca lebih lanjut</Link>
                                </Card.Footer>
                            </Card>
                        </div>
                    ))
                }
            </header>
        </div>
    );
}

export default OldNews