<template>
  <div class="content">
    <h1>{{datalist.title }}</h1>
    <p><span>{{ datalist.add_time | dataFormate }}</span><span>{{datalist.click }}</span></p>
    <hr>
    <div v-html="datalist.content"></div>
    <comment :index="id"></comment>
  </div>
</template>
<script>
import comment from '../../components/sub-components/comment.vue';
  export default {
  data() {
    return {
      datalist:[]
    };
  },
  created(){
  this.getlist()
  },
  props:['id'],
  components:{
    comment
  },
  methods:{
    async getlist(){
     const {data} = await this.$http.get('/api/getnew/'+this.id);
     if(data.status===0) return this.datalist=data.message[0];
    }
  }
  }  
</script>
<style lang="less" scoped>
.content{
  padding:3px; 
  h1{
    font-size: 16px;
    text-align: center;
    margin: 10px 0;
    color: red;
  }
  p{
    display: flex;
    justify-content:space-between;
    color: skyblue;
  }
}

</style>

