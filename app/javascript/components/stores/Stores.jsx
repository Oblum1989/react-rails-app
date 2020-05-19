import React from 'react';
import ResponsiveContainer from './ResponsiveContainer'
import ListStores from './ListStores'
import Footer from './Footer';

const Stores = () => (
  <>
    <ResponsiveContainer>
      <ListStores />
      <Footer />
    </ResponsiveContainer>
  </>
);

export default Stores;
