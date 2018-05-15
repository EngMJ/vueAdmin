<template>
    <div class="container-wrapper">
      <el-form :inline="true" :model="formInline" size="medium" class="form-content">
        <el-form-item>
          <div class="block">
            <el-date-picker
              v-model="value7"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions2" class="pickerButton">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item>
          <el-input class="orderInput" placeholder="请输入订单号"></el-input>
          <el-button class="searchButton" type="primary" @click="onSubmit">查询</el-button>
          <el-button class="moreButton">更多查询</el-button>
        </el-form-item>
      </el-form>
      <div style="margin-bottom: 22px">
        <el-button size="small">全选</el-button>
        <el-button size="small">取消选择</el-button>
        <el-button size="small" type="danger">批量删除</el-button>
      </div>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        class="tableContent"
        header-row-class-name="tabHead"
        :border="true"
        style="width: 99.5%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="序号"
          align="center"
          width="60px"
          type="index">
        </el-table-column>
        <el-table-column
          align="center"
          property="company"
          label="公司名称">
        </el-table-column>
        <el-table-column
          align="center"
          label="采购单号">
          <template slot-scope="prop">
            <div @click="showOrderDetail=!showOrderDetail" class="orderNumber">
              {{prop.row.orderNumber}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          property="GCODE"
          align="center"
          label="GCODE">
        </el-table-column>
        <el-table-column
          align="center"
          property="date"
          label="订单日期">
        </el-table-column>
        <el-table-column
          align="center"
          property="totalPrice"
          label="总价">
        </el-table-column>
        <el-table-column
          align="center"
          property="currency"
          label="币种">
        </el-table-column>
        <el-table-column
          align="center"
          property="state"
          label="状态">
        </el-table-column>
        <el-table-column
          align="center"
          property="submitState"
          label="是否提交采购单">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="prop">
            <el-button type="primary" size="small">查看</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="产品明细" :visible.sync="showOrderDetail">
        <el-table :data="gridData" :border="true" style="width:100%">
          <el-table-column type="index" label="序号" width="60"></el-table-column>
          <el-table-column property="sellName" label="品名"></el-table-column>
          <el-table-column property="modelNumber" label="型号"></el-table-column>
          <el-table-column property="brand" label="品牌"></el-table-column>
          <el-table-column property="unit" label="单位"></el-table-column>
          <el-table-column property="orderNumber" label="订单数量"></el-table-column>
          <el-table-column property="consigneeNumber" label="报关数量"></el-table-column>
          <el-table-column property="reprotNumber" label="发货数量"></el-table-column>
          <el-table-column property="consignerNumber" label="收货数量"></el-table-column>
          <el-table-column property="productionAddress" label="产地"></el-table-column>
        </el-table>
      </el-dialog>
      <bottomTab></bottomTab>
    </div>
</template>

<script>
  import bottomTab from '@/components/bottomFeedbackTab'
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        tableData: [
          {
            company: '深圳市联合影像有限公司',
            orderNumber: 'LH1234567',
            GCODE: 'G0987',
            date: '2016-05-02',
            totalPrice: 117868.13,
            currency: 'RMB',
            state: '审核',
            submitState: '否'
          },
          {
            company: '深圳市联合影像有限公司',
            orderNumber: 'LH1234567',
            GCODE: 'G0987',
            date: '2016-05-02',
            totalPrice: 117868.13,
            currency: 'RMB',
            state: '审核',
            submitState: '是'
          },
          {
            company: '深圳市联合影像有限公司',
            orderNumber: 'LH1234567',
            GCODE: 'G0987',
            date: '2016-05-02',
            totalPrice: 117868.13,
            currency: 'RMB',
            state: '审核',
            submitState: '是'
          },
          {
            company: '深圳市联合影像有限公司',
            orderNumber: 'LH1234567',
            GCODE: 'G0987',
            date: '2016-05-02',
            totalPrice: 117868.13,
            currency: 'RMB',
            state: '审核',
            submitState: '是'
          },
          {
            company: '深圳市联合影像有限公司',
            orderNumber: 'LH1234567',
            GCODE: 'G0987',
            date: '2016-05-02',
            totalPrice: 117868.13,
            currency: 'RMB',
            state: '审核',
            submitState: '是'
          }
        ],
        currentRow: null,
        showOrderDetail: false,
        gridData: [
          {
            sellName: '二极管',
            modelNumber: 'KV1221',
            brand: '雄光',
            unit: '个',
            orderNumber: 1000,
            consigneeNumber: 1000,
            reprotNumber: 0,
            consignerNumber: 1000,
            productionAddress: '上海'
          },
          {
            sellName: '二极管',
            modelNumber: 'KV1221',
            brand: '雄光',
            unit: '个',
            orderNumber: 1000,
            consigneeNumber: 1000,
            reprotNumber: 0,
            consignerNumber: 1000,
            productionAddress: '上海'
          },
          {
            sellName: '二极管',
            modelNumber: 'KV1221',
            brand: '雄光',
            unit: '个',
            orderNumber: 1000,
            consigneeNumber: 1000,
            reprotNumber: 0,
            consignerNumber: 1000,
            productionAddress: '上海'
          }
        ],
        pickerOptions2: {
          shortcuts: [
            {
              text: '最近一周',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                picker.$emit('pick', [start, end])
              }
            },
            {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                picker.$emit('pick', [start, end])
              }
            },
            {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date()
                const start = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                picker.$emit('pick', [start, end])
              }
            }
          ]
        },
        value7: '',
        radio: '1'
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
      handleCurrentChange(val) {
        this.currentRow = val
      }
    },
    components: {
      bottomTab
    }
  }
</script>

<style scoped lang="scss">
.container-wrapper{
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 15px 0 90px 20px;
  min-height: 794px;
  .form-content{
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 0;
    .pickerTag{
      vertical-align: top;
    }
    .orderInput{
      display: inline-block;
      width: 360px;
    }
    .searchButton{
      display: inline-block;
    }
    .moreButton{
      display: inline-block;
    }
  }
  .orderNumber{
    color: #02B7DF;
    cursor: pointer;
  }
  .tableContent{
  }
}
</style>

<style lang="scss">
  .tableContent{
    .tabHead{
      th{
        background-color: #ECECEC;
      }
    }
  }
</style>
