import React, { useState } from 'react';
import PropertyForm from './PropertyForm';
import PropertyList from './PropertyList';

const AdminPage = () => {
  const [showList, setShowList] = useState(false);

  const handleViewList = () => {
    setShowList(!showList);
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">Admin - Manage Properties</h1>

      {/* Button to toggle list */}
      <button onClick={handleViewList} className="btn btn-primary mb-4">
        {showList ? 'Hide List' : 'View List'}
      </button>

      {/* Show Property List if true */}
      {showList && <PropertyList />}

      {/* Property Form */}

{!showList && <PropertyForm />}
      

    </div>
  );
};

export default AdminPage;
