<template>
  <div class="container">
    <el-carousel height="700px" arrow="always">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <div
          class="bannerImage"
          :style="`background:url(${$axios.defaults.baseURL}${item.url}) center center no-repeat;background-size:contain contain;`"
        ></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: []
    };
  },
  mounted() {
    this.$axios({
      url: "/scenics/banners"
    })
      .then(res => {
        console.log(res);
        // if(res.status === 200){
        this.banners = res.data.data;
        // }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped lang="less">
.bannerImage {
  width: 1000px;
  height: 700px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>