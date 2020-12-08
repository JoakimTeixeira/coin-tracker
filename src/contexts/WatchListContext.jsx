import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const WatchListContext = createContext();

export const WatchListContextProvider = ({ children }) => {
  const defaultState = [
    'bitcoin',
    'ethereum',
    'ripple',
  ];

  const verifyLocalStorage = () => (localStorage.getItem('watchList') ? localStorage.getItem('watchList').split(',') : defaultState);
  const [watchList, setWatchList] = useState(verifyLocalStorage);

  useEffect(() => {
    localStorage.setItem('watchList', watchList);
  }, [watchList]);

  const handleWatchList = (items) => {
    setWatchList(items);
  };

  const addCoin = (item) => {
    setWatchList([...watchList, item]);
  };

  const deleteCoin = (id) => {
    setWatchList(watchList.filter((coin) => coin !== id));
  };

  return (
    <WatchListContext.Provider value={{
      watchList, handleWatchList, addCoin, deleteCoin,
    }}
    >
      {children}
    </WatchListContext.Provider>
  );
};

WatchListContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
