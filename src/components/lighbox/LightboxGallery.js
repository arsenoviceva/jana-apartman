import React, { useState } from 'react';

function LightboxGallery({ images }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="thumbnail" onClick={() => openLightbox(index)}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
      {selectedImageIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <img src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex + 1}`} />
          </div>
        </div>
      )}
    </div>
  );
}

export default LightboxGallery;