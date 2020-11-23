import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const WatchListContext = createContext();

export const WatchListContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState(['bitcoin', 'ethereum', 'ripple']);

  const handleWatchList = (items) => {
    setWatchList(items);
  };

  const deleteCoin = (id) => {
    setWatchList(watchList.filter((coin) => coin !== id));
  };

  return (
    <WatchListContext.Provider value={{ watchList, handleWatchList, deleteCoin }}>
      {children}
    </WatchListContext.Provider>
  );
};

WatchListContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
