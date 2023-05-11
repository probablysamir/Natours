/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';
export const login = async (email, password) => {
  try {
    const res = await axios(
      {
        method: 'POST',
        url: 'http://127.0.0.1:3000/api/v1/users/login',
        data: {
          email,
          password,
        },
      },
      {
        withCredentials: true,
        credentials: 'include',
      }
    );

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in succesfully');
      window.setTimeout(() => {
        location.assign('/');
      });
    }

    console.log(res);
    document.cookie = res.data.jwtCookie;
  } catch (err) {
    showAlert('error',err.response.data.message);
  }
};
