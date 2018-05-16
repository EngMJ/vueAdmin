<template>
    <div class="content-wrapper">
      <el-steps :active="3" align-center class="step-wrapper">
        <el-step title="已下单" description="2018-06-06 18:11" class="stepShow">
          <div slot="icon" class="stepIcon-wrapper">
            <svg-icon icon-class="orderForm"></svg-icon>
          </div>
        </el-step>
        <el-step title="香港收货" description="2018-06-06 18:11" class="stepShow">
          <div slot="icon" class="stepIcon-wrapper">
            <svg-icon icon-class="consignee"></svg-icon>
          </div>
        </el-step>
        <el-step title="香港发货" description="2018-06-06 18:11" class="stepShow">
          <div slot="icon" class="stepIcon-wrapper">
            <svg-icon icon-class="transport"></svg-icon>
            <div class="stepDownState">
              <div style="height: 245px;">
                <el-steps direction="vertical" :active="3" class="stepDown-wrapper">
                  <el-step></el-step>
                  <el-step>
                    <div slot="icon" class="stepIcon-wrapper">
                      <svg-icon icon-class="affirm"></svg-icon>
                    </div>
                    <div slot="description" style="min-width: 100px">2018-06-06 18:11</div>
                  </el-step>
                  <el-step>
                    <div slot="icon" class="stepIcon-wrapper">
                      <svg-icon icon-class="affirm"></svg-icon>
                    </div>
                    <div slot="description" style="min-width: 100px">2018-06-06 18:11</div>
                  </el-step>
                </el-steps>
              </div>
            </div>
          </div>
        </el-step>
        <el-step title="深圳收货" description="2018-06-06 18:11" class="stepShow">
          <div slot="icon" class="stepIcon-wrapper">
            <svg-icon icon-class="consignee"></svg-icon>
          </div>
        </el-step>
        <el-step title="深圳收货" description="2018-06-06 18:11" class="stepShow">
          <div slot="icon" class="stepIcon-wrapper">
            <svg-icon icon-class="consignee"></svg-icon>
          </div>
        </el-step>
      </el-steps>
      <div class="table-wrapper">
        <el-table
          :data="tableData"
          border
          class="table-content"
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            align="center"
            width="60">
          </el-table-column>
          <el-table-column
            prop="sendMsg"
            align="center"
            label="送货信息">
            <template slot-scope="prop">
              <div>
                <span>送货单号:</span><span class="sendNumber">{{prop.row.sendMsg.number}}</span>
              </div>
              <div>
                {{prop.row.sendMsg.address}}出仓时间:{{prop.row.sendMsg.time}}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="sendTypeMsg"
            align="center"
            label="配送信息">
            <template slot-scope="prop">
              <div>
                送货方式:{{prop.row.sendTypeMsg.manner}}
              </div>
              <div>
                物流公司: {{prop.row.sendTypeMsg.sendCompany}}
              </div>
              <div>
                签收/运单号: {{prop.row.sendTypeMsg.number}}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="receiverMsg"
            align="center"
            label="收货信息">
            <template slot-scope="prop">
              <div>
                收货公司:{{prop.row.receiverMsg.receiverCompany}}
              </div>
              <div>
                收货人电话: {{prop.row.receiverMsg.tel}}
              </div>
              <div>
                收货人地址: {{prop.row.receiverMsg.address}}
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="logisticsState"
            align="center"
            label="物流明细">
            <template slot-scope="prop">
              <div v-for="(item,i) in prop.row.logisticsState.data" :key="i">
                <div v-if="i<=1||prop.row.logisticsState.showState">
                  {{item.time}} 快件到达{{item.arrive}} {{item.city}}
                </div>
              </div>
              <div class="downPull" v-if="prop.row.logisticsState.data.length>2 && !prop.row.logisticsState.showState"
                   @click="showAll(prop.row.logisticsState)">
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <bottomTab></bottomTab>
    </div>
</template>

<script>
  import bottomTab from '@/components/bottomFeedbackTab'
  import { parseTime } from '@/utils/index'
  import Vue from 'vue'
  export default {
    data() {
      return {
        tableData: [
          {
            sendMsg: {
              number: 88537389,
              address: '深圳',
              time: parseTime('2018-06-01')
            },
            sendTypeMsg: {
              manner: '送货上门',
              sendCompany: '德邦物流',
              number: 13213213213
            },
            receiverMsg: {
              receiverCompany: '深圳市腾讯科技有限公司',
              tel: 13213213132,
              address: '深圳市南山区腾讯大厦'
            },
            logisticsState: {
              data: [
                {
                  time: parseTime('2018-06-06'),
                  arrive: '深圳市集散中心',
                  city: '深圳市'
                },
                {
                  time: parseTime('2018-06-05'),
                  arrive: '深圳市集散中心',
                  city: '深圳市'
                },
                {
                  time: parseTime('2018-06-03'),
                  arrive: '深圳市集散中心',
                  city: '深圳市'
                }
              ]
            }
          },
          {
            sendMsg: {
              number: 88537389,
              address: '深圳',
              time: parseTime('2018-06-01')
            },
            sendTypeMsg: {
              manner: '送货上门',
              sendCompany: '德邦物流',
              number: 13213213213
            },
            receiverMsg: {
              receiverCompany: '深圳市腾讯科技有限公司',
              tel: 13213213132,
              address: '深圳市南山区腾讯大厦'
            },
            logisticsState: {
              data: [
                {
                  time: parseTime('2018-06-06'),
                  arrive: '深圳市集散中心',
                  city: '深圳市'
                },
                {
                  time: parseTime('2018-06-05'),
                  arrive: '深圳市集散中心',
                  city: '深圳市'
                },
                {
                  time: parseTime('2018-06-03'),
                  arrive: '深圳市集散中心',
                  city: '深圳市'
                }
              ]
            }
          },
          {
            sendMsg: {
              number: 88537389,
              address: '深圳',
              time: parseTime('2018-06-01')
            },
            sendTypeMsg: {
              manner: '送货上门',
              sendCompany: '德邦物流',
              number: 13213213213
            },
            receiverMsg: {
              receiverCompany: '深圳市腾讯科技有限公司',
              tel: 13213213132,
              address: '深圳市南山区腾讯大厦'
            },
            logisticsState: {
              data: [
                {
                  time: parseTime('2018-06-06'),
                  arrive: '深圳市集散中心',
                  city: '深圳市'
                },
                {
                  time: parseTime('2018-06-05'),
                  arrive: '深圳市集散中心',
                  city: '深圳市'
                },
                {
                  time: parseTime('2018-06-03'),
                  arrive: '深圳市集散中心',
                  city: '深圳市'
                }
              ]
            }
          }
        ]
      }
    },
    components: {
      bottomTab
    },
    methods: {
      showAll(item) {
        Vue.set(item, 'showState', true)
      }
    }
  }
</script>

<style scoped lang="scss">
@import "../../styles/common";
.content-wrapper{
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 794px;
  padding: 22px;
  padding-bottom: 90px;
  .step-wrapper{
    height: 380px;
  }
  .table-wrapper{
    width: 100%;
    padding-bottom: 22px;
    .table-content{
      .sendNumber{
        color: $cmn-color;
        cursor: pointer;
      }
      .downPull{
        width: 20px;
        height: 20px;
        margin: 0 auto;
        background: url("data:image/png;base64,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");
        background-size: 100% 100%;
        cursor: pointer;
      }
    }
  }
  .stepIcon-wrapper{
    position: relative;
    width: 40px;
    height:40px;
    .stepDownState{
      position: absolute;
      left: 2px;
      bottom: -300px;
      font-size: 15px;
      color:#000
    }
  }
}
</style>

<style lang="scss">
  .content-wrapper{
    .stepShow>.el-step__head{
      &>.el-step__icon{
        width: auto;
        height: auto;
        border-radius: 0;
      }
      &>.el-step__line{
        top:20px !important;
      }
      &.is-finish{
        &>.el-step__icon{
          width: auto;
          height: auto;
          background: #00a4d7;
          color: #fff;
        }
      }
      .stepDown-wrapper{
        .el-step__line{
          left: 20px;
          height: 100%;
        }
        &>.is-vertical:first-child>.el-step__head>.el-step__icon{
          display: none;
        }
        .el-step__icon{
          width: auto;
          height: auto;
          border-radius: 0;
        }
        .is-finish{
          .el-step__icon{
            background: #00a4d7;
            color: #fff;
          }
        }
      }
    }
  }
  .table-wrapper{
    .table-content{
      thead th{
        background-color: #ECECEC;
      }
    }
  }
</style>
