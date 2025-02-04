import React from 'react';
import "../styles/DogItem.css";

const DogItem = ({ dog, toggleFavorite }) => {
  return (
    <div className="dog-item">
      <img src={dog.img} alt={dog.name} className="dog-image" />
      <div className="dog-details">
        <h3>{dog.name}</h3>
        <p><strong>Breed:</strong> {dog.breed}</p>
        <p><strong>Age:</strong> {dog.age} years</p>
        <p><strong>Location:</strong> {dog.zip_code}</p>
      </div>
      <button 
        className={`favorite-btn ${dog.isFavorite ? 'favorited' : ''}`} 
        onClick={() => toggleFavorite(dog)}
      >
        {dog.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default DogItem;
