import axios from 'axios';

export function signIn(id, password) {
  return axios.get('http://localhost:8080/v1/admin/sign-in', {
    params: {
      adminId: id,
      adminPassword: password
    }
  });
}