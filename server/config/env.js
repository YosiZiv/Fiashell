const {
  env: { MongoURI, SECRET, TOKEN_EXPIRES },
} = process;
console.log(process.env.MongoURI);
module.exports = {
  //  MongoDB MLab Credentials
  MongoURI,
  SECRET,
  TOKEN_EXPIRES,
};
