import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1476611317561-60117649dd94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1516941064643-74aacd84843c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
];

const ScrollableBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="flex animate-scroll">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-screen h-screen flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollableBackground;