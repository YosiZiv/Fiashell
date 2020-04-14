const {
  env: { MongoURI },
} = process;
console.log(process.env.MongoURI);
module.exports = {
  //  MongoDB MLab Credentials
  MongoURI,
};
