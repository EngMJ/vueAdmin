<template>
  <div class="view-main">
    <el-row class="content-wrapper">
      <el-col class="orderState-wrapper">
        <div class="tagContent">
          <div v-for="(item,i) in tagData" :key="i" class="tagItem" :class="{active:item==='下单'}">
            {{item}}
          </div>
        </div>
      </el-col>
      <el-col class="form-wrapper">
        <div class="title">基本信息</div>
        <el-form :label-width="'100px'"
                 :model="formData"
                 size="small"
                 class="form-content">
          <el-form-item label="供应商" class="formItem">
            <el-select v-model="formData.supplier" placeholder="请选择" class="inputBox">
              <el-option
                v-for="(item,i) in supplierOptions"
                :key="item.customId?item.customId:i"
                :label="item.name"
                :value="item.name">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="币种类型" class="formItem">
            <el-select v-model="formData.currency" placeholder="请选择" class="inputBox">
              <el-option
                v-for="(item,i) in currencyOptions"
                :key="i"
                :label="item.orderCurrency"
                :value="item.orderCurrency">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否垫资" class="formItem">
            <el-radio-group v-model="formData.settleType">
              <el-radio :label="1">垫资</el-radio>
              <el-radio :label="2">不垫资</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="我的订单号" class="formItem">
            <el-input v-model="formData.myOrderNo"
                      class="inputBox"
                      placeholder="请输入采购订单号"></el-input>
          </el-form-item>
          <el-form-item label="订单编号" class="numberItem">
            <el-select v-model="formData.fusenOrder" placeholder="请选择" class="inputBox">
              <el-option
                v-for="(item,i) in orderNumberOptions"
                :key="i"
                :label="item.orderNumber"
                :value="item.orderNumber">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col class="tableView-wrapper">
        <div class="title-wrapper">
          <div class="title">订单明细</div>
          <span class="handleButton">
            <el-button type="primary" size="small">批量增加</el-button>
            <el-button size="small" @click="tableData.push({id: $getid()})">新增</el-button>
          </span>
        </div>
        <el-table
          :data="tableData"
          :border="true"
          show-summary
          sum-text="总计:"
          class="orderTable"
          :row-style="{height:'30px'}"
          style="width: 100%;margin-top: 10px">
          <el-table-column
            type="index"
            label="序号"
            align="center"
            width="60">
          </el-table-column>
          <el-table-column
            align="center"
            label="品名">
            <template slot-scope="prop">
              <el-input type="text" v-model="prop.row.productName" class="formInnerInput"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="型号">
            <template slot-scope="prop">
              <el-input type="text" v-model="prop.row.moedel" class="formInnerInput"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="单位">
            <template slot-scope="prop">
              <el-input type="text" v-model="prop.row.unit" class="formInnerInput"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            property="unitPrice"
            align="center"
            label="单价">
            <template slot-scope="prop">
              <el-input type="text" v-model="prop.row.unitPrice" class="formInnerInput"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            property="amount"
            align="center"
            label="数量">
            <template slot-scope="prop">
              <el-input type="text" v-model="prop.row.amount" class="formInnerInput"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            property="totalPrice"
            align="center"
            label="金额">
            <template slot-scope="prop">
              {{prop.row.totalPrice = prop.row.amount * prop.row.unitPrice}}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="品牌">
            <template slot-scope="prop">
              <el-input type="text" v-model="prop.row.brand" class="formInnerInput"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="产地">
            <template slot-scope="prop">
              <el-input type="text" v-model="prop.row.origin" class="formInnerInput"></el-input>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作">
            <template slot-scope="prop">
              <el-button type="danger" size="mini" @click="deleteTableItem(prop)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col class="upload-wrapper">
        <div class="title">附件上传</div>
        <el-upload
          class="upload-content"
          action="#"
          accept=".xls,.xlsx,.txt,.doc,.docx,.pdf"
          :httpRequest="upLoad"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">支持上传文件:表格(*.xls;*.xlsx) 文档(*.txt,*.doc,*.docx,*.pdf)</div>
        </el-upload>
        <div class="make-content">
          <span class="makeTime">制单时间: 2018-03-14 18:22:50</span>
          <span class="maker">制单人: 杨朝妮</span>
        </div>
      </el-col>
      <el-col class="submit-wrapper">
        <el-button type="info" @click="$router.push('/orderSearch/index')">返回</el-button>
        <el-button type="primary" @click="submitHandle(0)">保存</el-button>
        <el-button style="background: #42B983;color: #fff;" @click="submitHandle(0)">提交</el-button>
      </el-col>
    </el-row>
    <bottomTab></bottomTab>
  </div>
</template>

<script>
  import bottomTab from '@/components/bottomFeedbackTab'
  import req from '@/utils/req'
  export default {
    data() {
      let uuid = this.$getid()
      return {
        tableData: [
          {
            productName: '',
            moedel: '',
            unit: '',
            unitPrice: '',
            amount: '',
            brand: '',
            origin: '',
            id: uuid
          }
        ],
        currencyOptions: [
          {
            orderCurrency: 'RMB'
          }
        ],
        supplierOptions: [
          {
            name: '深圳市大创科技有限公司'
          }
        ],
        formData: {
          supplier: '', // 供应商
          currency: '', // 币种
          settleType: 1, // 垫资选项
          customOrder: 'WTF000001', // 海关订单
          fusenOrder: '', // 富森订单
          myOrderNo: '' // 输入的我的订单号
        },
        fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
        tagData: [
          '下单',
          '受理中',
          '待确认',
          '已收货',
          '已付款',
          '已报关',
          '已发货',
          '已签收'
        ],
        orderNumberOptions: []
      }
    },
    created() {
      // 获取供应商信息
      req.get('/baseinfo/supplier', {
        params: {
          customId: '00087895-0000-0000-0000-0000AF0A35D3',
          businessCode: '1'
        }
      }).then((res) => {
        this.supplierOptions = res.supplierLst
      })
      // 获取币种信息
      req.get('/baseinfo/currency', {
        params: {
          customId: '00087895-0000-0000-0000-0000AF0A35D3',
          businessCode: '1'
        }
      }).then((res) => {
        this.currencyOptions = res.currencyLst
      })
      // 垫资信息
      req.get('/baseinfo/loaning', {
        params: {
          customId: '00087895-0000-0000-0000-0000AF0A35D3',
          businessCode: '1'
        }
      }).then((res) => {
        // todo 根据结果决定是否不显示垫资信息
        console.log('垫资信息', res)
      })
      // 获取默认订单号
      req.get('/baseinfo/dedaulttakeno', {
        params: {
          businessCode: '1'
        }
      }).then((res) => {
        let item = res.takeNoLst[0] ? res.takeNoLst[0].orderNumber : ''
        if (item) {
          this.formData.fusenOrder = item
          this.orderNumberOptions.unshift(res.takeNoLst[0])
        }
      })
      // 可选订单号
      req.get('/baseinfo/takeno', {
        params: {
          customId: '88DD0233-2623-4F6C-9894-9D2B3CF85B82'
        }
      }).then((res) => {
        this.orderNumberOptions = this.orderNumberOptions.concat(res.takeNoLst)
      })
      // todo 9982端口
      // 上传文件
      // 删除文件
      // 文件上传列表
      // todo 修改订单为可输入
      // 获取uuid
      // this.$getid
      // todo id是必填的，包括订单id/商品id/文件id，订单id和商品id客户端生成，保证唯一就可以了，fileid由文件服务生成返回
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name}？`)
      },
      saveHandle() {
        this.$notify({
          title: '保存成功',
          message: '该订单已保存',
          type: 'success'
        })
      },
      submitHandle(status) { // 提交/保存数据
        // status为1及提交以后，不能再操作了
        let saveData = this.formData
        saveData.status = status
        saveData.lst = this.tableData
        saveData.orderId = this.$getid()
        saveData.supplier = '5SILICON APPLICATION CORP.'
        saveData.file = [
          {
            'id': '000A6815-0000-0000-0000-00006D854EF7',
            'fileName': 'QQ5截图20180504184811.png', 'fileType': 'png',
            'fTypeName': '3',
            'fileId': '5afbfce6ea1c9c7bd6a4def0'
          }
        ]

        this.$http.post('http://203.86.26.27:9983/api/order/save', saveData).then((res) => {
          if (res.status !== 200) {
            this.$message({
              message: '网络故障请重试!',
              type: 'error'
            })
            return
          }
          let result = res.data
          if (result.result === 'success') {
            this.$notify({
              title: '提交成功',
              message: '该订单已提交',
              type: 'success'
            })
          } else {
            this.$notify({
              title: '提交失败',
              message: '订单提交失败请重试',
              type: 'error'
            })
          }
        })
      },
      deleteTableItem(res) {
        this.$confirm('确实要删除该条目?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(res.$index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      upLoad(item) {
        let formData = new FormData()
        formData.append('file', item.file)
        formData.append('name', '测试文本')
        let uuid = this.$getid()
        formData.append('orderId', uuid)
        this.$http({
          url: 'http://203.86.26.27:9982/file/upload',
          method: 'post',
          data: {
            formData
          }
        }).then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    components: {
      bottomTab
    }
  }
</script>

<style scoped lang="scss">
.view-main{
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 794px;
  padding-bottom: 90px;
}
.content-wrapper{
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 22px;
  padding-bottom: 0;
  font-size: 0;
  .orderState-wrapper{
    .tagContent{
      display: flex;
      justify-content: flex-start;
      .tagItem{
        width: 134px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 15px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAoCAYAAAA7b4IPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADIUlEQVR42u3cwWsjdRTA8e/vl6F0OpsyCC0tmTiFdDy2l7qnwasI2pt686y4yOp1vSgueDIXBVH8A3S9rX/CO1mhtHhrL9OSHtZLIGuGyiTxYAKhzLYZTRgzvA8Ekkze5P34Pd5MfhPGMCYibwEfA68C91DL7DlwBHwVx/Ev/2YHBkBEvnBd91EYhvi+T61WK3tg6j8YDAZ0u12SJCFN08dxHH9adB9GRN50Xffp3t4ejuOUPSY1R1mWcXp6Spqmh3EcPy0Sa4FPwjDUoqggx3EIwxD+OUUoxAIHvu+XPQa1IOO5PSgaZ4G6nlNU13hu60XjbNmJq/8nLQyVSwtD5dLCULm0MFQuLQyVywJcX1+XnYdaoLW1NUTkRxHZmDXGAo+Oj4/TTqfDaDQqewxqAfb39wmC4B1jzO8i8vYsMZOLaC3gG8/zXm+1WtTrhddD1BLo9XqcnZ2RpukT4EEcx89e9Fkz/UJE3gXaW1tb23r9pJqGwyEXFxdcXV09G41GD+I4fpL3OXPzDRHxgccrKyvv7+zs2I2NmQ9Laonc1T3MiwJF5D7wne/7+61Wi9XV1bLHoubstu5hbgsUEQf4yFr7WRAE94IgwBhz5xeq5ZLXPWaaZRFpAl+7rnu4u7vL+vp62WNRc3aze8y6wPXX+KEdo8LGc2uAu2dZRN4zxrQbjcZLzWYTa3WxtGp6vR7n5+f0+/2fgQ9vPZSIyMvAt57nvRFFEZ7nlZ2/mrPhcMjl5SWdTueP8cnnT5NteT9XDfCBtfbLZrNZbzQaeviooLwuMb395gLXK8D39Xr9tSiKcF237PzVnN3WJaZNlsQd4GGtVvs8DEN3e3u77PzVAtzVJaYZEdkDfvB9/0AXsqpp1i4xzQGOoiha2dzcLDt/tSAnJyczdYlpDqBFUXH9fp84jme63D6hixIqlxaGyqWFoXJpYahcWhgqlxaGymWB3mAwKDsPtSDjuX1eNM4Cv3W73bLzVwsyntujonEWaCdJQpZlZY9BzVmWZSRJAtAuGqs3Z6ugudycbfJERA6Bh8B9QP+Vs9z+BH4F2kVvyjbxN+xXR0mzMB99AAAAAElFTkSuQmCC");
        background-size: 100% 100%;
        &.active{
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAoCAYAAAA7b4IPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAC8UlEQVR42u3cz2sTQRQH8Dezm902Ta1QaYjQqrVRLBFFxagtpP6IldqLRPAqXrwqgt79AzwU9OBBEE8N/kDQtulWaGFFevAgFGtNaKuCBQVR0nSzk+zEQ1VimKZJ6rJ2+z63/JjkDfPl7WYzLIFfQlpqMEhZ2Ed4gAIogNYtDsAWC3QhyZXJqWjHhVo+gwAA9IzN6CBJXROm6vSc0D8UUU0Ay3o5fmp3d7VjaUhLDWIo3GnCVAEkqSukpQarHUuDlIUxFO41YaoQpCxc7TjqIzzgdPHIXrWsMcUTTferZY2p00Wj/xMGAwlhMJAQBgMJYTCQEAYDCWEwNoCPpA76X0y/bUp8uFXpGDrLPePnlEze6eKRfcZNFZ7nfHuinszlfVrqUSVjCACAPzF3+6hsnPlC6tpfMY/T80A2iqgm+HhuWs97E997t11d6X2k+MF+Lfm4k7LoEN/k+2E5PQVkp5iSXkpaysibaEdM9DopfULX9c03s1vGVIkeeGbWk9W/Aq1X5brHigu/Y3T23iEp2/eOeP1TTHJ6DshGou5RtiPoui5fz7YMt9J8JM4a8eTDxUq7R0WHiubE/MAx2ehNU88u3LvhbjElvXRF+XaxousYFhCrAICnoxsAWT6KkFU7xkEt+bRdyp1+yBrrnC4a2adHNaGhkkNJc2J+oFs2+r4SdSde23C380raeG8pw2VPPnVdJ9eMlqHtUv5EnDXi7i4XK+0Sxa/9FYxAYu7OEdk4+4nUt71mstN1IxuJukQxArD8s/RGtmXET3nkCWvARLhYuS5RjLSOzt0NS0b/DPEG8EKWu63WJYrJx+XMpQesCRPhYr+7hJZrKNsliskEAEPhcm2FLNw/GeqsZgxu1EFCGAwkhMFAQhgMJITBQEIYDCREOQBzughkr1rWmC4W6ILThSN71bLGNMmVyYhqOl07sklENSHJlclqx+HN2VxsLTdn+/O3+14tFe+g7LCP8K0UAHfmrGMcILdYoJ/XcjvHn2YVIUQUlLueAAAAAElFTkSuQmCC");
          background-size: 100% 100%;
          color: #fff;
        }
        &:first-child{
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAoCAYAAAA7b4IPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAA/ElEQVR42u3cQQqDMBBG4UnpqcbzT65lF9Yi+CtpaFEy71uJKCg8ZmNMsbeImA3Dmaap9NxXzJYo3P3qd8Af1Fq74ihEMb6eOB5XPzTuiTAgEQYkwoBEGJAIAxJhQCIMSIQBiTAScHeLiPmb72GEkYS7fwJpuZ4wkmmdHoSRUMv0IIzEzqYHYSR3ND0IA2a2nx7Pqx8I97Eu2IqImYkBiYmBj1qrmS0LiAkDZrZfF0oYyW2nxPY8YSR2tnqcMBI6mhJbhJFM6z8mhJFEy5TYIowE+BMNP0MYkAgDEmFAIgxIhAGJMCARBiTCgMTmbIPr3pxtPWA7xzH1buf4Ap78ZKD578QFAAAAAElFTkSuQmCC");
          background-size: 100% 100%;
          &.active{
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAoCAYAAAA7b4IPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABkUlEQVR42u3cP07DMBzF8a8tNmBkzC2AM2SAbuUSdKCsMNKVnoM/Gww+A2WDG3grI2UOA20VFVNqkHGR32eM7OoX+emlaqUYpozzh0Af2AO2kP9sAoyAy6au7n/yAQbAOH8BnOW+G0li0NTVeewmY5w/AO5yTy9JdZq6ijpjC5zmnlqS68dusMBu7qkluegztsB27qkluegztrknlvWkYEiQgiFBCoYEKRgSpGBIkIJRCOP8lXF+Z9X1CkY5joBn43x3lcXGON/knlj+3A3Qa+pq/NUCNUaZusDTsvZQY0iwPdQYEmwPNYa0zdtDwZBFY6CnR4ksMoDZyD2FrJVb4Lipq7GCIQAvfHy3uJ5dUDBk3hLtiwpGuT61RJuCUaZgS7QpGGVZ2hJtCkY5vm2JNgWjEE1drfR3+4x+4JIgBUOCFAwJUjAkSMGQIAVDgizwmnsISW4Su8ECj7mnluRGsRssMMw9tSQXfcZ2+m6mQe7JJZlB7Pu3YPrWPgDjfAc4AfaBzdx3I7/yBjwAw5+EAuAdymBgRHKwaFUAAAAASUVORK5CYII=");
            background-size: 100% 100%;
          }
        }
        &:last-child{
          width: 122px;
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAoCAYAAAAxH+4YAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAACcElEQVR42u3cv2vUYBzH8XeeC9JwXgkO5Y7jzNDGQfBczk4P7oJ2dXN3a3Wsk6g4eYuIKP4BznVx/3ZphdD+BQ2lUOgSuMpRSazLCa21Wu2dj3f5viBDeDJ84JMfTx5CPAZE5A6wBNwALqLG2T6wDryw1n4A8ABE5EkQBMtRFBGGIZVKxXVQdQ5FUZBlGWma0u/3n1prH3kicjsIgpV2u43v+64zqiHK85zNzU36/f6CAR5EUaQlTyDf94miCGDJAJ0wDF1nUiMy6LZjgJo+kyfXoNuacR1E/RtadElo0SWhRZeEFl0SWnRJGICDgwPXOdSIGWA5SZL+zs4Oh4eHrvOoETHW2mdFUVzb2tr6uLGxQa/Xc51JjYB3dEdE7gLder3e0PXvybG6unp8MmatfQ9c3d3dfZUkyde9vT3XGdWQeKcNiMg88CYMw+uzs7NMTU25zqr+0okr+ihr7RrQybLsYZIk+9vb2zpZG2PeWQ4SkRbwMgiChbm5Oaanp13nVn/gl1f0D74MNjzvTOeG+s/8dlotIvc8z+s2m81LrVYLY3QxbRydWrSIXAZeV6vVW3EcU61WXWdV53CiaBHxgPvGmOetVqvWbDb1dj0BjhUtIleAt7Va7WYcxwRB4DqfGhIfQER8YLFSqTyOoihoNBquc6kh80WkDbwLw7CjCyOTywfW4zi+MDMz4zqLGiEDaMkloC/FJaFFl4QWXRJadElo0SWhRZeEAXpFUbjOoUZk0O2+AT5lWeY6jxqRQbfrBuimaUqe564zqSHL85w0TQG6+rOaCfTTn9V8HxSRBWARmAf0K4Px9hlYA7rW2hWAb0jVu/FGwKsnAAAAAElFTkSuQmCC");
          background-size: 100% 100%;
          &.active{
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAoCAYAAAAxH+4YAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAACXklEQVR42u3csWsTURwH8N/73eVOJdGh0hKxorWxIBUEpUEtnJWmQi2IDnVz6OjSwcG/QpAODh1cnBqK4lJM06HFq5BBcOigXEg6mUFRahKv99J756KQUGql5nzcvd9nu7s3fOHL4z3ujsfgl+FieSGDPJtkIo0ABpDIEgC8EWDNEUZpIzd4DwCAAQBcX/log6ZdW/NM2RlJF1mmB+D766vjQ6NsuFheOK7DNJUcT5bpwZcdyGMGeZZKjq81z4QM8iwmmUjLDkPClWQijbTxij8EMFB2CPJ/UNGKoKIVQUUrgopWBBWtCCpaEVgRidU7RnNHdhASLnwzPjS23jLnbyfqlStGS3YeEhLWfnGx6Lw4jzy3JI4mt3zZ0Ui33De2Otfo97nM3Qfmt/4R1nw3ZbqB7ICke9heD84sV55d1rYnP7AjfRtck52T/INdM7pddWJgZtb8ejIl+Mq0UafFO+LY3wzqKWzOXdXdm3VMnKNv19HzxxndzgfmBwC0PYswfb8Bl4rOqwGtObHIU4dkhyUHt2fRPYXNuVHdnfzMtLOLnDqOul1F27bNHrq9S6e1HzfyPEV/n8RER9HpQvXpY8+95WuJU3l+WHY20kU6AIBt2/qj7d7XfehZL3lq33WbRI/ev1ydf+K5U9/RSL+lFyOxpY/pzZnn/Bg1HHPIAKhkBdCPB4qgohVBRSuCilYEFa0IKloRKAC47BAkXAKAYyPAmuwgJFyNAGvoCKNkmZ7sLCQklumBI4wSHVYTYx2H1fy+eaFYzg8iH0kycQIBErJDkoMTAK1GgJ/aj5/6CTbVuYJPaGqgAAAAAElFTkSuQmCC");
            background-size: 100% 100%;
          }
        }
      }
    }
  }
  .form-wrapper{
    margin-top: 20px;
    .form-content{
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 20px;
      .formItem{
        flex: 0 0 40%;
      }
      .numberItem{
        position: absolute;
        right: 0;
        top: -97px;
        .inputBox{
          width: 200px;
        }
      }
    }
    .inputBox{
      width: 360px;
    }
  }
  .title{
    display: block;
    height: 22px;
    line-height: 22px;
    padding-left: 12px;
    border-left: 2px solid #01B8E1;
    font-size: 17px;
    font-weight: 600;
    color: #09BAE3;
  }
  .tableView-wrapper{
    .title-wrapper{
      display: flex;
      justify-content: space-between;
      .handleButton{
      }
    }
  }
  .upload-wrapper{
    width: 530px;
    margin-top: 30px;
    .title{
      font-size: 17px;
    }
    .upload-content{
      margin-top: 20px;
      .el-upload__tip{
        display: inline-block;
        padding-left: 15px;
      }
    }
    .make-content{
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 30px;
      font-size: 14px;
    }
  }
  .submit-wrapper{
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 20px;
    bottom: 0px;
  }
}
</style>
<style lang="scss">
  /*修改table-footer总计样式*/
  .el-table__footer-wrapper{
    td{
      &:not(:first-child){
        color:red;
      }
    }
  }
  /*table Item样式*/
  .orderTable{
    .el-table__row{
      &>td{
        padding: 0;
      }
    }
    .formInnerInput{
      &>.el-input__inner{
        width: 100%;
        height: 100%;
        text-align: center;
        border: none;
        border-radius: 0;
      }
    }
  }
  .tableView-wrapper{
    td,th{
      padding: 8px 0;
    }
  }
</style>
