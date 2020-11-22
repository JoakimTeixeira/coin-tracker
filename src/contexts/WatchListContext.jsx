import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const WatchListContext = createContext();

export const WatchListContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState(['bitcoin', 'ethereum', 'ripple']);

  const handleWatchList = (items) => {
    setWatchList(items);
  };

  return (
    <WatchListContext.Provider value={{ watchList, handleWatchList }}>
      {children}
    </WatchListContext.Provider>
  );
};

WatchListContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
