<template>
  <div class="contanier">
    <el-row type="flex" justify="space-between">
      <!--内容正文区域  -->
      <div class="content">
        <!-- 筛选区 -->
        <div class="filter">
          <el-row type="flex" justify="space-between">
            <el-col :span="8">
              <span>单程：</span>
            </el-col>
            <el-col :span="16"></el-col>
          </el-row>
          <div class="filter-cancel"></div>
        </div>

        <!-- 航班信息头部 -->
        <FlightListHead />

        <!-- 航班信息 -->
        <div>
          <FlightsListItem v-for="(item,index) in flightsList" :key="index" :data="item" />
          <!-- 分页结构 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>

      <!-- 侧边栏组件 -->
      <div class="aside">
        <div class="statement"></div>

        <div class="historySearch"></div>
      </div>
    </el-row>
  </div>
</template>

<script>
import FlightListHead from "@/components/air/flightsListHead";
import FlightsListItem from "@/components/air/flightsListItem";
export default {
  data() {
    return {
      //机票信息的总数据
      flightsData: {},
      //创建一个中间数组来存储要每页显示的数据
      flightsList:[],
      pageIndex:1,
      pageSize:5,
      total:0
    };
  },
  methods:{
    //每页显示条数变化触发的事件
    handleSizeChange(val){
      console.log(val)//val表示当前每页的条数
      //每一次设置完显示条数后，都会回到第一页，所以直接设置第一页的显示数就行了
      this.flightsList = this.flightsData.flights.slice(0,val)
    },

    //当前页码变化触发的事件
    handleCurrentChange(val){
      // console.log(val)//val表示当前页数
      this.pageIndex = val
      this.flightsList = this.flightsData.flights.slice((this.pageIndex-1)*this.pageSize,this.pageSize*this.pageIndex)
    }
  },
  mounted() {
    // console.log(this.$route)
    this.$axios({
      url: "/airs",
      params: this.$route.query
    }).then(res => {
      // console.log(res);
      //赋值给总数据
      this.flightsData = res.data;
      // 分页的总条数
      this.total = this.flightsData.flights.length
      // 存储第一页的值
      this.flightsList = this.flightsData.flights.slice(0,this.pageSize)
    });
  },
  components: {
    FlightListHead,
    FlightsListItem
  }
};
</script>

<style lang="less" scoped>
.contanier {
  width: 1000px;
  margin: 20px auto;

  .content {
    width: 745px;
  }

  .aside {
    width: 240px;
    background-color: skyblue;
  }
}
</style>