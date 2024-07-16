import axios from "axios";
import { setUser, setAuth } from "./store/slice/statusAuthSlice.js";
import { useDispatch } from "react-redux";
export const instance = axios.create({
  // к запросу будет приуепляться cookies
  withCredentials: true,
  baseURL: "http://localhost/",
});


// создаем перехватчик запросов
// который к каждому запросу добавляет accessToken из localStorage
instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("access")}`
    return config
  }
)


// создаем перехватчик ответов
// который в случае невалидного accessToken попытается его обновить
// и переотправить запрос с обновленным accessToken
instance.interceptors.response.use(
  // в случае валидного accessToken ничего не делаем:
  (config) => {
    const dispatch = useDispatch()
    dispatch(setAuth(true))
    return config;
  },
  // в случае просроченного accessToken пытаемся его обновить:
  async (error) => {
    const dispatch = useDispatch()
    dispatch(setAuth(false))
   // предотвращаем зацикленный запрос, добавляя свойство _isRetry 
   const originalRequest = {...error.config};
   originalRequest._isRetry = true; 
    if (
      // проверим, что ошибка именно из-за невалидного accessToken
      error.response.status === 401 && 
      // проверим, что запрос не повторный
      error.config &&
      !error.config._isRetry
    ) {
      try {
        // запрос на обновление токенов
        const resp = await instance.get("/api/v1/refresh");
        // сохраняем новый accessToken в localStorage
        localStorage.setItem("access", resp.data.accessToken);
        // переотправляем запрос с обновленным accessToken
        const dispatch = useDispatch()
        dispatch(setAuth(true))
        return instance.request(originalRequest);
      } catch (error) {
        console.log("AUTH ERROR");
      }
    }
    // на случай, если возникла другая ошибка (не связанная с авторизацией)
    // пробросим эту ошибку 
    throw error;
  }
);
