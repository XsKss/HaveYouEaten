<template>
  <div class="MenuBar">
    <Tabbar v-model="active" route>
      <Tabbar-Item icon="home-o" to="/">主页</Tabbar-Item>

      <Tabbar-Item icon="search" to="/Find">
        <span>发现</span>
        <template #icon>
          <span class="iconfont icon-zhinanzhen"></span>
        </template>
      </Tabbar-Item>

      <Tabbar-Item icon="friends-o" to="/Order">
        <span>订单</span>
        <template #icon>
          <span class="iconfont icon-diancan"></span>
        </template>
      </Tabbar-Item>

      <Tabbar-Item icon="setting-o" to="/Mine">
        <span>我的</span>
        <template #icon>
          <span class="iconfont icon-yonghu"></span>
        </template>
      </Tabbar-Item>
    </Tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  name: "MenuBar",
  components: {
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style scoped>
.van-tabbar {
  height: 1rem;
}
</style>