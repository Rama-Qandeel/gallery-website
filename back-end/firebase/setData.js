const firebase = require("./firebase_connect");

module.exports = {
  saveData: function (req, callback) {
    let image = req.image;

    firebase
      .database()
      .ref(image + ".png")
      .set({
        email: req.email,
      });
    callback(null, {
      statuscode: 200,
      message: "successfully",
    });
  },
};
