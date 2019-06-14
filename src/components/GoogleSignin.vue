<template>
  <div>
    <p>internal domain only</p>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui-ja'
require('firebaseui-ja/dist/firebaseui.css')

export default {
  mounted () {
    let uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          customParameters: {
            hd: '' // domain
          }
        }
      ],
      // Terms of service url.
      tosUrl: ''
    }
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
