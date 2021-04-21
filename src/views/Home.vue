<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    想确认是否是服务端渲染可以右键查看源代码，或者查看Network的Doc类请求的Preview或者Response
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h2>测试Vant组件库按需引入的Button、Swipe组件</h2>
    <Button type="primary">ssss</Button>
    <Swipe class="my-swipe" :autoplay="3000" indicator-color="#ff0">
      <SwipeItem>1</SwipeItem>
      <SwipeItem>2</SwipeItem>
      <SwipeItem>3</SwipeItem>
      <SwipeItem>4</SwipeItem>
    </Swipe>
    <h2>测试ant Design组件库按需引入的评分组件</h2>
    <Rate v-model="value"></Rate>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Button, Swipe, SwipeItem} from 'vant'
import { Rate } from 'ant-design-vue'
// import 'vant/lib/button/index.css' // 已经在项目根目录的babel.config.js里面配置了按需引入样式的插件，所以不需要单独再引入css
// import 'ant-design-vue/lib/rate/style/index.css'

export default {
  name: 'Home',
  components: {
    HelloWorld, Button, Swipe, SwipeItem, Rate
  },
  data() {
    return {
      value: 3
    }
  },
}
</script>

<style lang="less" scoped>
// @import '~vant/lib/style/base.css';
// @import '~vant/lib/button/index.css';
.home {
  color: aqua;
}
.my-swipe {
  margin-bottom: 20px;
  .van-swipe-item {
    margin-top: 20px;
    color: #fff;
    font-size: 20px;
    line-height: 350px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>
