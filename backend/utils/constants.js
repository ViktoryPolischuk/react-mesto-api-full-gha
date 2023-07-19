const {
  PORT = 3000,
  DB_URL = 'mongodb://127.0.0.1:27017/mestodb',
  JWT_SECRET = 'bf63301d39083e2059ace7d8dd997c8f2b53150008ca1805e6c6a00c8d660c4c',
} = process.env;

module.exports = {
  PORT,
  DB_URL,
  JWT_SECRET,
};
