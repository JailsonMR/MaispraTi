import React, { useState } from 'react';

function ImageGallery() {
  const images = [
    'https://picsum.photos/id/1018/800/600',
    'https://picsum.photos/id/1015/800/600',
    'https://picsum.photos/id/1019/800/600',
    'https://picsum.photos/id/1020/800/600',
    'https://picsum.photos/id/1021/800/600'
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = images.indexOf(selectedImage);
    let newIndex = currentIndex + direction;

    // Tratar navegação cíclica
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="image-gallery">
      <h2>Galeria de Imagens</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Imagem ${index + 1}`}
            onClick={() => openModal(image)}
            style={{ cursor: 'pointer', width: '200px', height: '150px', objectFit: 'cover' }}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img 
              src={selectedImage} 
              alt="Imagem selecionada" 
              style={{ maxWidth: '90%', maxHeight: '80vh' }}
            />
            <div className="navigation-buttons">
              <button onClick={() => navigateImage(-1)}>Anterior</button>
              <button onClick={() => navigateImage(1)}>Próximo</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;