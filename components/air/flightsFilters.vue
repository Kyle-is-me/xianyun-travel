<template>
  <div class="flights-filters">
      <div v-if="list.info">
            <el-row class="filters-head" type="flex" justify="space-between" align="middle">
      <el-col :span="8">
        <span>单程：</span> {{list.info.departCity}} - {{list.info.destCity}} / {{list.info.departDate}}
      </el-col>
      <el-col :span="16">
        <el-row type="flex" justify="space-between" class="filters-options">
          <el-col :span="6">
            <el-select v-model="airport" placeholder="起飞机场" size="mini" @change="chooseAirport">
              <el-option
                v-for="(item,index) in list.options.airport"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-select v-model="value" placeholder="起飞时间" size="mini">
              <el-option
                v-for="(item,index) in list.options.flightTimes"
                :key="index"
                :label="`${item.from}:00 - ${item.to}:00`"
                :value="`${item.from}:00 - ${item.to}:00`"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-select v-model="company" placeholder="航空公司" size="mini">
              <el-option
                v-for="(item,index) in list.options.company"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-select v-model="planeType" placeholder="机型" size="mini">
              <el-option
                v-for="(item,index) in planes"
                :key="index"
                :label="item"
                :value="item"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div class="filters-cancel">
      <span>筛选：</span>
      <el-button type="primary" round size="mini" >撤销</el-button>
    </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Object,
            default:{}
        }
    },
  data() {
    return {
        planes:[
            "大","中","小"
        ],
        value: "",
        airport: "",
        company: "",
        planeType:'',
    };
  },
  methods:{
      //选起飞机场触发的事件
      chooseAirport(){
          this.$emit('selectAirport',this.airport)
      }
  }
};
</script>

<style lang="less" scoped>
.flights-filters {
  margin-bottom: 20px;
  height: 66px;
  .filters-head {
    height: 28px;
    line-height: 28px;
    margin-bottom: 10px;
    font-size: 14px;

    .filters-options {
      > div {
          padding-left: 5px;
      }
    }
  }

  .filters-cancel{
      font-size: 14px;
  }
}
</style>