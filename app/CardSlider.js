"use client";

import React, { useEffect, useRef } from 'react';
import Card from './card';

const CardSlider = ({ cards }) => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let start = null;
        let animationFrameId;

        const animateSlider = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;

            // Scroll 1 pixel per frame
            slider.scrollLeft += 1;

            // Reset scroll position if at the end
            if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                slider.scrollLeft = 0;
            }

            // Request the next animation frame
            animationFrameId = requestAnimationFrame(animateSlider);
        };

        animationFrameId = requestAnimationFrame(animateSlider);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="relative w-full overflow-hidden mt-28">
            <div
                ref={sliderRef}
                className="flex space-x-4" // Added space between cards
            >
                {cards.map((card, index) => (
                    <div key={index} className="flex-shrink-0">
                        <Card {...card} />
                    </div>
                ))}
            </div>
            <div className="flex mt-20 text-5xl justify-center h-screen ">
                <div>Explore inspiring design</div>
            </div>

        </div>
        
    );
};

export default CardSlider;
