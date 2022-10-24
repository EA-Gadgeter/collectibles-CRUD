const firebase = require("firebase-admin");
const serviceAccount = require("../key.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
})

const db = firebase.firestore();

module.exports = {
    db
}