<template>
  <v-app>
  <div class="wrapper">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="main_content">
      <router-view></router-view>
    </div>
  </div>
  </v-app>
</template>

<script>
import Sidebar from './components/Layouts/Sidebar';

export default {
  name: 'App',

  components: {
    Sidebar,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100&display=swap');
@import './scss/main.scss';

* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  color: $textcolor; 
}
.wrapper {
  display: flex;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  // overflow: hidden;
}
.main_content {
  background-color: $backgroundmain;
}
.sidebar {
  flex: 1;
}
.main_content {
  flex: 6;
}
</style>
