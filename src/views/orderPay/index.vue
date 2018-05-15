<template>
  <div class="view-main">
    <el-row class="content-wrapper">
      <el-col class="orderState-wrapper">
        <div class="orderNumber">订单编号: 893289574924</div>
        下单状态组件
      </el-col>
      <el-col class="form-wrapper">
        <div class="title">基本信息</div>
        <el-form :label-width="'100px'"
                 :model="formData"
                 size="small"
                 class="form-content">
          <el-form-item label="供应商" class="formItem">
            <el-input v-model="formData.supplier" class="inputBox"></el-input>
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
        <el-button type="info">返回</el-button>
        <el-button type="primary">保存</el-button>
        <el-button style="background: #42B983;color: #fff;">提交</el-button>
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
            Number: 1000,
            totalPrice: 10000,
            brand: '飞利浦',
            productionAddress: '深圳'
          }
        ],
        options: [
          {
            value: '选项1',
            label: '黄金糕'
          },
          {
            value: '选项2',
            label: '双皮奶'
          }
        ],
        formData: {
          supplier: '',
          input: '',
          selectValue: '',
          radio: 1
        },
        fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]
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
  padding: 22px;
  padding-bottom: 40px;
  font-size: 0;
  .orderState-wrapper{
    .orderNumber{
      float: right;
    }
  }
  .form-wrapper{
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
