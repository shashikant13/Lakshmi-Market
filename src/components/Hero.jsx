import { useState, useEffect } from 'react';
import { Phone, MapPin } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
  "https://i.postimg.cc/7PSc4PCX/unnamed.jpg"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [textPosition, setTextPosition] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextPosition((prev) => (prev - 1 < -100 ? 100 : prev - 1));
    }, 50);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6 md:px-12">
        <div className="w-full overflow-hidden whitespace-nowrap">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
            <span style={{ display: 'inline-block', transform: `translateX(${textPosition}%)`, transition: 'transform 0.05s linear' }}>
              Welcome to Lakshmi Market
            </span>
          </h1>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-lg sm:max-w-xl">
          Your One-Stop Shop for Motor Parts, Vehicle Services & Daily Essentials
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href="tel:+919576417176" 
            className="flex items-center justify-center px-5 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors w-full sm:w-auto"
          >
            <Phone className="mr-2" size={20} />
            Call Now
          </a>
          <a 
            href="https://g.co/kgs/HbSyzfc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-5 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors w-full sm:w-auto"
          >
            <MapPin className="mr-2" size={20} />
            Visit Store
          </a>
        </div>
      </div>
    </div>
  );
}
