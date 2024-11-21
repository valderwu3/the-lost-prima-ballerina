import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Music4 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const carouselImages = [
  'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&w=2071&q=80',
  'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=2069&q=80',
];

export default function Header() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImage(
        (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
      );
    } else {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }
  };

  return (
    <header className="relative h-[60vh] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/80 to-transparent">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-3">
              <Music4 className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight text-white">
                The Lost Prima Ballerina Full Movie
              </h1>
            </div>
            <h2 className="text-xl font-medium tracking-wide text-white/90 italic max-w-2xl py-5">
              A mesmerizing journey through the world of ballet, ambition, and redemption
            </h2>
          </div>
        </div>
      </div>
      {carouselImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Carousel ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-0 h-32 flex items-center justify-between px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('prev')}
          className="text-white hover:bg-white/20"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('next')}
          className="text-white hover:bg-white/20"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentImage
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </header>
  );
}