<template>
  <div class="com">
    <h1>发表评论</h1>  
    <hr>
    <textarea cols="20" rows="10" placeholder="请输入内容（最多120字）" v-model="msg"></textarea>
    <button data-v-e10688ce="" class="mint-button mint-button--primary mint-button--large" @click="fabiao">
    <label class="mint-button-text" >发表评论</label></button>
    <div v-for="(item,i) in list" :key="i">
     <div class="first">第{{ i+1 }}楼&nbsp;用户：{{ item.user_name }}&nbsp; 发表时间：{{ item.add_time | dataFormate}}</div>
     <div class="second">{{item.content}}</div>   
    </div>
    <button data-v-e10688ce="" class="mint-button mint-button--danger mint-button--large is-plain" @click="jiazai"><!----><label class="mint-button-text">加载更多</label></button>
  </div>
</template>
<script>
import {Toast} from "mint-ui";
export default {
  data(){
    return{
     list:[],
     page:1,
     msg:''
    }
  },
  props:['index'],
  created(){
   this.getlist()
  },
  methods:{
   async getlist(){
       const {data} = await this.$http.get('/api/getcomments/'+this.index+'?pageindex='+this.page);
       if(data.status===0)  return (this.list = this.list.concat(data.message));
   },
   jiazai(){
       this.page++;
       this.getlist();
   },
   async fabiao(){
        if (this.msg.trim().length <= 0) return Toast("请填写评论内容！");
           const {data} = await this.$http.post("/api/postcomment/" + this.index,{ content: this.msg.trim()});
        if(data.status===0){
           this.list.unshift({
          user_name: "匿名用户",
          add_time: new Date(),
          content: this.msg.trim()
        });
        this.msg = '';
        }
   }
  }
}
</script>
<style lang="scss" scoped>
.com{
    h1{
        font-size:20px; 
    }
    textarea{
        height: 120px;
        font-size: 14px;
    }
    .first{
        font-size: 14px;
        background-color: #ccc;
        margin: 6px 0;
    }
    .second{
        margin: 6px 0;
        font-size:13px;
    }
}
</style>


