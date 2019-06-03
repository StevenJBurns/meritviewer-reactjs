import React from 'react';
import AppData from '../context/meritviewer.json';
import { AppDataContext } from '../context/AppDataContext';
import './App.css';

const App = props => {
  const [appData, setAppData] = React.useState(AppData);

  React.useEffect(() => {
    console.log(appData);
  }, []);
  
  return (
    <AppDataContext.Provider value={appData}>
      { props.children }
    </AppDataContext.Provider>
  );
};

export default App;
