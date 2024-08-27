import React, { useEffect, useState } from 'react';
import { fetchImagesFromFolder } from '../util/dummyData'; // 올바르게 경로를 설정하세요

function ImageGallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Firebase에서 이미지 가져오기
        fetchImagesFromFolder('images/').then((urls) => {
            setImages(urls);
        });
    }, []);

    return (
        <div className="image-gallery">
            {images.map((url, index) => (
                <img key={index} src={url} alt={`Firebase Image ${index + 1}`} />
            ))}
        </div>
    );
}

export default ImageGallery;