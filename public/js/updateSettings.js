/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

// updateData
export const updateData = async (name, email) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: '/api/v1/users/updateme',
      data: {
        name,
        email,
      },
    });

    if (res.data.status === 'success') {
        showAlert('success', 'Data updated succesfully');
      }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
