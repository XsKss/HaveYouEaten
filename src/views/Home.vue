<template>
  <div id="home" class="home">
    <!-- 导航 -->

    <nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <span class="iconfont icon-sousuo"></span>
      </template>

      <template #title>
        <span>{{ titlePosition }}</span>
      </template>

      <template #right>
        <span class="iconfont icon-yonghu"></span>
      </template>
    </nav-bar>

    <!-- 轮播 -->

    <swipe class="my-swipe" :loop="false" indicator-color="grey" show-indicators="true">
      <swipe-item>
        <grid>
          <grid-item v-for="(item, index) in swiperList1" :key="index">
            <Van-Image
              width="0.84rem"
              hidden="0.84rem"
              :src="'https://fuss10.elemecdn.com/' + item.image_url"
            />
            <span>{{ item.title }}</span>
          </grid-item>
        </grid>
      </swipe-item>
      <swipe-item>
        <grid>
          <grid-item v-for="(item, index) in swiperList2" :key="index">
            <Van-Image
              width="0.84rem"
              hidden="0.84rem"
              :src="'https://fuss10.elemecdn.com/' + item.image_url"
            />
            <span>{{ item.title }}</span>
          </grid-item>
        </grid>
      </swipe-item>
    </swipe>

    <ShowList :shopListArr="shopListArr"></ShowList>

    <MenuBar></MenuBar>
  </div>
</template>

<script>
// @ is an alias to /src
import { getPosiDate, getIndexEntryDate, getRestaurantsDate } from "@/api/data";
import { Image, NavBar, Icon, Swipe, SwipeItem, Grid, GridItem } from "vant";
import ShowList from "@/components/ShowList.vue";
import MenuBar from "@/components/MenuBar";

export default {
  name: "Home",
  data() {
    return {
      titlePosition: "",
      swiperList1: [],
      swiperList2: [],
      shopListArr: []
    };
  },
  components: {
    NavBar,
    Icon,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    VanImage: Image,
    ShowList,
    MenuBar
  },
  method: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  async mounted() {
    getPosiDate().then(res => {
      this.titlePosition = res.name;
    });
    getIndexEntryDate().then(res => {
      this.swiperList1 = res.slice(0, 8);
      this.swiperList2 = res.slice(8, 16);
    });
    getRestaurantsDate().then(res => {
      this.shopListArr = res;
    });
  }
};
</script>

<style lang="less">
#home {
  .van-nav-bar {
    height: 1rem;
    background: linear-gradient(90deg, #0af, #0085ff);
    .iconfont {
      font-size: 0.48rem;
    }
  }
  .van-nav-bar,
  .van-nav-bar__title {
    color: #fff;
    font-size: 0.36rem;
  }
  .my-swipe {
    height: 3.6rem;
  }
  .van-tabbar {
    height: 1rem;
  }
}
</style>
