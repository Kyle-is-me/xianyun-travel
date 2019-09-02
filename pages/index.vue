<template>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <div class="banners-image" :style="`background:url(${$axios.defaults.baseURL}${item.url})`">

        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data(){
    return {
      banners:[]
    }
  },
  mounted(){
    this.$axios({
      url:'/scenics/banners'
    })
    .then((res)=>{
    console.log(res)
    // if(res.status === 200){
      this.banners = res.data.data
    // }
    })
    .catch((err)=>{
    console.log(err)
    })
  }
};
</script>

<style scoped lang="less">
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>