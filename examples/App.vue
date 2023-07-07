<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/jsx">JSX</router-link> |
      <router-link to="/test">loading组件</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
