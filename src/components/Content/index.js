import React, {useState, useEffect} from "react";

import arrowRigth from "../../assets/arrow-rigth.svg"

import getImages from '../../services/getImages';

const Content = () => {
    const [images, setImages] = useState([])
    const [selectedImage, setSelectedImage] = useState(0)

    useEffect(async() => {
        const responseImages = await getImages()
        setImages(responseImages)
    }, [])

    return(
        <div className="content-container">

            <div className="left-container">
                <h2>{images[selectedImage]?.title}</h2>
                <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
                    Ver mais
                    <img src={arrowRigth} alt="Icone do Ver Mais"/>
                </a>
                <div>
                    {images.map((image, index) => (
                        <img src={image.thumbnailUrl} alt="thumbnail" onClick={() => setSelectedImage(index)}/>
                    ))}
                </div>
            </div>

            <div className="rigth-container">
                <img src={images[selectedImage]?.url} alt="Imagem grande"/>
            </div>

        </div>

    )

}

export default Content