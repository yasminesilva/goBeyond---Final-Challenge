import React, {useState, useEffect} from "react";

import {ContentContainer, ThumbnailContainer} from "./styles";

import arrowRigth from "../../assets/arrow-rigth.svg"

import getImages from '../../services/getImages';

const Content = () => {
    const [images, setImages] = useState([])
    const [selectedImage, setSelectedImage] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    const Thumbnails = () => (
        <ThumbnailContainer>
            {images.map((image, index) => (
                <img className={index === selectedImage ? "active" : ""} src={image.thumbnailUrl} alt="thumbnail" onClick={() => setSelectedImage(index)}/>
            ))}
        </ThumbnailContainer>
    )

    const checkMobile = () => {
        setIsMobile(window.innerWidth < 1024)
    }

    useEffect(() => {

        const fetchImages = async () => {
            const responseImages = await getImages();
            setImages(responseImages);
        }

        window.addEventListener('resize', checkMobile);
        checkMobile();

        fetchImages();
    }, [])

    return(
        <ContentContainer>

            <div className="left-container">
                <h2>{images[selectedImage]?.title}</h2>
                <a href="https://www.corebiz.ag/pt/" target="_blank" rel="noreferrer">
                    veja mais
                    <img src={arrowRigth} alt="Icone do Ver Mais"/>
                </a>
                {!isMobile && <Thumbnails />}
            </div>

            <div className="rigth-container">
                <img src={images[selectedImage]?.url} alt="Imagem grande"/>
            </div>

            {isMobile && <Thumbnails />}

        </ContentContainer>

    )

}

export default Content