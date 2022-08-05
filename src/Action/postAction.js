import { FETCH_POST_BUTTON_CLICK, SELECT_POST } from './type';
import axios from 'axios';

// export const fetchPost = () => {
//   return {
//     type: FETCH_POST_BUTTON_CLICK,
//     payload: [
//       {
//         userId: 1,
//         id: 'e1',
//         title: 'Toilet Paper',
//         amount: 94.12,
//       },
//       {
//         userId: 1,
//         id: 'e2',
//          title: 'New TV',
//           amount: 799.49

//         },
//       {
//         userId: 1,
//         id: 'e3',
//         title: 'Car Insurance',
//         amount: 294.67,
//       },
//       {
//         userId: 1,
//         id: 'e4',
//         title: 'New Desk (Wooden)',
//         amount: 450,
//       },
//     ],
//   };
// };
export const fetchPost = () => (dispatch) => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then((res) => {
      dispatch({
        type: FETCH_POST_BUTTON_CLICK,
        payload: res.data,
      });
    });
};

export const selectPost = (post) => {
  return {
    type: SELECT_POST,
    payload: post,
  };
};
