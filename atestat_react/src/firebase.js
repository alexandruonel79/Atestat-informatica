import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAETxtde9QYDL79kj76ht5hdJmL-kwdfnQ",
    authDomain: "atestat-f9d14.firebaseapp.com",
    databaseURL: "https://atestat-f9d14.firebaseio.com",
    projectId: "atestat-f9d14",
    storageBucket: "atestat-f9d14.appspot.com",
    messagingSenderId: "67570304846",
    appId: "1:67570304846:web:553b7c7acb49e89a8b001f"
  };

  var fireDb=firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();