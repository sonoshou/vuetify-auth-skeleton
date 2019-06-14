<template>
  <div>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field v-model="email" prepend-icon="email" name="email" rule="[rules.required, rules.emailRules]" label="Email" type="text"></v-text-field>
              <v-text-field v-model="password" id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="mailSignIn" color="primary">Signin</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui-ja'
require('firebaseui-ja/dist/firebaseui.css')

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    googleSignIn: function () {
      var provider = new firebase.auth.GoogleAuthProvider()
      provider.setCustomParameters({
        hd: 'tbs.co.jp'
      })
      firebase.auth().signInWithPopup(provider)
        .then(obj => {
          alert('Create account: ' + obj.user.displayName)
          this.$router.push('/')
        })
        .catch(error => alert(error.message))
    },
    mailSignIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(function(auth) {
          location.href = '/'
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
