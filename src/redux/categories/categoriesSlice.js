const CHECK_STATUS = 'categories/CHECK_STATUS';

const INITIAL_STATE = 0;

const categoryReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction.';
    default:
      return state;
  }
};
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default categoryReducer;
