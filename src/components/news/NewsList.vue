<template>
  <div>
    <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
                <h1>{{ item.title }}</h1>
                <p class="mui-ellipsis"><span>{{ item.add_time|dataFormate}}</span><span>{{ item.click }}</span></p>
            </div>
        </router-link>
    </li>
</ul>
  </div>
</template>
<script>
  export default {
  data() {
    return {
        list:[]
    };
  },
  created(){
 this.getlist();
  },
   methods:{   
     async getlist(){
      const {data} = await this.$http.get('/api/getnewslist');
      if(data.status===0) return this.list = data.message;
     }
 }
  }  
</script>
<style lang="less" scoped>
.mui-media-body{
      h1{
         font-size:16px;
      }
      p{
        color:skyblue;
        display: flex;
        justify-content:space-between;
      }
  }
</style>

