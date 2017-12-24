<template>
  <div>

    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<span :class="['mui-control-item',item.id === 0 ?'mui-active':'']" v-for="item in list" :key="item.id">
							{{ item.title }}
						</span>
					</div>
				</div>
			</div>
			<ul>
				<li v-for="item in imglist" :key='item.id'>
					<img v-lazy="item.img_url">
				</li>
      </ul>
  </div>
</template>
</template>
<script>
 import mui from "../../../lib/mui/js/mui.js";
 export default {
  data(){
    return {
		 list:[],
		 imglist:[]
    }
	},
	created(){
		this.getlist();
		this.img(0);
	},
	methods:{
		async getlist(){
			 const {data}= await this.$http.get('/api/getimgcategory')
			 if(data.status===0) {
				 this.list = data.message
				 this.list.unshift( { title:'全部', id:0 })
			 }
		},
		async img(id){
			const {data} = await this.$http.get('/api/getimages/'+id)
			if(data.status===0) return this.imglist = data.message;
		}
	},
  mounted(){
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 
    })
  }
 }
</script>
<style lang="scss" scoped>
ul{
	list-style:none;
	background-color:black; 
}
.mui-slider {
  touch-action: pan-x;
}
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
