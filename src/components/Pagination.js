import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ currentPage, onPageChange }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1}>
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
