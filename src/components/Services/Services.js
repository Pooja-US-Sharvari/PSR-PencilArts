import React from 'react';
import "./Services.css";
// import './About/About.css';

// Services Component
const Services = () => {
    const serviceList = [
      { name: 'Pencil Portrait', description: 'Single,Couple,family Portraits available in any size',image:"/pics/pic3.jpeg", link: '#' },
      { name: 'Pen Portrait', description: 'Only Single and couple Portraits available',image:"/pics/pen1.jpg", link: '#' },
      { name: 'Wall Painting', description: 'kids room decor,customize wallpaper,FreeHand-Art Work ',image:"/pics/wall1.jpeg", link: '#' },
        ];
  
    return (
      <section id="services" className="services">
        <h2>Services</h2>
        <div className="service-list">
          {serviceList.map((service, index) => (
            <div key={index} className="service">
              <img src={service.image} alt={service.name} className="service-image"/>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a href={service.link} target="_blank" rel="noopener noreferrer">View Service</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default Services;