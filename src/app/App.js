import React from 'react';
import AppData from '../context/meritviewer.json';
import { AppDataContext } from '../context/AppDataContext';
import { AppThemeContext } from '../context/AppThemeContext';
import './App.css';

const App = props => {
  const [theme, setTheme] = React.useState();
  const [appData, setAppData] = React.useState(AppData);

  React.useEffect(() => {
    console.log(theme);
  }, [theme]);
  
  return (
    <AppThemeContext.Provider value={appData}>
      { props.children }
    </AppThemeContext.Provider>
  );
};

export default App;
