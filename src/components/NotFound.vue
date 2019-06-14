<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <div class="flex text-xs-center">
          <h1 class="blue--text title">Not Found, 404</h1>
          <p>The page you were looking for does not exist</p>
          <p><a href="/"><v-btn outline color="blue">GET ME OUT OF HERE!</v-btn></a></p>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<style>
.title {
  font-size: 45px !important;
  font-weight: 400;
}
a {
  text-decoration: none;
}
</style>
