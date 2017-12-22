<template>
  <div>
  <mt-swipe :auto="209000">
  <mt-swipe-item v-for="(item,i) in list" :key="i">
    <img :src="item.img" alt="">
  </mt-swipe-item>
</mt-swipe>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list:[]
    };
  },
  created(){
   this.getdata();
  },
  methods: {
    async getdata(){
      const {data} = await this.$http.get('/api/getlunbo');
      if (data.status === 0) this.list = data.message
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe{
  height: 180px;
}
 .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
