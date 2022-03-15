import React from 'react';
import SliderImage from '../SliderImage';
import  SecondPage from "../../secondCard/SecondPage";
import ThirdPage from '../../secondCard/ThirdPage';
import FouthPage from '../../secondCard/FouthPage';
import FeaturesPage from '../../secondCard/FeaturesPage';
import ContactPage from '../../Contact/contactPage';
import Footer from "../../Footer/footer";
import FifthCard from '../../secondCard/FifthCard';

export default function HomeContent() {
    return (
        <>
        <SliderImage/>
        <SecondPage/>
        <FouthPage/>
        <ThirdPage/>
        <FeaturesPage/>
        <FifthCard/>
        <ContactPage/>
        <Footer/>
        </>
    )
}
