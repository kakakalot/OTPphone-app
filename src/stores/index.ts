import {createContext, useContext} from 'react';
import DataStore from './DataStore';

export const stores = {
  dataStore: new DataStore(),
};

export const StoreContext = createContext(stores);

export const useStores = () => useContext(StoreContext);
