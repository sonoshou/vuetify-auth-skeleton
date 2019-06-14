<template>
  <v-container fluid>
    <h1>DashBoard</h1>
    <p>this is dash board</p>
    <h2>Hello {{ name }} !!</h2>
    <p>設定ページへ</p>
    <p><router-link to="/settings">Go to Setting</router-link></p>
  </v-container>
</template>

<style>
</style>

<script>
import firebase from 'firebase'

export default {
  name: 'Main',
  data () {
    return {
      name: firebase.auth().currentUser.email
    }
  }
}
</script>
