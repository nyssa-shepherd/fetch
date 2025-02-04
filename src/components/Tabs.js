import React from 'react';

const Tabs = ({ activeTab, setActiveTab, favorites }) => {
    return (
        <div className="tabs">
            <button
                className={activeTab === 'list' ? 'active' : ''}
                onClick={() => setActiveTab('list')}
            >
                Dog List
            </button>
            <button
                className={activeTab === 'favorites' ? 'active' : ''}
                onClick={() => setActiveTab('favorites')}
            >
            Favorites ({favorites.length || 0})
        </button>
      </div>
    )
}

export default Tabs;