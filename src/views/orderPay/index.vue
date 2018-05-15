<template>
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
        <span class="handleButton">
          <el-button type="primary">批量增加</el-button>
          <el-button>新增</el-button>
        </span>
        <div class="title">订单明细</div>
      </div>
      <el-table
        :data="tableData6"
        border
        show-summary
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="amount1"
          sortable
          label="数值 1">
        </el-table-column>
        <el-table-column
          prop="amount2"
          sortable
          label="数值 2">
        </el-table-column>
        <el-table-column
          prop="amount3"
          sortable
          label="数值 3">
        </el-table-column>
      </el-table>
    </el-col>
    <el-col class="upload-wrapper">
      <div class="title">附件上传</div>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <div class="make-content">
        <span class="makeTime">制单时间: 2018-03-14 18:22:50</span>
        <span class="maker">制单人: 杨朝妮</span>
      </div>
    </el-col>
    <el-col class="submit-wrapper">
      <el-button>返回</el-button>
      <el-button>保存</el-button>
      <el-button>提交</el-button>
    </el-col>
    <!--底部组件-->
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        tableData6: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
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
    }
  }
</script>

<style scoped lang="scss">
.content-wrapper{
  box-sizing: border-box;
  width: 100%;
  padding: 22px 22px 0 22px;
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
    padding-left: 12px;
    border-left: 2px solid #01B8E1;
    font-size: 16px;
    font-weight: 600;
    color: #09BAE3;
  }
  .tableView-wrapper{
    .title-wrapper{
      .handleButton{
        float: right;
      }
    }
  }
  .upload-wrapper{
    .upload-input{
      .inputBox{
        width: 360px;
      }
    }
   .upload-list{}
   .make-content{}
  }
  .submit-wrapper{
    display: flex;
    justify-content: flex-end;
  }
}
</style>
