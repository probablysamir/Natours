/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';
export const login = async (email, password) => {
  try {
    const res = await axios(
      {
        method: 'POST',
        url: '/api/v1/users/login',
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
    // document.cookie = res.data.jwtCookie;
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios(
      {
        method: 'GET',
        url: '/api/v1/users/logout',
      },
      {
        withCredentials: true,
        credentials: 'include',
      }
    );

    console.log(res);
    // document.cookie = res.data.jwtCookie;
    if (res.data.status === 'success') location.reload(true);
  } catch (err) {
    showAlert('error', 'Error logging out. Please try again!');
  }
};
