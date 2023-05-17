const usersModel = require("../users/users-model");

function logger(req, res, next) {
  console.log(`${new Date().toISOString()} ${req.method} to ${req.url}`);
  next();
}

function validateUserId(req, res, next) {
  const users = usersModel.getById(req.params.id);

  if (!users) {
    next({ status: 404, message: `{ mesaj: "kullanıcı bulunamadı" }` });
  } else {
    next();
  }
}

function validateUser(req, res, next) {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ mesaj: "gerekli name alanı eksik" });
  } else {
    req.name = name;
    next();
  }
}

function validatePost(req, res, next) {
  const { text } = req.body;
  if (!text) {
    res.status(400).json({ mesaj: "gerekli text alanı eksik" });
  } else {
    req.text = text;
    next();
  }
}

// bu işlevleri diğer modüllere değdirmeyi unutmayın
module.exports = {
  logger,
  validateUserId,
  validatePost,
  validateUser,
};
