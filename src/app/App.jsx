import React from 'react';
import AppData from '../data/meritviewer.json';
import { EmpireThemeContext } from '../context/theme/empireThemeContext';
import { themes } from '../context/theme/empireThemes';
import './App.scss';

export const App = props => {
  const [appData, setAppData] = React.useState(AppData);
  const [empire, setEmpire] = React.useState('ALL')
  const [theme, setTheme] = React.useState({});

  const changeTheme = newEmpire => {
    setEmpire(newEmpire);
    localStorage.setItem('empire', newEmpire);

    if(newEmpire === 'ALL') return setAppData(AppData);

    let filteredMerits = AppData.map(category => 
      ({...category, groups: category.groups.map(group =>
        ({...group, merits: group.merits.filter(merit =>
          merit.empire === empire || merit.empire === 'ALL'
        )})
      )})
    )
    setAppData(filteredMerits);
  };

  React.useEffect(() => {
    const localStorageEmpire = localStorage.getItem('empire') || 'ALL';
    changeTheme(localStorageEmpire);
  }, []);

  React.useEffect(() => {
    console.log('empire: ', empire);
    console.log('merits: ', appData[0].groups[0].merits);
    setTheme(themes[empire]);

  }, [empire]);

  return (
    <EmpireThemeContext.Provider value={{ theme, changeTheme }}>
      { props.children }
    </EmpireThemeContext.Provider>
  );
};
