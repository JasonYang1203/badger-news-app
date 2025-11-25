import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

import BadgerTabs from './navigation/BadgerTabs';
import CS571 from '@cs571/mobile-client';
import BadgerPreferencesContext from './BadgerPreferencesContext';

export default function BadgerNews(props) {

  // Just a suggestion for Step 4! Maybe provide this to child components via context...
  const [prefs, setPrefs] = useState({});

  return (
    <BadgerPreferencesContext.Provider value={{ prefs, setPrefs }}>
      <NavigationContainer>
        <BadgerTabs />
      </NavigationContainer>
    </BadgerPreferencesContext.Provider>
  );
}