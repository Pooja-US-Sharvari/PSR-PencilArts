import React, { useState, useEffect }from 'react';
import './Gallery.css';


//Slide Component
const Slide = ({ image }) => {
    return (
      <div
        className="slide"
        style={{ backgroundImage: `url(${image})` }}
      />
    );
  };
  
  const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [images.length]);
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    return (
      <div className="slideshow">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <Slide key={index} image={image} />
          ))}
        </div>
        <button className="prev" onClick={handlePrevClick}>&#10094;</button>
        <button className="next" onClick={handleNextClick}>&#10095;</button>
      </div>
    );
  };
  
  const Gallery = () => {
    const images = [
      '/pics/pic5.jpeg',
      '/pics/pen4.jpeg',
      '/pics/pic4.jpeg',
      '/pics/pen2.jpeg',
      '/pics/pic3.jpeg',
      '/pics/wall3.jpeg',
      '/pics/pen3.jpeg',
      '/pics/pic2.jpeg',
      '/pics/wall2.jpeg',
      '/pics/pen1.jpg',
      // '/pics/pic1.jpeg',
      '/pics/pic6.jpeg',
    ];
  
    return (
      <div className="gallery-container">
        <h2 id="gallery" className="gallery-title">Gallery</h2>
        <Slideshow images={images} />
      </div>
    );
  };

  export default Gallery;