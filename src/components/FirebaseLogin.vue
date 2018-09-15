<template>
  <div>
    <h1>Firebase Login via Twitter</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui';

export default {
  name: 'FirebaseLogin',
  created () {
    const config = {
      apiKey: "YOUR FIREBASE API KEY",
      authDomain: "YOUR FIREBASE APP DOMAIN",
    };
    firebase.initializeApp(config);

    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
      },
      signInOptions: [
        // List of OAuth providers supported.
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: '/#/hello'
    });
  }
}
</script>