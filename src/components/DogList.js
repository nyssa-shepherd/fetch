import React, { useEffect, useContext, useState } from 'react';
import Modal from 'react-modal';
import { fetchDogIds, fetchBreeds, getMatch, fetchDogs } from '../api/fetchDogs';
import { AuthContext } from '../context/AuthContext';
import DogItem from './DogItem';
import Favorites from './Favorites';
import MatchModal from './MatchModal';
import Pagination from './Pagination';
import Tabs from './Tabs';
import "../styles/DogList.css";

const DogList = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState('list'); // "list" or "favorites"
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [matchedDog, setMatchedDog] = useState(null);
  const [filter, setFilter] = useState( {
    size: 12,
    from: 1,
    sort: 'breed:asc',
    breeds: [],
  });

  useEffect(() => {
    if (isAuthenticated) {
      fetchBreeds(setBreeds);
      fetchDogIds(setDogs, filter);
    }
  }, []);

  const updateFilter = (page, selectedBreed) => {
    const updatedFilter = filter;

    if (page) updatedFilter.from = page;
    if (selectedBreed) updatedFilter.breeds = [selectedBreed];

    setFilter(updatedFilter);
    fetchDogIds(setDogs, filter);
  }

  const toggleFavorite = (dog) => {
    dog.isFavorite ? dog.isFavorite = false : dog.isFavorite = true;

    setFavorites((prev) =>
      prev.some((fav) => fav.id === dog.id)
        ? prev.filter((fav) => fav.id !== dog.id)
        : [...prev, dog]
    );
  };

  const findMatch = async () => {
    setIsModalOpen(true);
    if (favorites.length === 0) return;

    const matchId = await getMatch(favorites.map(dog => dog.id));
    if (matchId) {
      const dogData = await fetchDogs([matchId]);
      setMatchedDog(dogData[0]);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="dog-list">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} favorites={favorites.length}/>
      {activeTab === 'list' && (
        <>
          <h2>Search Dogs</h2>
          <select onChange={(e) => updateFilter(null, e.target.value)} value={filter.selectedBreed}>
            <option value="">All Breeds</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>

          <div className="dog-items">
            {dogs.map((dog) => (
              <DogItem key={dog.id} dog={dog} toggleFavorite={toggleFavorite} />
            ))}
          </div>

          <Pagination currentPage={filter.from} onPageChange={updateFilter} toggleFavorite={toggleFavorite} />
        </>
      )}
      {activeTab === 'favorites' && 
        <>
          <Favorites favorites={favorites} />
          <button disabled={!favorites.length} onClick={() => findMatch(favorites)}>Find a Match</button>
        </>
      }
      <MatchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} matchedDog={matchedDog} />
    </div>
  );
};

export default DogList;
