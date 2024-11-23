import React, { useState } from 'react';
import "../index.css"; // Certifique-se de ter algum estilo básico ou classes CSS

const GalleryComponent = ({ images, width, height, radius }) => {
    // Verifica se as imagens estão disponíveis e não são vazias
    if (!images || images.length === 0) {
      return <p>Sem imagens disponíveis</p>; // Exibe uma mensagem caso o array esteja vazio ou indefinido
    }
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Função para mudar a imagem principal (carrossel)
    const handleThumbnailClick = (index) => {
      setCurrentIndex(index);
    };
  
    // Função para navegar para a próxima imagem
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    // Função para navegar para a imagem anterior
    const prevImage = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div style={{ images,borderRadius: radius, overflow: 'hidden' }}>
        {/* Carrossel de imagem principal */}
        <div style={{ position: 'relative', backgroundColor: images[currentIndex].backgroundColor, }}>
          <img
            src={images[currentIndex].src}
            alt="Imagem principal"
            style={{
              width: '700px',
              height: '570px',
              objectFit: 'cover',
              borderRadius: '4px',
              transition: 'all 0.3s ease',
            }}
          />
          
          {/* Botões de navegação */}
          <button
            onClick={prevImage}
            style={{
              
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
              borderRadius: '50%',
            }}
          >
            &#60;
          </button>
          <button
            onClick={nextImage}
            style={{
              
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
              borderRadius: '50%',
            }}
          >
            &#62;
          </button>
        </div>
  
        {/* Miniaturas abaixo */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
            flexWrap: 'wrap', // Garantir que as miniaturas se ajustem corretamente
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Miniatura ${index}`}
              style={{
                backgroundColor: image.backgroundColor,
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                margin: '0 5px',
                cursor: 'pointer',
                border: currentIndex === index ? '2px solid blue' : 'none', // Destaque na imagem selecionada
                borderRadius: '4px',
                transition: 'border 0.3s',
                flexShrink: 0, // Evitar que as miniaturas encolham
              }}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default GalleryComponent;