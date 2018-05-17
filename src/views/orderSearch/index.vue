<template>
    <div class="container-wrapper">
      <el-form :inline="true" :model="formInline" size="medium" class="form-content">
        <el-form-item label="订单日期:">
          <div class="block">
            <el-date-picker
              v-model="value7"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="~"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions2"
              class="pickerButton">
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
        <el-button size="small" type="primary" @click="$router.push('/orderPay/index')">新增订单</el-button>
      </div>
      <el-table
        ref="singleTable"
        :data="orderListData"
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
          type="index"
          label="序号"
          align="center"
          width="60">
        </el-table-column>
        <el-table-column
          align="center"
          label="采购单号">
          <template slot-scope="prop">
            <div @click="showOrderDetail=!showOrderDetail" class="highText">
              {{prop.row.fusenOrder}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          width="95px"
          label="订单日期">
          <template slot-scope="prop">
            {{parseDate(prop.row.createDate)}}
          </template>
        </el-table-column>
        <el-table-column
          property="status"
          align="center"
          label="订单状态">
        </el-table-column>
        <el-table-column
          property="supplier"
          align="center"
          label="供应商">
        </el-table-column>
        <el-table-column
          align="center"
          label="物流状态">
          <template slot-scope="prop">
            <div class="highText" @click="$router.push({path:'/logistics/index',query:{key:123}})">
              {{prop.row.logisticsStatus}}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          property="money"
          align="center"
          label="订单金额">
        </el-table-column>
        <el-table-column
          align="center"
          width="500px"
          label="备注" class-name="remark-wrapper">
          <template slot-scope="prop">
            <el-input type="textarea"
                      v-model="prop.row.remark"
                      :autosize="{ minRows: 3}"
                      data-textreaStyle></el-input>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          width="200px"
          label="订单确认">
          <template slot-scope="prop">
            <div v-if="prop.row.isConfirmed" class="highText confirmation">
              <a href="#"
                 download="模板"
                 :class="{hidden:false}">
                订单确认书模板
              </a>
              <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                         style="display: inline-block;margin-left: 5px"
                         :on-success="showSuccess">
                <span :class="{hidden:hiddenState}">上传</span>
              </el-upload>
            </div>
            <div v-else class="highText">
              <span>
                订单确认书.doc
              </span>
              <span style="color: red;" @click="showUploadSuccess = !showUploadSuccess">
                删除
              </span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="prop">
            <el-button type="primary" size="small">查看</el-button>
            <el-button type="danger" size="small" style="margin: 0">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="产品明细" :visible.sync="showOrderDetail">
        <el-table :data="orderDtailData" :border="true" style="width:100%">
          <el-table-column type="index" label="序号" width="60"></el-table-column>
          <el-table-column property="productName" label="品名"></el-table-column>
          <el-table-column property="model" label="型号"></el-table-column>
          <el-table-column property="brand" label="品牌"></el-table-column>
          <el-table-column property="unit" label="单位"></el-table-column>
          <el-table-column property="amount" label="订单数量"></el-table-column>
          <el-table-column property="declareQty" label="报关数量"></el-table-column>
          <el-table-column property="deliveryQty" label="发货数量"></el-table-column>
          <el-table-column property="recQty" label="收货数量"></el-table-column>
          <el-table-column property="origin" label="产地"></el-table-column>
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
        orderListData: [
          {
            fusenOrder: 987666,
            createDate: '2018-02-15',
            status: '待受理',
            supplier: 'fs',
            logisticsStatus: '深圳发货',
            money: '10000',
            remark: '备注'
          }
        ],
        currentRow: null,
        showOrderDetail: false,
        orderDtailData: [
          {
            productName: '二极管',
            model: 'KV1221',
            brand: '雄光',
            unit: '个',
            amount: 1000,
            recQty: 1000,
            declareQty: 0,
            deliveryQty: 1000,
            origin: '上海'
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
        radio: '1',
        showUploadSuccess: true,
        hiddenState: false
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
      handleCurrentChange(val) {
        this.currentRow = val
      },
      showSuccess() {
        console.log('成功')
        this.showUploadSuccess = !this.showUploadSuccess
      },
      hiddenHandle() {
        this.hiddenState = true
      },
      parseDate(time) {
        let res = time.split('.')[0].replace(/t/ig, ' ')
        return res
      }
    },
    components: {
      bottomTab
    },
    created() {
      // 登录时,存储客户ID
      // 查询时时.传递客户ID与贸易类型
      // 订单查询
      this.$http.post('http://203.86.26.27:9983/api/order/query', {
        'clientId': '00087895-0000-0000-0000-0000AF0A35D3',
        'businessType': '1'
      }).then((result) => {
        if (result.status !== 200) {
          return
        }
        let res = result.data
        if (res.result === 'success') {
          this.$message({
            showClose: true,
            message: '查询成功',
            type: 'success'
          })
          this.orderListData = res.orderLst
        } else if (res.result === 'fail') {
          this.$message('未找到该订单!')
        } else {
          this.$message({
            showClose: true,
            message: '网络故障加载失败,请重试!',
            type: 'error'
          })
        }
      })
      // 点击订单号,查询明细
      // this.$http.get('http://203.86.26.27:9983/api/order/querygoods', {
      //   params: {
      //     orderId: '0007BC61-0000-0000-0000-0000B06AC6E4'
      //   }
      // }).then((result) => {
      //   console.log('获取详情', result)
      //   if (result.status !== 200) {
      //     this.$message({
      //       showClose: true,
      //       message: '网络故障加载失败,请重试!',
      //       type: 'error'
      //     })
      //     return
      //   }
      //   let res = result.data
      //   if (res.result === 'success') {
      //     this.$message({
      //       showClose: true,
      //       message: '查询成功',
      //       type: 'success'
      //     })
      //     this.orderDtailData = res.goodsLst
      //   } else if (res.result === 'fail') {
      //     this.$message('未找到该订单!')
      //   } else {
      //     this.$message({
      //       showClose: true,
      //       message: '网络故障加载失败,请重试!',
      //       type: 'error'
      //     })
      //   }
      // })
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
  .highText{
    color: #02B7DF;
    cursor: pointer;
    .hidden{
      display: none;
    }
  }
  .tableContent{
  }
}
</style>

<style lang="scss">
  .tableContent{
    /*table中标题样式*/
    .tabHead{
      th{
        background-color: #ECECEC;
      }
    }
    /*table中备注样式*/
    .remark-wrapper{
      padding: 0 !important;
      .cell{
        padding: 0;
        textarea[data-textreaStyle]{
          height: 100% !important;
          border: none;
        }
      }
    }
  }
</style>
