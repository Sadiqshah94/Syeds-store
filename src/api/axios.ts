import axios from 'axios';



const apiInstance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1",
    headers: {
        'Content-Type': 'application/json',
    },
    timeout:1000000
})



apiInstance.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('token');
        if(token){
            if(config.headers){
                (config.headers as any).Authorization = `Bearer ${token}`
            }
        }
        return config;

    },
    (error)=>{
        return Promise.reject(error);
    }
)



apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('API Error:', error);
      return Promise.reject(error);
    }
  );

  export default apiInstance;