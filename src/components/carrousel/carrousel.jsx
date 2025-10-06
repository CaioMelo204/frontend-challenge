"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function ResponsiveCarousel() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        autoplay: true,
    });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const images = [
        "https://picsum.photos/id/1011/900/400",
        "https://picsum.photos/id/1012/900/400",
        "https://picsum.photos/id/1013/900/400",
    ];

    if (isMobile) {
        return (
            <div className="carousel-container">
                <img
                    src={images[0]}
                    alt="Imagem fixa mobile"
                    className="carousel-image"
                />
            </div>
        );
    }

    return (
        <div className="carousel-wrapper">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((img, index) => (
                        <div className="embla__slide" key={index}>
                            <img src={img} alt={`slide-${index}`} className="carousel-image" />
                        </div>
                    ))}
                </div>
            </div>

            <button className="carousel-btn prev" onClick={scrollPrev}>◀</button>
            <button className="carousel-btn next" onClick={scrollNext}>▶</button>
        </div>
    );
}