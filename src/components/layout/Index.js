import React from 'react';
import Tracks from '../Tracks/Tracks';
import Search from '../Tracks/Search';
// import ResponsivePlayer from '../Tracks/ResponsivePlayer';

const Index = () => {
  return (
    <React.Fragment>
      <Search />
      <Tracks />
    </React.Fragment>
  );
};

export default Index;
