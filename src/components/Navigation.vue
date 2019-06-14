<template>
  <v-app>
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="navBar"
    >
      <v-list dense class="pt-0">
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            :to="item.link"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    <v-toolbar
      dark
      color="primary"
      clipped-left
      fixed
      app
    >
      <v-toolbar-side-icon @click.stop="navBar = !navBar"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon @click="logout" v-on="on">
            <v-icon>exit_to_app</v-icon>
          </v-btn>
        </template>
        <span>ログアウト</span>
      </v-tooltip>

    </v-toolbar>
    <v-content>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'app',
    data () {
      return {
          navBar:null,
          items: [
            { title: 'Dashboard', icon: 'dashboard', link: "dashboard" },
            { title: 'Settings', icon: 'settings', link: "settings" }
          ],
      }
    },
    methods: {
      logout() {
        console.log("test")
        firebase.auth().onAuthStateChanged( (user) => {
          firebase.auth().signOut().then(()=>{
            location.href = '/signin';
          })
          .catch( (error)=>{
            // console.log(`ログアウト時にエラーが発生しました (${error})`);
          });
        });
      }
    },
    mounted: function () {

    },
    destroyed: function () {

    }
  }
</script>

<style>
  a {
    text-decoration: none;
  }
</style>
