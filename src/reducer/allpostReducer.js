import { FETCH_POST_BUTTON_CLICK } from '../Action/type';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_POST_BUTTON_CLICK:
      return action.payload;
      break;
  }
  return state;
}
