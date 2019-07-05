import React from 'react';
import AppData from '../data/meritviewer.json';
import { AppDataContext } from '../context/data/AppDataContext';
import { EmpireThemeContext } from '../context/theme/empireThemeContext';
import { themes } from '../context/theme/empireThemes';
import './App.scss';

export const App = props => {
  const [currentAppData, setCurrentAppData] = React.useState(AppData);
  const [empire, setEmpire] = React.useState(localStorage.getItem('empire') || 'ALL');
  const [currentCategory, setCurrentCategory] = React.useState();
  const [currentGroup, setCurrentGroup] = React.useState();
  const [currentMerit, setCurrentMerit] = React.useState();
  const [theme, setTheme] = React.useState({});

  React.useEffect(() => {
    localStorage.setItem('empire', empire);

    /* bail out early and set appData to AppData is empire is 'ALL' */
    if(empire === 'ALL') {
      setCurrentAppData(AppData);
      setTheme(themes['ALL']);
      return;
    };

    /* use map and filter to drill down to the Merit level in AppData */
    let filteredMerits = AppData.map(category => 
      ({...category, groups: category.groups.map(group =>
        ({...group, merits: group.merits.filter(merit =>
          merit.empire === empire || merit.empire === 'ALL'
        )})
      )})
    );

    setCurrentAppData(filteredMerits);
    setTheme(themes[empire]);
  }, [empire]);

  const changeTheme = newEmpire => setEmpire(newEmpire);

  const changeCurrentCategory = newCategory => setCurrentCategory(newCategory);

  const changeCurrentGroup = newGroup => setCurrentGroup(newGroup);

  const changeCurrentMerit = newMerit => setCurrentMerit(newMerit);

  return (
    <AppDataContext.Provider value={
      { currentAppData,
        changeCurrentCategory,
        changeCurrentGroup,
        changeCurrentMerit,
      }
    }>
      <EmpireThemeContext.Provider value={{ theme, changeTheme }}>
        { props.children }
      </EmpireThemeContext.Provider>
    </AppDataContext.Provider>
  );
};
