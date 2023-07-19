const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.mrspolischuk.students.nomoredomains.xyz'
  : 'http://localhost:3000'

export const apiConfig = {
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
};

export const authApiConfig = {
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
};
