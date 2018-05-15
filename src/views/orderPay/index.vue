<template>
  <div class="view-main">
    <el-row class="content-wrapper">
      <el-col class="orderState-wrapper">
        <div class="orderNumber">订单编号: 893289574924</div>
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
            <el-select v-model="formData.companyValue" placeholder="请选择" class="inputBox">
              <el-option
                v-for="item in supplierOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="币种类型" class="formItem">
            <el-select v-model="formData.selectValue" placeholder="请选择" class="inputBox">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否垫资" class="formItem">
            <el-radio-group v-model="formData.radio">
              <el-radio :label="1">垫资</el-radio>
              <el-radio :label="2">不垫资</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="我的订单号" class="formItem">
            <el-input v-model="formData.input"
                      class="inputBox"
                      placeholder="请输入采购订单号"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col class="tableView-wrapper">
        <div class="title-wrapper">
          <div class="title">订单明细</div>
          <span class="handleButton">
            <el-button type="primary" size="small">批量增加</el-button>
            <el-button size="small">新增</el-button>
          </span>
        </div>
        <el-table
          :data="tableData"
          :border="true"
          show-summary
          sum-text="总计:"
          highlight-current-row
          :row-style="{height:'30px'}"
          style="width: 100%;margin-top: 10px">
          <el-table-column
            type="index"
            label="序号"
            align="center"
            width="60">
          </el-table-column>
          <el-table-column
            property="sellName"
            align="center"
            label="品名">
          </el-table-column>
          <el-table-column
            property="modelNumber"
            align="center"
            label="型号">
          </el-table-column>
          <el-table-column
            property="unit"
            align="center"
            label="单位">
          </el-table-column>
          <el-table-column
            property="unitPrice"
            align="center"
            label="单价">
          </el-table-column>
          <el-table-column
            property="Number"
            align="center"
            label="数量">
          </el-table-column>
          <el-table-column
            property="totalPrice"
            align="center"
            label="金额">
          </el-table-column>
          <el-table-column
            property="brand"
            align="center"
            label="品牌">
          </el-table-column>
          <el-table-column
            property="productionAddress"
            align="center"
            label="产地">
          </el-table-column>
          <el-table-column
            align="center"
            label="操作">
            <template slot-scope="prop">
              <el-button type="danger" size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col class="upload-wrapper">
        <div class="title">附件上传</div>
        <el-upload
          class="upload-content"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">支持上传文件:表格(*.xls;*.xlsx) 文档(*.text,*.doc,*.docx,*.pdf)</div>
        </el-upload>
        <div class="make-content">
          <span class="makeTime">制单时间: 2018-03-14 18:22:50</span>
          <span class="maker">制单人: 杨朝妮</span>
        </div>
      </el-col>
      <el-col class="submit-wrapper">
        <el-button type="info" @click="$router.push('/orderSearch/index')">返回</el-button>
        <el-button type="primary" @click="saveHandle">保存</el-button>
        <el-button style="background: #42B983;color: #fff;" @click="submitHandle">提交</el-button>
      </el-col>
    </el-row>
    <bottomTab></bottomTab>
  </div>
</template>

<script>
  import bottomTab from '@/components/bottomFeedbackTab'
  export default {
    data() {
      return {
        tableData: [
          {
            sellName: 'LED灯',
            modelNumber: 'SR',
            unit: '个',
            unitPrice: 20,
            Number: 2000,
            totalPrice: 20000,
            brand: '飞利浦',
            productionAddress: '深圳'
          },
          {
            sellName: 'LED灯',
            modelNumber: 'SR',
            unit: '个',
            unitPrice: 10,
            Number: 1000,
            totalPrice: 10000,
            brand: '飞利浦',
            productionAddress: '深圳'
          },
          {
            sellName: 'LED灯',
            modelNumber: 'SR',
            unit: '个',
            unitPrice: 10,
            Number: 1200,
            totalPrice: 12000,
            brand: '飞利浦',
            productionAddress: '深圳'
          }
        ],
        options: [
          {
            value: '选项1',
            label: 'RMB'
          },
          {
            value: '选项2',
            label: 'USD'
          }
        ],
        supplierOptions: [
          {
            value: '选项1',
            label: '深圳市大创科技有限公司'
          },
          {
            value: '选项2',
            label: '深圳市腾讯科技有限公司'
          },
          {
            value: '选项3',
            label: '深圳市顺丰科技有限公司'
          }
        ],
        formData: {
          supplier: '',
          input: '',
          companyValue: '',
          selectValue: '',
          radio: 1
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
        ]
      }
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
      submitHandle() {
        this.$notify({
          title: '提交成功',
          message: '该订单已提交',
          type: 'success'
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
    .orderNumber{
      float: right;
      font-size: 15px;
    }
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
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 20px;
      .formItem{
        flex: 0 0 40%;
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
  .tableView-wrapper{
    td,th{
      padding: 8px 0;
    }
  }
</style>
