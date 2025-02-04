import React from 'react';
import DogItem from './DogItem';
import '../styles/Favorites.css';

const Favorites = ({ favorites, toggleFavorite }) => {
  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      {!favorites.length && <h3>You don't have any favorites yet</h3> }
      <ul class="favorites-list">
        {favorites.map((dog) => (
            <DogItem key={dog.id} dog={dog} toggleFavorite={toggleFavorite} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
