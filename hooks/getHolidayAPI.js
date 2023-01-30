const url = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService='
const Auth_Key = 'fS2lEqjSxbLDWk9WgGzAu71%2F6%2FcEdswoXARBwK3MgL2%2Fj%2F15RBan%2BbFuDbXQ5yuHiOnEbGySD19nB7c3gm1Zvg%3D%3D'
// let params = {
//   'solYear':str(2020),
//   'solMonth':str(1).zfill(2),
//   '_type':'json',
//   'ServiceKey' : AUTH_KEY
// }
const aa = fetch(url+Auth_Key, {
  method: "GET", // 다른 옵션도 가능합니다 (POST, PUT, DELETE, etc.)
  // headers: {
  //   "Content-Type": "application/json",
  // },
  body: JSON.stringify({}),
});

console.log(aa)