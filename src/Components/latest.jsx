<<<<<<< HEAD
import {Card, CardImg} from 'react-bootstrap';
import {Link} from 'react-daisyui';

import rog from '../Assets/latest/AsusROG.jpeg';
import zenfone from '../Assets/latest/ZenFoneMax.jpg';
import redminote from '../Assets/latest/RedmiNote12.jpg';
import galaxyZFlip from '../Assets/latest/GalaxyZFlip.jpg';

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
            "textone" : "Dimensions : 70.9 x 147.3 x 8.7 mm",
            "texttwo" : "Weight : 150 g",
            "textthree" : "SoC : Qualcomm Snapdragonn 430 MSM8937",
            "textfour" : "CPU : 4x 1.4GHz ARM Cortex-A53, 4x .1.1GHz ARM Cortex-A53m Cores: 8",
            "textfive" : "GPU : Qualcomm Adreno 505",
            "textsix" : "RAM : 2 GB, 3 GB, 800 MHz",
            "textseven" : "Storage : 16 GB, 32 GB",
            "link" : "https://www.devicespecifications.com/en/model/e95348f5",
            "style" : "btn btn-primary"
        },{
            id : 3,
            src : redminote,
            "spec" : "specification",
            "judul" : "Xiomi Redmi Note 12",
            "textone" : "Dimensions : 76.21 x 165.88 x 7.98 mm",
            "texttwo" : "Weight : 188 g",
            "textthree" : "SoC : Qualcomm Snapdragon 4 Gen 1",
            "textfour" : "CPU : 2x 2.0 GHz Cortex-A76, 6x 1.8 GHz Cortex-A55, Cores: 8",
            "textfive" : "GPU : Qualcomm Adreno 619",
            "textsix" : "RAM : 4 GB, 6 GB, 8 GB, 2133 MHz",
            "textseven" : "Storage : 128 GB, 256 GB",
            "link" : "https://www.devicespecifications.com/en/model/addf5b21",
            "style" : "btn btn-primary"
        },{
            id : 4,
            src : redminote,
            "spec" : "specification",
            "judul" : "Xiomi Redmi Note 12 Pro",
            "textone" : "Dimensions : 76 x 162.9 x 7.9 mm",
            "texttwo" : "Weight : 187 g",
            "textthree" : "SoC : MediaTek Dimensity 1080",
            "textfour" : "CPU : 2x 2.6 GHz ARM Cortex-A76, 6x 2.0 GHz ARM Cortex-A55, Cores: 8",
            "textfive" : "GPU : ARM Mali-G68 C4, Cores: 4",
            "textsix" : "RAM : 4 GB, 6 GB, 8 GB, 2133 MHz",
            "textseven" : "Storage : 128 GB, 256 GB",
            "link" : "https://www.devicespecifications.com/en/model/98ce5b1b",
            "style" : "btn btn-primary"
        },{
            id : 5,
            src : galaxyZFlip,
            "spec" : "specification",
            "judul" : "Samsung Galaxy Z Flip 4",
            "textone" : "Dimensions : 71.9 x 165.2 x 6.9 mm",
            "texttwo" : "Weight : 187 g",
            "textthree" : "SoC : Qualcomm Snapdragon 8+ Gen 1",
            "textfour" : "CPU : 1x 3.19 GHz Cortex-X2, 3x 2.75 GHz Cortex-A710, 4x 1.8 GHz Corte-A510",
            "textfive" : "GPU : Qualcomm Adreno 730",
            "textsix" : "RAM : 8 GB, 6400 MHz",
            "textseven" : "Storage : 128 GB, 256 GB, 512 GB",
            "link" : "https://www.devicespecifications.com/en/model/f7c95a2f",
            "style" : "btn btn-primary"
        }
    ];

    return(
        <div>
            <header style={{paddingTop : "90vh"}}>
            <h2 id='terbaru'
                className='text-center items-center mx-auto'
                style={{fontSize:"18px", fontWeight:"500"}}> New Smatphone </h2>
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

=======
import {Card, CardImg} from 'react-bootstrap';
import {Link} from 'react-daisyui';

import rog from '../Assets/latest/AsusROG.jpeg';
import zenfone from '../Assets/latest/ZenFoneMax.jpg';
import redminote from '../Assets/latest/RedmiNote12.jpg';
import galaxyZFlip from '../Assets/latest/GalaxyZFlip.jpg';

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
            "textone" : "Dimensions : 70.9 x 147.3 x 8.7 mm",
            "texttwo" : "Weight : 150 g",
            "textthree" : "SoC : Qualcomm Snapdragonn 430 MSM8937",
            "textfour" : "CPU : 4x 1.4GHz ARM Cortex-A53, 4x .1.1GHz ARM Cortex-A53m Cores: 8",
            "textfive" : "GPU : Qualcomm Adreno 505",
            "textsix" : "RAM : 2 GB, 3 GB, 800 MHz",
            "textseven" : "Storage : 16 GB, 32 GB",
            "link" : "https://www.devicespecifications.com/en/model/e95348f5",
            "style" : "btn btn-primary"
        },{
            id : 3,
            src : redminote,
            "spec" : "specification",
            "judul" : "Xiomi Redmi Note 12",
            "textone" : "Dimensions : 76.21 x 165.88 x 7.98 mm",
            "texttwo" : "Weight : 188 g",
            "textthree" : "SoC : Qualcomm Snapdragon 4 Gen 1",
            "textfour" : "CPU : 2x 2.0 GHz Cortex-A76, 6x 1.8 GHz Cortex-A55, Cores: 8",
            "textfive" : "GPU : Qualcomm Adreno 619",
            "textsix" : "RAM : 4 GB, 6 GB, 8 GB, 2133 MHz",
            "textseven" : "Storage : 128 GB, 256 GB",
            "link" : "https://www.devicespecifications.com/en/model/addf5b21",
            "style" : "btn btn-primary"
        },{
            id : 4,
            src : redminote,
            "spec" : "specification",
            "judul" : "Xiomi Redmi Note 12 Pro",
            "textone" : "Dimensions : 76 x 162.9 x 7.9 mm",
            "texttwo" : "Weight : 187 g",
            "textthree" : "SoC : MediaTek Dimensity 1080",
            "textfour" : "CPU : 2x 2.6 GHz ARM Cortex-A76, 6x 2.0 GHz ARM Cortex-A55, Cores: 8",
            "textfive" : "GPU : ARM Mali-G68 C4, Cores: 4",
            "textsix" : "RAM : 4 GB, 6 GB, 8 GB, 2133 MHz",
            "textseven" : "Storage : 128 GB, 256 GB",
            "link" : "https://www.devicespecifications.com/en/model/98ce5b1b",
            "style" : "btn btn-primary"
        },{
            id : 5,
            src : galaxyZFlip,
            "spec" : "specification",
            "judul" : "Samsung Galaxy Z Flip 4",
            "textone" : "Dimensions : 71.9 x 165.2 x 6.9 mm",
            "texttwo" : "Weight : 187 g",
            "textthree" : "SoC : Qualcomm Snapdragon 8+ Gen 1",
            "textfour" : "CPU : 1x 3.19 GHz Cortex-X2, 3x 2.75 GHz Cortex-A710, 4x 1.8 GHz Corte-A510",
            "textfive" : "GPU : Qualcomm Adreno 730",
            "textsix" : "RAM : 8 GB, 6400 MHz",
            "textseven" : "Storage : 128 GB, 256 GB, 512 GB",
            "link" : "https://www.devicespecifications.com/en/model/f7c95a2f",
            "style" : "btn btn-primary"
        }
    ];

    return(
        <div>
            <header style={{paddingTop : "90vh"}}>
            <h2 id='terbaru'
                className='text-center items-center mx-auto'
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

>>>>>>> d90cea10dfce5931b9dcff859333cb9d37423843
export default CurrentNews