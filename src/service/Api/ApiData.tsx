// import { API } from "../config/config";
// import {
//   apiErrorResponse,
//   apiStatus200ResponseError,
//   apiUnauthorizeResponse401,
//   getFrontendRedirectURL,
// } from "../utils";
// import * as authUtil from "./../../utils/auth.util";
// export const BaseURL = API.endpoint + "/";

// const axios = require("axios").default;

// const defaultHeaders = {
//   isAuth: true,
//   AdditionalParams: {},
//   isJsonRequest: true,
//   api_key: false,
// };

// export const ApiPostNoAuth = (type: any, userData: any) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(
//         BaseURL + type,
//         userData,
//         getHttpOptions({ ...defaultHeaders, isAuth: false })
//       )
//       .then((responseJson: any) => {
//         apiStatus200ResponseError(responseJson);
//         resolve(responseJson);
//       })
//       .catch((error: any) => {
//         apiErrorResponse(error, reject);
//       });
//   });
// };

// export const ApiPutNoAuth = (type, userData) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .put(
//         BaseURL + type,
//         userData,
//         getHttpOptions({ ...defaultHeaders, isAuth: false })
//       )
//       .then((responseJson) => {
//         apiStatus200ResponseError(responseJson);
//         resolve(responseJson);
//       })
//       .catch((error) => {
//         apiErrorResponse(error, reject);
//       });
//   });
// };

// export const ApiGetNoAuth = (type) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(BaseURL + type, getHttpOptions({ ...defaultHeaders, isAuth: false }))
//       .then((responseJson) => {
//         apiStatus200ResponseError(responseJson);
//         resolve(responseJson);
//       })
//       .catch((error) => {
//         apiUnauthorizeResponse401(error);
//         apiErrorResponse(error, reject);
//       });
//   });
// };

// export const ApiPostNoAuthOauth = (type, userData) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(
//         type,
//         userData,
//         getHttpOptions({ ...defaultHeaders, isAuth: false })
//       )
//       .then((responseJson) => {
//         // apiStatus200ResponseError(responseJson)
//         resolve(responseJson);
//       })
//       .catch((error) => {
//         // apiUnauthorizeResponse401(error)
//         apiErrorResponse(error, reject);
//       });
//   });
// };

// export const Api = (type, methodtype, userData) => {
//   return new Promise((resolve, reject) => {
//     userData = userData || {};
//     axios({
//       url: BaseURL + type,
//       headers: getHttpOptions(),
//       data: userData,
//       type: methodtype,
//     })
//       .then((responseJson) => {
//         apiStatus200ResponseError(responseJson);
//         resolve(responseJson);
//       })
//       .catch((error) => {
//         apiErrorResponse(error, reject);
//       });
//   });
// };

// export const ApiGet = (type) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(BaseURL + type, getHttpOptions())
//       .then((responseJson) => {
//         getFrontendRedirectURL(responseJson);
//         apiStatus200ResponseError(responseJson);
//         resolve(responseJson);
//       })
//       .catch((error) => {
//         apiUnauthorizeResponse401(error);
//         apiErrorResponse(error, reject);
//       });
//   });
// };

// export const ApiPost = (type, userData, AdditionalHeader) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(BaseURL + type, userData, {
//         ...getHttpOptions(),
//         ...AdditionalHeader,
//       })
//       .then(async (responseJson) => {
//         await resolve(responseJson);
//         getFrontendRedirectURL(responseJson);
//         apiStatus200ResponseError(responseJson);
//       })
//       .catch((error) => {
//         apiUnauthorizeResponse401(error);
//         apiErrorResponse(error, reject);
//       });
//   });
// };

// export const ApiPut = (type, userData) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .put(BaseURL + type, userData, getHttpOptions())
//       .then((responseJson) => {
//         apiStatus200ResponseError(responseJson);
//         resolve(responseJson);
//       })
//       .catch((error) => {
//         apiUnauthorizeResponse401(error);
//         apiErrorResponse(error, reject);
//       });
//   });
// };

// export const ApiPatch = (type, userData) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .patch(BaseURL + type, userData, getHttpOptions())
//       .then((responseJson) => {
//         apiStatus200ResponseError(responseJson);
//         resolve(responseJson);
//       })
//       .catch((error) => {
//         apiUnauthorizeResponse401(error);
//         apiErrorResponse(error, reject);
//       });
//   });
// };

// export const ApiDelete = (type, userData) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .delete(BaseURL + type, getHttpOptions())
//       .then((responseJson) => {
//         apiStatus200ResponseError(responseJson);
//         resolve(responseJson);
//       })
//       .catch((error) => {
//         apiUnauthorizeResponse401(error);
//         apiErrorResponse(error, reject);
//       });
//   });
// };

// export const ApiDownload = (type, userData) => {
//   const method = userData && Object.keys(userData).length > 0 ? "POST" : "GET";
//   return new Promise((resolve, reject) => {
//     axios({
//       url: BaseURL + type,
//       method,
//       headers: getHttpOptions().headers,
//       responseType: "blob",
//       data: userData,
//     })
//       .then((res) => resolve(new Blob([res.data])))
//       .catch((error) => {
//         apiUnauthorizeResponse401(error);
//         apiErrorResponse(error, reject);
//       });
//   });
// };

// export const ApiGetBuffer = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url, {
//       method: "GET",
//       mode: "no-cors",
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.buffer();
//         } else {
//           resolve(null);
//         }
//       })
//       .then((buffer) => {
//         resolve(buffer);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

// export const getHttpOptions = (options = defaultHeaders) => {
//   let headers = {};
//   if (options.hasOwnProperty("isAuth") && options.isAuth) {
//     if (authUtil.getToken() && authUtil.getOrgKey()) {
//       headers["x-auth-token"] = authUtil.getToken();
//       headers["x-org-id"] = authUtil.getOrgKey().key;
//     }
//   }

//   if (options.hasOwnProperty("api_key") && options.api_key) {
//     headers.api_key = "6QSy49rUTH";
//   }

//   if (options.hasOwnProperty("isJsonRequest") && options.isJsonRequest) {
//     headers["Content-Type"] = "application/json";
//   }

//   if (options.hasOwnProperty("AdditionalParams") && options.AdditionalParams) {
//     headers = { ...headers, ...options.AdditionalParams };
//   }

//   return { headers };
// };
