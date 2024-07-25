import React, { useRef } from 'react';
import Card from './Card';

const MultiCarousel = () => {
    const containerRef = useRef(null);

    const handlePrev = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.clientWidth;
            containerRef.current.scrollLeft -= containerWidth;
        }
    };

    const handleNext = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.clientWidth;
            containerRef.current.scrollLeft += containerWidth;
        }
    };

    return (
        <div className='main-Multi-div flex gap-5 relative overflow-x-hidden w-full px-5 scroll-smooth boxContainer' ref={containerRef}>
            <button className='fixed top-0 right-0 z-20 active:bg-slate-900 p-2' onClick={handleNext}>Next</button>
            <Card />
            <button className=' fixed top-0 left-0 z-20 active:bg-slate-900 p-2' onClick={handlePrev}>Previous</button>
        </div>
    );
};

export default MultiCarousel;
