import React, { useState } from 'react';
import './App.css'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { Restore, Favorite, LocationOn } from '@material-ui/icons';

function App() {

  const [value, setValue] = useState(0);

  return (
    <div className={'main_container'} >
      <div>
        <div className={'hero'}>
          <h1>HERO</h1>
        </div>
        <section className={'section'}>
          <h1>section of the main page</h1>
        </section>
      </div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={'botton_navigation_fixed'}
        showLabels
      >
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorite" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation>
    </div>
  );
}

export default App;
