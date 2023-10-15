import jwt from "jsonwebtoken";

const generateToken = (appId, appName) => {
  const token = jwt.sign({ appId, appName }, "myApp");

//   localStorage.setItem("token", token);
console.log(token ,"elvis")
  return token;
};

export default generateToken;
