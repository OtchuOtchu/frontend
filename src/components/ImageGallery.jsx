import React, { useEffect, useState } from 'react';
import { fetchImagesFromFolder } from '../util/dummyData'; // 올바르게 경로를 설정하세요

function ImageGallery() {

    const [images, setImages]= useState([]);
    const [topImages, setTopImages] = useState([]);
    const [bottomImages, setBottomImages] = useState([]);
    const [shoesImages, setShoesImages] = useState([]);
    const [outerImages, setOuterImages] = useState([]);
    const [accessoryImages, setAccessoryImages] = useState([]);


    useEffect(() => {
        // 상의 이미지 가져오기
        fetchImagesFromFolder('images/top/').then((urls) => {
            setTopImages(urls);
        });

        // 하의 이미지 가져오기
        fetchImagesFromFolder('images/bottom/').then((urls) => {
            setBottomImages(urls);
        });

        // 신발 이미지 가져오기
        fetchImagesFromFolder('images/shoes/').then((urls) => {
            setShoesImages(urls);
        });

        // 아우터 이미지 가져오기
        fetchImagesFromFolder('images/outer/').then((urls) => {
            setOuterImages(urls);
        });

        // 악세사리 이미지 가져오기
        fetchImagesFromFolder('images/accessory/').then((urls) => {
            setAccessoryImages(urls);
        });
    }, []);


    // 이미지 데이터를 표 형태로 렌더링하는 함수
    const renderTableRows = (images, category) => {
        const [formData, setFormData] = useState({});
        const handleInputChange = (index, field, value) => {
            setFormData({
                ...formData,
                [index]: {
                    ...formData[index],
                    [field]: value,
                },
            });
        };
        return images.map((url, index) => (
            <tr key={index}>
                <td><img src={url} alt={`${category} Image ${index + 1}`} style={{ width: '100px', height: '100px' }} /></td>
                <td>{category}</td>
                <td style={{ maxWidth: '500px', wordBreak: 'break-all' }}>{url}</td>
                <td>{`${category} Image ${index + 1}`}</td>
                <td style={{ maxWidth: '30px'}}>
                    <input
                        type="text"
                        placeholder="값 입력"
                        value={formData[index]?.customValue1 || ''}
                        onChange={(e) => handleInputChange(index, 'customValue1', e.target.value)}
                    />
                </td>
                <td style={{ maxWidth: '30px'}}>
                    <input
                        type="text"
                        placeholder="값 입력"
                        value={formData[index]?.customValue2 || ''}
                        onChange={(e) => handleInputChange(index, 'customValue2', e.target.value)}
                    />
                </td>
            </tr>
        ));
    };

    return (
        <div>
            <div className=''> 
            
            <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>사진</th>
                        <th>카테고리</th>
                        <th>URL</th>
                        <th>이름</th>
                        <th>최저온도</th>
                        <th>최고온도</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableRows(topImages, '상의')}
                    {renderTableRows(bottomImages, '하의')}
                    {renderTableRows(shoesImages, '신발')}
                    {renderTableRows(outerImages, '아우터')}
                    {renderTableRows(accessoryImages, '악세사리')}
                </tbody>
            </table>
            </div>
\
        </div>
    );
}

export default ImageGallery;