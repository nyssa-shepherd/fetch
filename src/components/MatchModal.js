import React from 'react';
import Modal from 'react-modal';
import DogItem from './DogItem';
import '../styles/MatchModal.css';

Modal.setAppElement('#root'); // Required for accessibility

const MatchModal = ({ isOpen, onClose, matchedDog }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      {matchedDog ? (
        <div className="matched-dog">
          <h2>You've Been Matched With:</h2>
          <DogItem dog={matchedDog} />
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      ) : (
        <p>Loading match...</p>
      )}
    </Modal>
  );
};

export default MatchModal;
