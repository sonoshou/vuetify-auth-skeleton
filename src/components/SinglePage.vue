<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <div class="flex text-xs-center">
          <div class="main">
            <router-view />
          </div>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.main {
  margin-top: 20px;

  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
