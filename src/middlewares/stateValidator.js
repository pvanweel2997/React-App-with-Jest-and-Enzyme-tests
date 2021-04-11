import tv4 from 'tv4';
import stateScema from 'middlewares/stateSchema';

export default ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  if (!tv4.validate(getState(), stateScema)) {
    console.warn('Invalid StateSchema Detected');
  }
};
