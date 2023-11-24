import React from 'react';
import { useNavigate } from 'react-router-dom';
import convers1 from "../assets/convers1.png";
import videoSrc from "../assets/stock.webm";


const Introduction = () => {
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${videoSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'relative',
  };

  const videoStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ajuste la vidéo pour remplir complètement le conteneur
    zIndex: '-1', // Place la vidéo en arrière-plan en réglant le z-index en arrière
  };

  const bubbleStyle = {
    position: 'absolute',
    width: '20px',
    height: '20px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    animation: 'float 3s infinite',
  };

  const contentStyle = {
    textAlign: 'center',
    maxWidth: '800px',
    width: '100%',
    margin: '20px auto 4px',
    backgroundColor: '#198754',
    padding: '20px',
    borderRadius: '10px',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '15px',
    color: '#fff',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#fff',
  };

  const buttonStyle = {
    padding: '15px 30px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: '#198754',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  const handleButtonClick = () => {
    navigate('/logchat');
  };

  return (
    <div style={containerStyle}>

      <video autoPlay loop muted style={videoStyle}>
        <source src={videoSrc} type="video/mp4" />
        Votre navigateur ne prend pas en charge la vidéo.
      </video>
      
      <div style={bubbleStyle} />
      <div style={contentStyle}>
        
        <h1 style={headingStyle}>Bienvenue sur ChatRéel</h1>
        <p style={paragraphStyle}>
          Découvrez une nouvelle façon de rester connecté avec vos amis. Notre application de messagerie instantanée offre une expérience utilisateur exceptionnelle avec des fonctionnalités avancées.
        </p>
        <button style={buttonStyle} onClick={handleButtonClick}>Commencer</button>
      </div>
    </div>
  );
};

export default Introduction;

// Ajoutez le CSS ci-dessous directement dans le fichier JavaScript
const css = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .bubble-animation {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    animation: float 3s infinite;
  }
`;

const styleTag = document.createElement('style');
styleTag.type = 'text/css';
styleTag.appendChild(document.createTextNode(css));
document.head.appendChild(styleTag);
