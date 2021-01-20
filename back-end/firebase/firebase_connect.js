const firebase=require("firebase")

var config = {
    apiKey: "AIzaSyB5tabqHaKo0ZAgHsX4X0v7FZ88UY0rDAQ",
    authDomain: "gallery-website-2b976.firebaseapp.com",
    databaseURL: "https://gallery-website-2b976-default-rtdb.firebaseio.com",
    storageBucket: "gallery-website-2b976.appspot.com"
};

const app=firebase.initializeApp(config);
const auth=firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

module.exports={
    app,
    auth
}


