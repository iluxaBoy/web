<template>
  <v-app class="main-container">
      <div class="top-bar"></div>
    <v-main class="box">
      <TopCard class="mb-7"/>
      <TopCardInfo class="mb-7"/>
      <SubSec class="mb-7"/>
      <SubInfo class="mb-7"/>
      <BottInfo class="mb-7"/>
      <div class="text-center mb-5 font-weight-bold text-medium-emphasis">
        Exchange © 2023
      </div>
    </v-main>
  </v-app>
</template>

<script>
import TopCard from "./components/TopCard.vue"
import TopCardInfo from "./components/TopCardInfo.vue";
import SubSec from "./components/SubSec.vue";
import SubInfo from "./components/SubInfo.vue";
import BottInfo from "./components/BottInfo.vue";

export default {
  name: 'App',

  components: {
    TopCard,
    TopCardInfo,
    SubSec,
    SubInfo,
    BottInfo
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  .container{
    margin: auto;
    max-width: 1216px;
  }
  .box{
    padding: 40px;
  }
  .main-container{
    background-color: #F1F3F8;
  }
  .top-bar{
    margin-bottom: 38px;
    width: 100%;
    height: 92px;
    background-color: #fff;
  }
  @media (max-width: 1280px) {
    .container{
      max-width: 1000px;
    }
  }
  @media (max-width: 1280px) {
    .box{
      padding: 26px;
    }
  }
</style>