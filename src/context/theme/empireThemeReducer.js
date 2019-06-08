/* Action Constants */
const THEME_CHANGE = 'THEME_CHANGE';

export const themeReducer = (state, action) => {
  switch(action.type) {
    case THEME_CHANGE:
      console.log('change theme');
      return state;
  default:
    console.log('default');
    return state;
  };
};
