import { useState } from "react";

import usePeopleStore from "../store/PeopleStore";

import InputForm from "../components/InputForm";
import BlackButton from "../components/BlackButton";

import ImageGallery from '../components/ImageGallery';

export default function AllClothes() {

    return (
        
        <div>
            <h1>어드민 페이지</h1>
            <h2>이미지 갤러리</h2>
            <ImageGallery/>
        </div>

    );
}