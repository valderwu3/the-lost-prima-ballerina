"use client"
import { useEffect, useState } from 'react';


export default function Banner() {
    const [adWidth, setAdWidth] = useState(320);
    const [adHeight, setAdHeight] = useState(50);
    useEffect(() => {
        const updateWidth = () => {
            setAdWidth(window.innerWidth >= 768 ? 728 : 320);
            setAdHeight(window.innerWidth >= 768 ? 90 : 50);
        };
        updateWidth()
    }, []);
    
    return (
        <div className="flex justify-center">
            <iframe
                src={`/adsterra_${adWidth}.html`}
                width={`${adWidth}px`}
                height={`${adHeight}px`}
                scrolling="no"
            />
        </div>
    );
}