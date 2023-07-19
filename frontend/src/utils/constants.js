const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.mrspolischuk.students.nomoredomains.xyz'
  : 'http://localhost:3000'

export const apiConfig = {
  baseUrl: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
};

export const authApiConfig = {
  baseUrl: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
};
