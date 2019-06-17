import React from 'react';
import AppData from '../data/meritviewer.json';
import { EmpireThemeContext } from '../context/theme/empireThemeContext';
import { themes } from '../context/theme/empireThemes';
import './App.scss';

export const App = props => {
  const [appData, setAppData] = React.useState(AppData);
  const [empire, setEmpire] = React.useState(localStorage.getItem('empire') || 'ALL');
  const [theme, setTheme] = React.useState({});

  React.useEffect(() => {
    localStorage.setItem('empire', empire);

    /* bail out early and set appData to AppData is empire is 'ALL' */
    if(empire === 'ALL') {
      setAppData(AppData);
      setTheme(empire);
      return;
    };

    /* use map and filter to drill down to the Merit level in AppData*/
    let filteredMerits = AppData.map(category => 
      ({...category, groups: category.groups.map(group =>
        ({...group, merits: group.merits.filter(merit =>
          merit.empire === empire || merit.empire === 'ALL'
        )})
      )})
    );

    setAppData(filteredMerits);
    setTheme(themes[empire]);
  }, [empire]);

  const changeTheme = newEmpire => setEmpire(newEmpire);

  return (
    <EmpireThemeContext.Provider value={{ appData, theme, changeTheme }}>
      { props.children }
    </EmpireThemeContext.Provider>
  );
};
