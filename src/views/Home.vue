<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Button type="primary">ssss</Button>
    <Swipe class="my-swipe" :autoplay="3000" indicator-color="#ff0">
      <SwipeItem>1</SwipeItem>
      <SwipeItem>2</SwipeItem>
      <SwipeItem>3</SwipeItem>
      <SwipeItem>4</SwipeItem>
    </Swipe>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Button, Swipe, SwipeItem} from 'vant'
// import 'vant/lib/button/index.css'

export default {
  name: 'Home',
  components: {
    HelloWorld, Button, Swipe, SwipeItem
  }
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  font-size: 20px;
  line-height: 350px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
