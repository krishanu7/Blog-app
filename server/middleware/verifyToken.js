const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res.status(401).json("You are not authenticated");
  }
  try {
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    res.userId = decoded.id;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token is expired" });
    }
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
module.exports = verifyToken;
