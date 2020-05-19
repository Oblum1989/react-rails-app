import React from 'react'
import Header from './Header'

const ResponsiveContainer = ({ children }) => (
  <div>
    <Header>{children}</Header>
  </div>
);

export default ResponsiveContainer;