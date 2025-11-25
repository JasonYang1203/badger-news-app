import { createContext } from 'react';

// This is used to store the preferences of the Badger
const BadgerPreferencesContext = createContext({
    prefs: {},
    setPrefs: () => {}
});

export default BadgerPreferencesContext;
