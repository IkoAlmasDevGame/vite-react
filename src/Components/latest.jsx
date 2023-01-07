import {Card, CardImg} from 'react-bootstrap';
import {Link} from 'react-daisyui';

import rog from '../Assets/latest/AsusROG.jpeg';
import zenfone from '../Assets/latest/ZenFoneMax.jpg';

const CurrentNews = () => {

    const Current = [
        {
            id : 1,
            src : rog,
            "spec" : "specification",
            "judul" : "Asus ROG Phone 6",
            "textone" : "Dimensions : 77 x 173 x 10.4 mm",
            "texttwo" : "Weight : 239 g",
            "textthree" : "SoC : Qualcomm Snapdragon 8 Gen 1",
            "textfour" : "CPU : 1x 2.995GHz Cortex-X2, 3x 2.496GHz Cortex-A710, 4x 1.78GHz Cortex-A510",
            "textfive" : "GPU : Qualcomm Adreno 730",
            "textsix" : "RAM : 12 GB, 6400 MHz",
            "textseven" : "Storage : 256 GB",
            "link" : "https://www.devicespecifications.com/en/model/b4f75a91",
            "style" : "btn btn-primary"
        },{
            id : 2,
            src : zenfone,
            "spec" : "specification",
            "judul" : "Asus ZenFone Max (M1)",
            "textone" : "Dimensions : ",
            "texttwo" : "Weight : ",
            "textthree" : "SoC : ",
            "textfour" : "CPU : ",
            "textfive" : "GPU : ",
            "textsix" : "RAM : ",
            "textseven" : "Storage : ",
            "link" : "",
            "style" : "btn btn-primary"
        },{
            id : 3,
            src : zenfone,
            "spec" : "specification",
            "judul" : "",
            "textone" : "Dimensions : ",
            "texttwo" : "Weight : ",
            "textthree" : "SoC : ",
            "textfour" : "CPU : ",
            "textfive" : "GPU : ",
            "textsix" : "RAM : ",
            "textseven" : "Storage : ",
            "link" : "",
            "style" : "btn btn-primary"
        },{
            id : 4,
            src : zenfone,
            "spec" : "specification",
            "judul" : "",
            "textone" : "Dimensions : ",
            "texttwo" : "Weight : ",
            "textthree" : "SoC : ",
            "textfour" : "CPU : ",
            "textfive" : "GPU : ",
            "textsix" : "RAM : ",
            "textseven" : "Storage : ",
            "link" : "",
            "style" : "btn btn-primary"
        }
    ];

    return(
        <div>
            <header style={{paddingTop : "auto", margin : "auto"}}>
            <h2 id='terbaru'
                className='text-center items-center me-0'
                style={{fontSize:"18px", fontWeight:"500"}}> Berita Baru</h2>
                {
                Current.map(({id,src,spec,judul,textone,texttwo,textthree,textfour,textfive,textsix,textseven,link,style}) => (
                    <div key={id}>
                        <Card>
                            <Card.Title className='mb-1 fw-normal text-center'>{spec}</Card.Title>
                            <CardImg src={src} style={{width : "274px", width : "204px", margin : "auto", marginTop : "5px"}}/>
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

export default CurrentNews