import axios from 'axios'
import router from '../router/index'

let baseUrl = '/fzyq-web/open'
var instance = axios.create({
  baseURL: baseUrl,
  timeout: 20000,
});

instance.interceptors.request.use(
  config => {
    // if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
    //   config.headers.Authorization = `token ${store.state.token}`;
    // }
    
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status == 401) {
      router.push({
        path: '/login',
      })
      
    }
    return Promise.reject(error)
  }
);


export default instance

