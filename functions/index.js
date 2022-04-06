const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');

admin.initializeApp(functions.config().firebase);
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({origin: true}));

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendNewMeetNotification = functions.firestore
  .document('notifications/{docId}')
  .onWrite(async (change, context) => {
    var userProfile = await admin
      .firestore()
      .collection('users')
      .doc(change.after._fieldsProto.uid.stringValue)
      .get();

    // var message = {
    //   notification: {
    //     title: change.after._fieldsProto.title.stringValue,
    //     body: change.after._fieldsProto.body.stringValue,
    //   },
    //   data: {
    //     string: JSON.stringify(change.after._fieldsProto),
    //   },

    //   token: userProfile._fieldsProto.deviceId.stringValue,
    // };

    // let response = await admin.messaging().send(message);
    console.log('NOTIFICATION -- ', userProfile);
  });
