<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>{{ displayName }}</span>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'HelloWorld',
  mounted () {
    const vm = this
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.displayName);
        // User is signed in.
        vm.displayName = user.displayName;
        // ...
      } else {
        // User is signed out.
        // ...
      }
});
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      displayName: undefined
    };
  },
};
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
</style>
