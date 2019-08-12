import axios from 'axios';

export function signIn(id, password) {
  return axios.get('http://localhost:8080/v1/admin/sign-in', {
    params: {
      adminId: id,
      adminPassword: password
    }
  }).then(function (response) {
    if (response.status === 200) {
      alert("성공");
    }
  })
  .catch(function (error) {
    alert("실패");
    console.log(error);
  })
}